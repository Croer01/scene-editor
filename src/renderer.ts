// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const {ipcRenderer} = electron;
window.addEventListener('keydown',(event:KeyboardEvent)=>{
    if(event.keyCode === 123){
        ipcRenderer.send("toggle-devtools",true);
    }

    if(event.keyCode === 116){
        ipcRenderer.send("refresh-ignore-cache",true);
    }
});

//angular application
global["jQuery"] = require('./../node_modules/jquery/dist/jquery');
require('./../node_modules/bootstrap/dist/js/npm');
require('./app/app');