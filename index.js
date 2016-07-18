const {app} = require('electron');
const {BrowserWindow} = require('electron');

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  let win = new BrowserWindow({width: 800, height: 600, autoHideMenuBar: true});
  win.on('closed', () => {
    win = null;
  });

  win.loadURL( 'file://' + __dirname + '/app/index.html');
});
