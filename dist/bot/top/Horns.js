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
var TopColor_1 = require("../color/TopColor");
var Horns = /** @class */ (function (_super) {
    __extends(Horns, _super);
    function Horns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horns.prototype.render = function () {
        var pieceId = 'Top/Horns';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M71.2103664,40 C78.849875,33.2931152 84.6313286,20.6881892 84,14 C83.8634599,12.5535174 85.9998112,12.299289 87,14 C90.3310591,19.6640994 91.0533229,28.3307631 89.1667915,39.9999912 L92,40 L92,52 L66,52 L66,40 L71.2103664,40 Z M11.2146853,40 C9.04339114,28.3168723 9.78304742,19.6838312 13.4336542,14.1008765 C14.3353248,12.7219314 16.5210219,12.6807087 16.5210219,13.7408438 C16.5210219,21.2733229 21.4918044,33.4449643 29.2618055,40 L34,40 L34,52 L8,52 L8,40 L11.2146853,40 Z', id: pathName })),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Horns', fill: '#E1E6E8', xlinkHref: "#" + pathName }),
            React.createElement(TopColor_1.default, { maskID: maskName },
                React.createElement("rect", { x: '0', y: '0', width: '100', height: '52' })),
            React.createElement("rect", { id: 'Shadow', fillOpacity: '0.4', fill: '#000000', mask: "url(#" + maskName + ")", x: '0', y: '40', width: '100', height: '12' }),
            React.createElement("path", { d: 'M15.4558151,13 L31.5688672,13 L31.5688672,40 L20.8200683,40 C15.8541795,34.7666145 14.0660951,25.7666145 15.4558151,13 Z', id: 'Light', fillOpacity: '0.4', fill: '#FFFFFF', mask: "url(#" + maskName + ")" }),
            React.createElement("path", { d: 'M84.8200683,13 L92.5688672,13 L92.5688672,40 L81.8200683,40 C85.6540878,34.7964297 86.6540878,25.7964297 84.8200683,13 Z', id: 'Light', fillOpacity: '0.4', fill: '#FFFFFF', mask: "url(#" + maskName + ")" })));
    };
    Horns.optionValue = 'Horns';
    return Horns;
}(React.Component));
exports.default = Horns;
