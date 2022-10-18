from flask import Flask
from flask import url_for, jsonify, render_template
from rpi_ws281x import Color
import board
import neopixel
import os
import signal
import subprocess
import time
import sys

num_pixels = 34

app = Flask(__name__)
pixels=neopixel.NeoPixel(board.D18, 34, brightness=0.1)
proc = ''

def dir_last_updated(folder):
    return str(max(os.path.getmtime(os.path.join(root_path, f))
                   for root_path, dirs, files in os.walk(folder)
                   for f in files))

def procOff():
    global proc
    if not (proc==''):
        print('PARENT      : Signaling child')
        sys.stdout.flush()
        os.kill(proc.pid, signal.SIGUSR1)
        time.sleep(0.05)
        proc=''

@app.route('/')
def index():
    return render_template('index.html', 
                            last_updated=dir_last_updated('static'))


@app.route('/off', methods=['POST'])
def off():
    procOff()
    print("Lights off")
    pixels.fill((0,0,0))
    return "Off"
	
@app.route('/magnet', methods=['POST'])
def magnet():
    procOff()
    print("Magnet lights on!")
    pixels.fill((255,0,0))
    return "Magnet"
	
@app.route('/n2', methods=['POST'])
def n2():
    procOff()
    print("n2tank lights on!")
    #pixels.fill((0,200,200))
    return "n2tank"
	
@app.route('/he', methods=['POST'])
def he():
    procOff()
    print("hetank lights on!")
    pixels.fill((200,100,200))
    return "hetank"
	
@app.route('/electronics', methods=['POST'])
def electronics():
    procOff()
    print("electronics lights on!")
    pixels.fill((0,200,0))
    return "electronics"
    
@app.route('/party', methods=['POST'])
def party():
    procOff()
    print("Party lights on!")
    #simpleRainbow()
    rainbowCycle(pixels)
    return "party"
    
def wheel(pos):
    """Generate rainbow colors across 0-255 positions."""
    
    if pos < 85:
        return Color(pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return Color(255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return Color(0, pos * 3, 255 - pos * 3)
        
def simpleRainbow() :
    for i in range(255):
        pixels.fill((i,0,0))
        time.sleep(0.01)
    pixels.fill((0,0,0))
        
def rainbowCycle(strip, wait_ms=0.1, iterations=1):
    """Draw rainbow that uniformly distributes itself across all pixels."""
    for j in range(255 * iterations):
        for i in range(2):
            pixel_index = (i * 256 // num_pixels) + j
            strip[i] = wheel(pixel_index & 255)
        strip.show()
        #if received:
         #   break
        #time.sleep(wait_ms / 1000.0)

if __name__ == "__main__":
    app.run(port=8080, debug=True)