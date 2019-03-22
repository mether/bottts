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
var Antenna_1 = require("./Antenna");
var AntennaCrooked_1 = require("./AntennaCrooked");
var Bulb01_1 = require("./Bulb01");
var Bulb02_1 = require("./Bulb02");
var Horns_1 = require("./Horns");
var Lights_1 = require("./Lights");
var Plankton_1 = require("./Plankton");
var Pyramid_1 = require("./Pyramid");
var Radar_1 = require("./Radar");
var Top = /** @class */ (function (_super) {
    __extends(Top, _super);
    function Top() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Top.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Plankton_1.default, option: options_1.TopOption },
            React.createElement(Antenna_1.default, null),
            React.createElement(AntennaCrooked_1.default, null),
            React.createElement(Bulb01_1.default, null),
            React.createElement(Bulb02_1.default, null),
            React.createElement(Horns_1.default, null),
            React.createElement(Lights_1.default, null),
            React.createElement(Plankton_1.default, null),
            React.createElement(Pyramid_1.default, null),
            React.createElement(Radar_1.default, null)));
    };
    return Top;
}(React.Component));
exports.default = Top;
