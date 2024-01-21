from flask import Flask, render_template_string, render_template
from datetime import datetime

app = Flask(__name__,template_folder='templates')


@app.route('/')
def home():
    current_time = datetime.now().strftime('%H:%M:%S')
    return render_template_string('<h1>{{ current_time }}</h1>', current_time=current_time)

@app.route('/names')
def names():
    names = ['Alice', 'Bob', 'Charlie', 'David']
    return render_template('names.html', names=names)    

if __name__ == '__main__':
    app.run(debug=True)
