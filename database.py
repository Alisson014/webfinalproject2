import sqlite3

con = sqlite3.connect('banco.db')
cursor = con.cursor()
cursor.execute('''
    CREATE TABLE usuarios (
        id integer AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(120),
        email VARCHAR(130),
        senha VARCHAR(20)           
    );
''')

con.commit()
con.close()