// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, Menu, MenuItem} = require('electron')
let fs = require("fs");
// const ipc = require('ipc')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const path = require('path')

path.resolve(__dirname, 'preload-script.js')

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload-script.js')
    }
  })

  mainWindow.loadFile('index.html')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', ()=> {
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('open-new-window', (event, data) => {
  
    // secondaryWindow = new BrowserWindow({
    //   width: data.width,
    //   height: data.height,
    //   webPreferences: {
    //     nodeIntegration: false
    //   }
    // })

    // secondaryWindow.loadURL(data.url)
    // secondaryWindow.on('closed', () => {
    //   secondaryWindow = null
    // })
    mainWindow.loadURL(data+"/login/index")
})

ipcMain.on('write-data', (event, data) => {
  fs.writeFile("./data.json", data, "utf-8", (error, res) => {
      if (error){
          console.error("error: " + error);
      }
      console.log(res)
  });
})