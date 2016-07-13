const {app} = require('electron');
const {BrowserWindow} = require('electron');
require('electron-debug')({showDevTools: true});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600});
  win.on('closed', () => {
    win = null;
  });

  win.loadURL( 'file://' + __dirname + '/app/index.html');
});
