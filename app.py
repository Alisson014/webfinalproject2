from flask import Flask, request, render_template, redirect, url_for, session
from flask_session import Session
import sqlite3

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


def CheckUser(email):
    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM usuarios")
    allusers = cursor.fetchall()
    isUsed = False
    for i in allusers:
        # print(i)
        if i[2] == email:
            isUsed = True

    con.close()
    # print("Check user on")
    return isUsed

def getComents():
    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM comentarios;")
    comentarios = cursor.fetchall()
    con.close()
    comentarios.reverse()
    
    return comentarios

# print(CheckUser("jose@gmail.com"))

@app.route('/')
@app.route('/index')
def index():
    if not(session.get("nome")):
        session["nome"] = None
        session["email"] = None
        session["senha"] = None

    return render_template("index.html")

@app.route('/login', methods=["POST"])
def login():
    return render_template("login.html")


@app.route('/login/entrar', methods=["POST"])
def Entrar():
    session["nome"] = request.form.get('User_nome')
    session["email"] = request.form.get('User_email')
    session["senha"] = request.form.get('User_senha')

    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("SELECT * FROM usuarios;")
    allusers = cursor.fetchall()
    for i in allusers:
        exist = False
        # print(i[1:], [nome, email, senha])
        if i[1:] == (session.get("nome"), session.get("email"), session.get("senha")):
            exist = True
            break
    
    con.close()
    # comentarios = "hlylltt"
    if exist:
        # comentarios = getComents()
        return redirect(url_for('Home'))

    else: 
        return render_template("login.html", isUsed = True, message = "Dados incorretos")


@app.route('/login/cadastrar', methods=["POST"])
def cadastrar():
    session["nome"] = request.form.get('nome')
    session["email"] = request.form.get('email')
    session["senha"] = request.form.get('senha')
    # nome,email,senha = "123"
    # print(nome, email, senha)

    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    # comentarios = getComents()
    
    isUsed = CheckUser(session["email"])
    
    if not(isUsed):
        cursor.execute('INSERT INTO usuarios(nome, email, senha) VALUES(?, ?, ?)', (session.get("nome"), session.get("email"), session.get("senha")))
        con.commit()
        con.close()

        return redirect(url_for('Home'))

    else: 
        con.close()
        return render_template("login.html", isUsed = isUsed, message = "Está conta já está cadastrada")

@app.route('/comentar', methods=["POST"])
def comentar():
    nome = request.form.get("Coment_nome")
    palavra = request.form.get("Coment_palavra")
    comentario = request.form.get("comentario")

    nomeU = request.form.get('User_nome')
    emailU = request.form.get('User_email')
    senhaU = request.form.get('User_senha')

    con = sqlite3.connect('banco.db')
    cursor = con.cursor()
    cursor.execute("INSERT INTO comentarios(assunto, nome, comentario) VALUES(?,?,?)", (palavra, nome, comentario))
    con.commit()
    con.close()    

    return redirect(url_for('Home'))


@app.route('/editar', methods=["POST"])
def editar():
    con = sqlite3.connect('banco.db')
    cursor = con.cursor()

    nome = request.form.get('User_nome')
    email = request.form.get('User_email')
    senha = request.form.get('User_senha')

    cursor.execute("UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE email = ? AND senha = ?", (nome, email, senha, session.get("email"), session.get("senha")))
    con.commit()
    con.close()

    session["nome"] = nome
    session["email"] = email
    session["senha"] = senha

    return redirect(url_for('Home'))


@app.route('/logout', methods=["POST"])
def Logout():
    session["nome"] = None
    session["email"] = None
    session["senha"] = None

    return redirect(url_for("index"))



@app.route('/Home', methods=["GET"])
def Home():
    comentarios = getComents()
    
    return render_template("home.html", comentarios = comentarios)
    