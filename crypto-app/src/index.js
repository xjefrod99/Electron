const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifyBtn = document.getElementById('notifyBtn')
//in reference to button in index.html

notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({frame: false, width: 400, height: 200})
    win.on('close', function(){win = null})
    win.loadURL(modalPath)
    win.show
})
