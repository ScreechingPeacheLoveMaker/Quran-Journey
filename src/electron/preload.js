// import { contextBridge } from 'electron';
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('fileCRUD', {
    writeFile: (filename,content) => ipcRenderer.invoke("file:write",filename,content),
    readFile: (filename) => ipcRenderer.invoke("file:read", filename),
    deleteFile: (filename) => ipcRenderer.invoke("file:delete",filename),
}); 