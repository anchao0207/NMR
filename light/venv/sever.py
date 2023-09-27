from cmath import sin
from math import fabs
from turtle import delay
from flask import Flask, request
from flask import url_for, jsonify, render_template
from flask_cors import CORS
from rpi_ws281x import Color
import board
import neopixel
import os
import signal
import subprocess
import sys
import math
import threading
import time


num_pixels = 294

# running = False
# running_lock = threading.Lock()


app = Flask(__name__)
CORS(app)

pixels = neopixel.NeoPixel(board.D18, num_pixels, brightness=0.8, auto_write=False)
time = 100

# @app.route("/")
# def hello_world():
#     return "<p>Hello, World!</p>"

task_running = False
stop_flag = threading.Event()

# def background_task():
#     global task_running
#     task_running = True
#     while not stop_flag.is_set():
#         for i in range(7):
#             print("Task is running..."+str(i))
#             time.sleep(1)
#         break
#     task_running = False

# @app.route('/')
# def home():
#     global task_running
#     return f'Task is {"Running" if task_running else "Not Running"}'

# @app.route('/start')
# def start_task():
#     global task_running
#     global stop_flag
#     if not task_running:
#         # Start the background task
#         stop_flag.clear()
#         background_thread = threading.Thread(target=background_task)
#         background_thread.start()
#         return 'Task started'
#     else:
#         return 'Task is already running'

# @app.route('/stop')
# def stop_task():
#     global task_running
#     global stop_flag
#     if task_running:
#         # Stop the background task
#         stop_flag.set()
#         return 'Task stopped'
#     else:
#         return 'Task is not running'


@app.route("/off", methods=["POST"])
def off():
    global task_running
    global stop_flag
    if task_running:
        # Stop the background task
        stop_flag.set()
        task_running = False
        pixels.fill((0, 0, 0))
        pixels.show()
        return "Light stopped"
    else:
        return "Light is not running"


def MagnetLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(178, 190):
                pixels[i] = (
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 127 + 128),
                    0,
                )
            pixels.show()
        else:
            return "stop"
    off()
    task_running = False


@app.route("/magnet", methods=["POST"])
def magnet():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=MagnetLights)
        background_thread.start()
        return jsonify("Magnet Light started")
    else:
        return jsonify("Magnet Light is already running")


def HeliLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(117, 157):
                pixels[i] = (0, int((math.sin(i + Position)) * 127 + 128), 0)
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/temperature-heli", methods=["POST"])
def temperatureHeli():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=HeliLights)
        background_thread.start()
        return jsonify("Heli Light started")
    else:
        return jsonify("Heli Light is already running")


def NitroLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(60, 117):
                pixels[i] = (0, 0, int((math.sin(i + Position)) * 127 + 128))
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/temperature-nitro", methods=["POST"])
def temperatureNitro():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=NitroLights)
        background_thread.start()
        return jsonify("Nitro Light started")
    else:
        return jsonify("Nitro Light is already running")


def MylarLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(30):
                pixels[i] = (int((math.sin(i + Position)) * 127 + 128), 0, 0)
            for i in range(30, 60):
                pixels[i] = (int((math.sin(i + Position)) * 127 + 128), 0, 0)
            pixels.show()
        else:
            return "stoped"
    off()
    task_running = False


@app.route("/temperature-mylar", methods=["POST"])
def temperatureMylar():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=MylarLights)
        background_thread.start()
        return jsonify("Mylar Light started")
    else:
        return jsonify("Mylar Light is already running")


def SampleLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 19
    for j in range(time):
        if not stop_flag.is_set():
            Position -= 1
            for i in range(190, 228):
                pixels[i] = (
                    0,
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 127 + 128),
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/sample", methods=["POST"])
def sample():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=SampleLights)
        background_thread.start()
        return jsonify("Sample Light started")
    else:
        return jsonify("Sample Light is already running")


def FieldLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(158, 178):
                pixels[i] = (
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 64 + 64),
                    0,
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/field", methods=["POST"])
def field():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=FieldLights)
        background_thread.start()
        return jsonify("Field Light started")
    else:
        return jsonify("Field Light is already running")


def PulseHLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(228, 294):
                pixels[i] = (
                    int((math.sin(i + Position)) * 63 + 64),
                    0,
                    int((math.sin(i + Position)) * 127 + 128),
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/pulseH", methods=["POST"])
def pulseH():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=PulseHLights)
        background_thread.start()
        return jsonify("Pulse H Light started")
    else:
        return jsonify("Pulse H Light is already running")


def PulseCLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(228, 294):
                pixels[i] = (
                    0,
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 64 + 64),
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/pulseC", methods=["POST"])
def pulseC():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=PulseCLights)
        background_thread.start()
        return jsonify("Pulse C Light started")
    else:
        return jsonify("Pulse C Light is already running")


def PulseFLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(228, 294):
                pixels[i] = (
                    int((math.sin(i + Position)) * 102 + 102),
                    0,
                    int((math.sin(i + Position)) * 102 + 102),
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/pulseF", methods=["POST"])
def pulseF():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=PulseFLights)
        background_thread.start()
        return jsonify("Pulse F Light started")
    else:
        return jsonify("Pulse F Light is already running")


def PulsePLights():
    global task_running
    task_running = True
    # while not stop_flag.is_set():
    Position = 0
    for j in range(time):
        if not stop_flag.is_set():
            Position += 1
            for i in range(228, 294):
                pixels[i] = (
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 127 + 128),
                    int((math.sin(i + Position)) * 25 + 26),
                )
            pixels.show()
        else:
            return "stopped"
    off()
    task_running = False


@app.route("/pulseP", methods=["POST"])
def pulseP():
    global task_running
    global stop_flag
    if not task_running:
        # Start the background task
        stop_flag.clear()
        background_thread = threading.Thread(target=PulsePLights)
        background_thread.start()
        return jsonify("Pulse P Light started")
    else:
        return jsonify("Pulse P Light is already running")


if __name__ == "__main__":
    app.run(port=8080, debug=True)
