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
var FaceColor_1 = require("../color/FaceColor");
var texture_1 = require("../texture");
var RoboCop = /** @class */ (function (_super) {
    __extends(RoboCop, _super);
    function RoboCop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoboCop.prototype.render = function () {
        var pieceId = 'Face/RoboCop';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M126,79.5857961 L126,104 C126,112.836556 118.836556,120 110,120 L20,120 C11.163444,120 4,112.836556 4,104 L4,79.5857961 L0,79.5857961 L1.10489633e-15,41.0221632 C-6.41976585e-16,26.7578634 1.48520978,21.5852836 4.27412326,16.3704687 C7.06303674,11.1556539 11.1556539,7.06303674 16.3704687,4.27412326 C21.5852836,1.48520978 26.7578634,-7.71967361e-14 41.0221632,-7.98170454e-14 L88.9778368,-7.65023564e-14 C103.242137,-7.91226658e-14 108.414716,1.48520978 113.629531,4.27412326 C118.844346,7.06303674 122.936963,11.1556539 125.725877,16.3704687 C128.51479,21.5852836 130,26.7578634 130,41.0221632 L130,79.5857961 L126,79.5857961 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Dead-or-alive,', fill: '#0076DE', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-2.000000, 0.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '134', height: '120' }))),
            React.createElement("rect", { id: 'Murphy', fillOpacity: '0.8', fill: '#000000', mask: "url(#" + maskName + ")", x: '4', y: '80', width: '122', height: '40' }),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    RoboCop.optionValue = 'RoboCop';
    return RoboCop;
}(React.Component));
exports.default = RoboCop;
