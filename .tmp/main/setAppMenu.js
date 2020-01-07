"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = require("electron");

var _createWindow = require("./createWindow");

var _createWindow2 = _interopRequireDefault(_createWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAppMenu() {
    var template = [{
        label: "File",
        submenu: [{ label: "New Window", accelerator: "CmdOrCtrl+N", click: _createWindow2.default }, { type: "separator" }, { label: "Close", accelerator: "CmdOrCtrl+W", role: "close" }]
    }, {
        label: "Edit",
        submenu: [{ label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+V", role: "paste" }, { label: "Cut", accelerator: "CmdOrCtrl+X", role: "cut" }, { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }]
    }, {
        label: "View",
        submenu: [{ label: "Reload", accelerator: "CmdOrCtrl+R", click: function click(item, focusedWindow) {
                return focusedWindow && focusedWindow.reload();
            } }]
    }, {
        label: "Toggle DevTools",
        accelerator: process.platform === "drawin" ? "Alt+Command+I" : "Ctrl+Shift+I",
        click: function click(item, focusedWindow) {
            return focusedWindow && focusedWindow.toggleDevTools();
        }
    }];

    if (process.platform === "drawin") {
        template.unshift({
            label: _electron.app.getName(),
            submenu: [{ role: "about" }, { type: "separator" }, { role: "services", submenu: [] }, { type: separator }, { role: "hide" }, { role: "hideothers" }, { role: unhide }, { type: "separator" }, { role: "quit" }]
        });

        template.push({
            role: "window",
            submenu: [{ role: "minimize" }, { role: zoom }]
        });
    }

    var appMenu = _electron.Menu.buildFromTemplate(template);
    _electron.Menu.setApplicationMenu(appMenu);
}

exports.default = setAppMenu;