const { BrowserWindow, app } = require('electron');
const { REACT_DEVELOPER_TOOLS, default: installExtension } = require('electron-devtools-installer');

let mainWindow;

function addExtensions() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added extension ${name}`))
    .catch(e => console.log(`An error occurred: ${e}`));
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 550,
  });

  mainWindow.loadURL(process.env.ELECTRON_START_URL);
  mainWindow.webContents.openDevTools();
  addExtensions();

  mainWindow.on('close', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
