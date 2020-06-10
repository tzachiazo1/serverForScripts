'use strict';

exports.__esModule = true;
exports.getAppManifest = exports.onEvent = exports.editorReady = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var controllerAlreadyExists = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(controllerType) {
    var controllers, _iterator, _isArray, _i, _ref6, controller, data;

    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _editorSDK.controllers.listAllControllers(_token);

          case 2:
            controllers = _context3.sent;
            _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

          case 4:
            if (!_isArray) {
              _context3.next = 10;
              break;
            }

            if (!(_i >= _iterator.length)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt('break', 22);

          case 7:
            _ref6 = _iterator[_i++];
            _context3.next = 14;
            break;

          case 10:
            _i = _iterator.next();

            if (!_i.done) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt('break', 22);

          case 13:
            _ref6 = _i.value;

          case 14:
            controller = _ref6;
            _context3.next = 17;
            return _editorSDK.controllers.getData(_token, controller);

          case 17:
            data = _context3.sent;

            if (!(data.controllerType === controllerType)) {
              _context3.next = 20;
              break;
            }

            return _context3.abrupt('return', true);

          case 20:
            _context3.next = 4;
            break;

          case 22:
            return _context3.abrupt('return', false);

          case 23:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function controllerAlreadyExists(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _editorSDK = void 0;
var _token = void 0;

var APP_DEF_ID = 'bca3778a-e4a5-4ac7-9e67-e15b78601984'; //TODO: change to the appDefId of of your app from dev center
var WIDGET_DEV_CENTER_ID = 'd2b10c12-804d-468f-b6d6-393f4e5a7337'; //TODO: change to the widget id (guid) of of your widget from dev center
var WIDGET_APP_BUILDER_ID = 'n0n0e'; //TODO: change to the id of the page of your widget from app builder
var CONTROLLER_TYPE = APP_DEF_ID + '-' + WIDGET_APP_BUILDER_ID;

var editorReady = exports.editorReady = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(editorSDK, token, _ref) {
    var firstInstall = _ref.firstInstall;
    var pageRef, componentDefinition;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _editorSDK = editorSDK;
            _token = token;

            //|| !await controllerAlreadyExists(CONTROLLER_TYPE)

            if (!firstInstall) {
              _context.next = 12;
              break;
            }

            console.log('Creating missing widget by ref!');

            _context.next = 6;
            return editorSDK.pages.getCurrent(token);

          case 6:
            pageRef = _context.sent;
            componentDefinition = {
              componentType: 'wysiwyg.viewer.components.RefComponent',
              data: {
                type: 'WidgetRef',
                appDefinitionId: APP_DEF_ID,
                widgetId: WIDGET_DEV_CENTER_ID
              }
            };

            console.log('Creating missing widget by ref@');

            _context.next = 11;
            return editorSDK.document.components.add("token", { componentDefinition: componentDefinition, pageRef: pageRef });

          case 11:
            console.log('Creating missing widget by ref#');

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function editorReady(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var onEvent = exports.onEvent = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
    var eventType = _ref3.eventType,
      eventPayload = _ref3.eventPayload;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function onEvent(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getAppManifest = exports.getAppManifest = function getAppManifest() {
  var _controllersStageData;

  return {
    controllersStageData: (_controllersStageData = {}, _controllersStageData[CONTROLLER_TYPE] = {
      "default": {
        "behavior": {
          closable: 'true'
        },
        "gfpp": {
          "desktop": {
            "mainAction1": {
              "label": "App Set!",
              "actionId": "openSettingClicked"
            }
          }
        },
        "connections": {
          "title": { //componentRole
            "gfpp": {
              "desktop": {
                "mainAction2": {
                  "label": "Send Text To Console",
                  "actionId": "sendTextToConsole"
                }
              }
            }
          }
        }
      }
    }, _controllersStageData)
  };
};
//# sourceMappingURL=editor.js.map