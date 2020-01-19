/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-13 11:11:07
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-15 11:45:58
 */
// 在主进程中.
import { BrowserWindow, app } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';

let Window: any = null;
function CreateWin() {
  let win: any = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) {
      win.webContents.openDevTools();
    }
  } else {
    createProtocol('app');
    // 或加载本地HTML文件
    win.loadURL('app://./index.html');
  }
  win.on('closed', () => {
    win = null;
  });
  Window = win;
}
app.on('ready', () => {
  CreateWin();
});
