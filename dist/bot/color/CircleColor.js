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
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: name, mask: "url(#" + this.props.maskID + ")", fill: color }, this.props.children));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
exports.makeColor = makeColor;
exports.Black = makeColor('Black', '#000000');
exports.White = makeColor('White', '#FFFFFF');
exports.Red500 = makeColor('Red', '#F44336');
exports.Pink500 = makeColor('Pink', '#E91E63');
exports.Purple500 = makeColor('Purple', '#9C27B0');
exports.DeepPurple500 = makeColor('DeepPurple', '#673AB7');
exports.Indigo500 = makeColor('Indigo', '#3F51B5');
exports.Blue500 = makeColor('Blue', '#2196F3');
exports.LightBlue500 = makeColor('LightBlue', '#03A9F4');
exports.Cyan500 = makeColor('Cyan', '#00BCD4');
exports.Teal500 = makeColor('Teal', '#009688');
exports.Green500 = makeColor('Green', '#4CAF50');
exports.LightGreen500 = makeColor('LightGreen', '#8BC34A');
exports.Lime500 = makeColor('Lime', '#CDDC39');
exports.Yellow500 = makeColor('Yellow', '#FFEB3B');
exports.Amber500 = makeColor('Amber', '#FFC107');
exports.Orange500 = makeColor('Orange', '#FF9800');
exports.DeepOrange500 = makeColor('DeepOrange', '#FF5722');
exports.Brown500 = makeColor('Brown', '#795548');
exports.Gray500 = makeColor('Gray', '#9E9E9E');
exports.Gray800 = makeColor('GrayDark', '#424242');
exports.BlueGrey500 = makeColor('BlueGrey', '#607D8B');
var CircleColor = /** @class */ (function (_super) {
    __extends(CircleColor, _super);
    function CircleColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleColor.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.ColorOption, defaultOption: exports.Gray800 },
            React.createElement(exports.Black, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.White, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Red500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Pink500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Purple500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.DeepPurple500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Indigo500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Blue500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.LightBlue500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Cyan500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Teal500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Green500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.LightGreen500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Lime500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Yellow500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Amber500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Orange500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.DeepOrange500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Brown500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Gray500, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.Gray800, { maskID: this.props.maskID }, this.props.children),
            React.createElement(exports.BlueGrey500, { maskID: this.props.maskID }, this.props.children)));
    };
    return CircleColor;
}(React.Component));
exports.default = CircleColor;
