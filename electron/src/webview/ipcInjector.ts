/*
When used in the "preload" attribute of an Electron <webview> tag, injects the ipcRenderer object in the window
scope for use by the guest page. This lets the guest page inside the <webview> communicate with the Electron main
process without exposing require() to the guest page, which would allow the guest page to require native NodeJS APIs
(such as the file system module).

Example use:

In index.html (html page running inside the BrowserWindow):

    <webview src="http://..." preload="./ipcRendererInjector.js"></webview>

In app.tsx of PXT:

    window.ipcRenderer.send("ping");

In main.ts of the Electron app:

    const ipcMain = require("electron").ipcMain;
    ipcMain.on("ping", (event, arg) => {
        console.log("Website sent a message");
    });
    const win = new BrowserWindow({ preload: "util/ipcInjector.js" });
*/
(window as any).ipcRenderer = require("electron").ipcRenderer;