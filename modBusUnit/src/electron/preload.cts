const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  testFunction: () => console.log("test"),
});
