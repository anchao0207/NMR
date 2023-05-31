from cmath import sin
from math import fabs
from turtle import delay
from flask import Flask
from flask import url_for, jsonify, render_template
from flask_cors import CORS
from rpi_ws281x import Color
import board
import neopixel
import os
import signal
import subprocess
import time
import sys
import math

num_pixels = 294


app = Flask(__name__)
CORS(app)

pixels = neopixel.NeoPixel(board.D18, num_pixels, brightness = 0.5, auto_write=False)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/off', methods=['POST'])
def off():
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("Off")

@app.route('/magnet', methods=['POST'])
def magnet():
    off()
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (178,190):
                pixels[i] = (int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 127 +128),0)
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("magnet")

@app.route('/temperature-heli', methods=['POST'])
def temperatureHeli():
    off()
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (117,157):
                pixels[i] = (0,int((math.sin(i+Position)) * 127 +128),0)
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("temperature-heli")

@app.route('/temperature-nitro', methods=['POST'])
def temperatureNitro():
    off()
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (60,117):
                pixels[i] = (0,0,int((math.sin(i+Position)) * 127 +128))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("temperature-nitro")

@app.route('/temperature-mylar', methods=['POST'])
def temperatureMylar():
    off()
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (30):
                pixels[i] = (int((math.sin(i+Position)) * 127 +128),0,0)
            for i in range (30,60):
                pixels[i] = (int((math.sin(i+Position)) * 127 +128),0,0)
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("temperature-mylar")



@app.route('/sample', methods=['POST'])
def sample():
    def RunningLights():
        Position=19
        for j in range (20):
            Position-=1
            for i in range (190,228):
                pixels[i] = (0,int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 127 +128))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("sample")

@app.route('/field', methods=['POST'])
def field():
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (158,178):
                pixels[i] = (int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 64 +64),0)
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("field")

@app.route('/pulseH', methods=['POST'])
def pulseH():
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (228,294):
                pixels[i] = (int((math.sin(i+Position)) * 63 +64),0,int((math.sin(i+Position)) * 127 +128))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("pulse")


@app.route('/pulseC', methods=['POST'])
def pulseC():
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (228,294):
                pixels[i] = (0,int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 64 +64))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("pulse")

@app.route('/pulseF', methods=['POST'])
def pulseF():
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (228,294):
                pixels[i] = (int((math.sin(i+Position)) * 102 +102),0,int((math.sin(i+Position)) * 102 +102))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("pulse")

@app.route('/pulseP', methods=['POST'])
def pulseP():
    def RunningLights():
        Position=0
        for j in range (20):
            Position+=1
            for i in range (228,294):
                pixels[i] = (int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 127 +128),int((math.sin(i+Position)) * 25 +26))
            pixels.show()
    RunningLights()
    pixels.fill((0,0,0))
    pixels.show()
    return jsonify("pulse")


# proc = ''


# def dir_last_updated(folder):
#     return str(max(os.path.getmtime(os.path.join(root_path, f))
#                    for root_path, dirs, files in os.walk(folder)
#                    for f in files))

# def procOff():
#     global proc
#     if not (proc==''):
#         print('PARENT      : Signaling child')
#         sys.stdout.flush()
#         os.kill(proc.pid, signal.SIGUSR1)
#         time.sleep(0.05)
#         proc=''

# @app.route('/')
# def index():
#     return render_template('index.html', 
#                             last_updated=dir_last_updated('static'))


	
# @app.route('/magnet', methods=['POST'])
# def magnet():
#     procOff()
#     print("Magnet lights on!")
#     pixels.fill((255,0,0))
#     return "Magnet"
	
# @app.route('/n2', methods=['POST'])
# def n2():
#     procOff()
#     print("n2tank lights on!")
#     #pixels.fill((0,200,200))
#     return "n2tank"
	
# @app.route('/he', methods=['POST'])
# def he():
#     procOff()
#     print("hetank lights on!")
#     pixels.fill((200,100,200))
#     return "hetank"
	
# @app.route('/electronics', methods=['POST'])
# def electronics():
#     procOff()
#     print("electronics lights on!")
#     pixels.fill((0,200,0))
#     return "electronics"
    
# @app.route('/party', methods=['POST'])
# def party():
#     procOff()
#     print("Party lights on!")
#     #simpleRainbow()
#     rainbowCycle(pixels)
#     return "party"
    
# def wheel(pos):
#     """Generate rainbow colors across 0-255 positions."""
    
#     if pos < 85:
#         return Color(pos * 3, 255 - pos * 3, 0)
#     elif pos < 170:
#         pos -= 85
#         return Color(255 - pos * 3, 0, pos * 3)
#     else:
#         pos -= 170
#         return Color(0, pos * 3, 255 - pos * 3)
        
# def simpleRainbow() :
#     for i in range(255):
#         pixels.fill((i,0,0))
#         time.sleep(0.01)
#     pixels.fill((0,0,0))
        
# def rainbowCycle(strip, wait_ms=0.1, iterations=1):
#     """Draw rainbow that uniformly distributes itself across all pixels."""
#     for j in range(255 * iterations):
#         for i in range(2):
#             pixel_index = (i * 256 // num_pixels) + j
#             strip[i] = wheel(pixel_index & 255)
#         strip.show()
#         #if received:
#          #   break
#         #time.sleep(wait_ms / 1000.0)

if __name__ == "__main__":
    app.run(port=8080, debug=True)
