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
var Camo01_1 = require("./Camo01");
var Camo02_1 = require("./Camo02");
var Circuits_1 = require("./Circuits");
var Dirty01_1 = require("./Dirty01");
var Dirty02_1 = require("./Dirty02");
var Dots_1 = require("./Dots");
var Grunge01_1 = require("./Grunge01");
var Grunge02_1 = require("./Grunge02");
var None_1 = require("./None");
var Texture = /** @class */ (function (_super) {
    __extends(Texture, _super);
    function Texture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Texture.prototype.render = function () {
        return (React.createElement(options_1.Selector, { defaultOption: Circuits_1.default, option: options_1.TextureOption },
            React.createElement(None_1.default, { maskID: this.props.maskID }),
            React.createElement(Camo01_1.default, { maskID: this.props.maskID }),
            React.createElement(Camo02_1.default, { maskID: this.props.maskID }),
            React.createElement(Circuits_1.default, { maskID: this.props.maskID }),
            React.createElement(Dirty01_1.default, { maskID: this.props.maskID }),
            React.createElement(Dirty02_1.default, { maskID: this.props.maskID }),
            React.createElement(Dots_1.default, { maskID: this.props.maskID }),
            React.createElement(Grunge01_1.default, { maskID: this.props.maskID }),
            React.createElement(Grunge02_1.default, { maskID: this.props.maskID })));
    };
    return Texture;
}(React.Component));
exports.default = Texture;
