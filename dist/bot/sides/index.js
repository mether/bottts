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
var Antenna01_1 = require("./Antenna01");
var Antenna02_1 = require("./Antenna02");
var Cables01_1 = require("./Cables01");
var Cables02_1 = require("./Cables02");
var Round_1 = require("./Round");
var Square_1 = require("./Square");
var SquareAsymmetric_1 = require("./SquareAsymmetric");
var Sides = /** @class */ (function (_super) {
    __extends(Sides, _super);
    function Sides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sides.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Square_1.default, option: options_1.SidesOption },
            React.createElement(Square_1.default, null),
            React.createElement(Antenna01_1.default, null),
            React.createElement(Antenna02_1.default, null),
            React.createElement(Cables01_1.default, null),
            React.createElement(Cables02_1.default, null),
            React.createElement(Round_1.default, null),
            React.createElement(SquareAsymmetric_1.default, null)));
    };
    return Sides;
}(React.Component));
exports.default = Sides;
