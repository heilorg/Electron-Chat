"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _Login = require("./Login");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require("./Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _Rooms = require("./Rooms");

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Room = require("./Room");

var _Room2 = _interopRequireDefault(_Room);

var _firebaseBrowser = require("firebase/firebase-browser");

var _firebaseBrowser2 = _interopRequireDefault(_firebaseBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRouting = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _Signup2.default }),
    _react2.default.createElement(
        _reactRouter.Route,
        { path: "rooms", component: _Rooms2.default },
        _react2.default.createElement(_reactRouter.Route, { path: ":roomid", component: _Room2.default })
    )
);

if (!location.hash.length) {
    location.hash = "/login";
}

var config = {
    apiKey: "AIzaSyDaXq9ANmXUVh1xBDAvl9L_wQKWiBwcHrg",
    authDomain: "electron-chat-b8191.firebaseapp.com",
    databaseURL: "https://electron-chat-b8191.firebaseio.com",
    projectId: "electron-chat-b8191",
    storageBucket: "electron-chat-b8191.appspot.com",
    messagingSenderId: "622556304922",
    appId: "1:622556304922:web:7d2c229d29ea5a46d463a3",
    measurementId: "G-HW6EPMN8M5"
};
_firebaseBrowser2.default.initializeApp(config);

(0, _reactDom.render)(appRouting, document.getElementById("app"));