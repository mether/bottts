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
var Bite_1 = require("./Bite");
var Diagram_1 = require("./Diagram");
var Grill01_1 = require("./Grill01");
var Grill02_1 = require("./Grill02");
var Grill03_1 = require("./Grill03");
var RoboCop_1 = require("./RoboCop");
var Smile01_1 = require("./Smile01");
var Smile02_1 = require("./Smile02");
var Square01_1 = require("./Square01");
var Square02_1 = require("./Square02");
var Mouth = /** @class */ (function (_super) {
    __extends(Mouth, _super);
    function Mouth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouth.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Grill03_1.default, option: options_1.MouthOption },
            React.createElement(Arturito_1.default, null),
            React.createElement(Bite_1.default, null),
            React.createElement(Diagram_1.default, null),
            React.createElement(Grill01_1.default, null),
            React.createElement(Grill02_1.default, null),
            React.createElement(Grill03_1.default, null),
            React.createElement(RoboCop_1.default, null),
            React.createElement(Smile01_1.default, null),
            React.createElement(Smile02_1.default, null),
            React.createElement(Square01_1.default, null),
            React.createElement(Square02_1.default, null)));
    };
    return Mouth;
}(React.Component));
exports.default = Mouth;
