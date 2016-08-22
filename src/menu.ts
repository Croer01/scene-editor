/**
 * Created by Adria on 20/08/2016.
 */

import electron = require('electron');
import yaml = require('js-yaml');
import fs = require('fs')

const {dialog} = electron;

export var menuTemplate = [
    {
        label: 'File',
        submenu: [{
            label: 'Load',
            accelerator: 'CmdOrCtrl+L',
            click: (menuItem, browserWindow, event) => {
                let options : Electron.OpenDialogOptions = {
                    properties: ['openFile'],
                    filters: [
                        {name: 'Scene file', extensions: ['scene']}
                    ]
                };
                dialog.showOpenDialog(browserWindow, options, (dialogResults)=> {
                    if (dialogResults !== undefined && dialogResults.length === 1) {
                        let filename:string = dialogResults[0];

                        try {
                            let doc = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
                            browserWindow.send('scene-load-success', doc);
                        } catch (e) {
                            browserWindow.send('scene-load-fail', e);
                            console.log(e);
                        }
                    }
                });
            }
        }, {
            label: 'Save',
            accelerator: 'CmdOrCtrl+S',
            enabled:false
        }]
    }
];