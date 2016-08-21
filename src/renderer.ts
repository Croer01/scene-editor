// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const {ipcRenderer} = electron;
window.addEventListener('keydown',(event:KeyboardEvent)=>{
    if(event.keyCode === 123){
        ipcRenderer.send("toggle-devtools",true);
    }
});