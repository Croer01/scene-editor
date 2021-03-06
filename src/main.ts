const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

import {menuTemplate} from './menu'
const {Menu} = electron;

const {ipcMain} = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    mainWindow.webContents.on('devtools-opened', mainWindow.focus);
    ipcMain.on("toggle-devtools", (event, arg) => {
        mainWindow.webContents.toggleDevTools();
    });

    // Refresh Electron
    ipcMain.on("refresh-ignore-cache", (event, arg) => {
        mainWindow.webContents.reloadIgnoringCache();
    });


    mainWindow.on('closed', function () {
        mainWindow = null
    });
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

app.on('ready', createWindow);


app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});
