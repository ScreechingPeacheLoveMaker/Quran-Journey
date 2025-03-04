import {app,BrowserWindow, ipcMain} from "electron"; 
import path from "path";
import isDev from "electron-is-dev";
import { writeFile,readFile,deleteFile } from './filehandler.js';


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // titleBarStyle:"hidden",
    // visualEffectState: "active",
    // autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(app.getAppPath(),"src/electron/preload.js"),
      autofill: true,
      contextIsolation: true,
      sandbox: true,
    }
    })

  if(isDev){
    win.loadURL("http://localhost:5555/")
  } 
  else
  {  
    win.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'))
    .catch((err) => console.error("Failed to load file",err));
  }
}

app.whenReady().then(() => {
  createWindow()



// IPC Event Handlers using the imported fileHandler
ipcMain.handle("file:write", async (evt,filename,content)=>{
  return writeFile(filename,content);
});

ipcMain.handle("file:read", async(evt,filename)=>{
  return readFile(filename);
});

ipcMain.handle("fil:delete",async (evt,filename)=>{
  return deleteFile(filename);
})


  // for MAC user to open new window when app is running
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
.catch(error => console.error(error));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})