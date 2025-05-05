import { app, BrowserWindow } from "electron";
import path from "node:path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
});

app.on("window-all-closed", () => {
  app.quit();
});
