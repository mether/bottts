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
var Bulging_1 = require("./Bulging");
var Dizzy_1 = require("./Dizzy");
var Eva_1 = require("./Eva");
var Frame01_1 = require("./Frame01");
var Frame02_1 = require("./Frame02");
var Glow_1 = require("./Glow");
var Hal_1 = require("./Hal");
var Happy_1 = require("./Happy");
var Hearts_1 = require("./Hearts");
var RoboCop_1 = require("./RoboCop");
var Round_1 = require("./Round");
var RoundFrame01_1 = require("./RoundFrame01");
var RoundFrame02_1 = require("./RoundFrame02");
var Sensor_1 = require("./Sensor");
var Shades_1 = require("./Shades");
var Eyes = /** @class */ (function (_super) {
    __extends(Eyes, _super);
    function Eyes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eyes.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Shades_1.default, option: options_1.EyesOption },
            React.createElement(Arturito_1.default, null),
            React.createElement(Bulging_1.default, null),
            React.createElement(Dizzy_1.default, null),
            React.createElement(Eva_1.default, null),
            React.createElement(Frame01_1.default, null),
            React.createElement(Frame02_1.default, null),
            React.createElement(Glow_1.default, null),
            React.createElement(Hal_1.default, null),
            React.createElement(Happy_1.default, null),
            React.createElement(Hearts_1.default, null),
            React.createElement(RoboCop_1.default, null),
            React.createElement(Round_1.default, null),
            React.createElement(RoundFrame01_1.default, null),
            React.createElement(RoundFrame02_1.default, null),
            React.createElement(Sensor_1.default, null),
            React.createElement(Shades_1.default, null)));
    };
    return Eyes;
}(React.Component));
exports.default = Eyes;
