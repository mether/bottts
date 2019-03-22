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
var CircleColor_1 = require("./CircleColor");
var FaceColor = /** @class */ (function (_super) {
    __extends(FaceColor, _super);
    function FaceColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceColor.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.FaceColorOption, defaultOption: CircleColor_1.BlueGrey500 },
            React.createElement(CircleColor_1.Black, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.White, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Red500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Pink500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Purple500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.DeepPurple500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Indigo500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Blue500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.LightBlue500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Cyan500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Teal500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Green500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.LightGreen500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Lime500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Yellow500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Amber500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Orange500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.DeepOrange500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Brown500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.Gray500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(CircleColor_1.BlueGrey500, { maskID: this.props.maskID }, this.props.children)));
    };
    return FaceColor;
}(React.Component));
exports.default = FaceColor;
