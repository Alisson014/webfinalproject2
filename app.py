from flask import Flask, request, render_template, redirect, url_for
import sqlite3

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/login', methods=["POST"])
def login():
    return render_template("login.html")


@app.route('/login/entrar', methods=["POST"])
def Entrar():
    nome = request.form.get('User_nome')
    email = request.form.get('User_email')
    senha = request.form.get('User_senha')

    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM usuarios;")
    allusers = cursor.fetchall()
    for i in allusers:
        exist = False
        print(i[1:], [nome, email, senha])
        if i[1:] == (nome, email, senha):
            exist = True

    if exist:
        return render_template("home.html", nome = nome, email = email, senha = senha)
    else: 
        return render_template("login.html", isUsed = True, message = "Dados incorretos")


@app.route('/login/cadastrar', methods=["POST"])
def cadastrar():
    nome = request.form.get('nome')
    email = request.form.get('email')
    senha = request.form.get('senha')

    # print(nome, email, senha)

    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM usuarios")
    allusers = cursor.fetchall()
    isUsed = False
    for i in allusers:
        if i[2] == email:
            isUsed = True
    
    if not(isUsed):
        cursor.execute('INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?)', (nome, email, senha))
        con.commit()
        con.close()
        return render_template("home.html", nome = nome, email = email, senha = senha)

    else: 
        return render_template("login.html", isUsed = isUsed, message = "Está conta já está cadastrada")



@app.route('/Home', methods=["GET"])
def Home():
    # con = sqlite3.connect('banco.db')
    # cursor = con.cursor()
    # cursor.execute("SELECT * FROM usuarios;")
    # allusers = cursor.fetchall()

    # for i in allusers:
    #     user = []
    #     if i == listUser:
    #         user = listUser.copy()

    # for i in allusers:
    #     print(i[1:])

        # if len(user) == len(listUser):
        #     return render_template("home.html", user = user)
        # else: 
        #     return "<h1>Erro, usuário inesistente</h1>"

    return render_template("home.html")
        


    cursor.close()