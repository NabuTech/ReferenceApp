const { app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Use Node.js APIs in HTML
        },
    });


mainWindow.loadFile('index.html');
});