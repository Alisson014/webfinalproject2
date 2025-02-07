from flask import Flask, request, render_template, redirect, url_for
import sqlite3

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/cadastrar', methods=["POST"])
def cadastrar():
    nome = request.form["nome"]