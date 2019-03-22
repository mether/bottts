"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var options_1 = require("../../options");
var Arturito_1 = require("./Arturito");
var RoboCop_1 = require("./RoboCop");
var Round01_1 = require("./Round01");
var Round02_1 = require("./Round02");
var Square01_1 = require("./Square01");
var Square02_1 = require("./Square02");
var Square03_1 = require("./Square03");
var Square04_1 = require("./Square04");
var Face = /** @class */ (function (_super) {
    __extends(Face, _super);
    function Face() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Face.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Square01_1.default, option: options_1.FaceOption },
            React.createElement(Arturito_1.default, null),
            React.createElement(RoboCop_1.default, null),
            React.createElement(Round01_1.default, null),
            React.createElement(Round02_1.default, null),
            React.createElement(Square01_1.default, null),
            React.createElement(Square02_1.default, null),
            React.createElement(Square03_1.default, null),
            React.createElement(Square04_1.default, null)));
    };
    return Face;
}(React.Component));
exports.default = Face;
