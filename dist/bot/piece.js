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
var eyes_1 = require("./eyes");
var face_1 = require("./face");
var BotStyle;
(function (BotStyle) {
    BotStyle["Circle"] = "Circle";
    BotStyle["Transparent"] = "Transparent";
})(BotStyle = exports.BotStyle || (exports.BotStyle = {}));
var PieceComponent = /** @class */ (function (_super) {
    __extends(PieceComponent, _super);
    function PieceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieceComponent.prototype.render = function () {
        return (React.createElement("svg", { style: this.props.style, width: this.props.pieceSize + "px", height: this.props.pieceSize + "px", viewBox: "0 0 180 180", version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink' },
            this.props.pieceType === 'face' && React.createElement(face_1.default, null),
            this.props.pieceType === 'eyes' && React.createElement(eyes_1.default, null)));
    };
    return PieceComponent;
}(React.Component));
exports.default = PieceComponent;
