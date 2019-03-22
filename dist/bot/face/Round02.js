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
var Round02 = /** @class */ (function (_super) {
    __extends(Round02, _super);
    function Round02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Round02.prototype.render = function () {
        var pieceId = 'Face/Round-02';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M0,89 C0,88.9795073 0.0141049326,89.1836401 0,90 C0.183374957,90.4764708 0.402008635,91.4971444 1,93 C1.82671155,96.0560243 3.7804036,99.5565275 7,103 C16.6943975,113.399831 35.1723647,120 65,120 C94.8276353,120 113.305603,113.399637 123,103 C126.219596,99.5565275 128.173198,96.0560243 129,93 C129.597973,91.4971251 129.816625,90.4764321 130,90 C129.985895,89.1836498 130,88.9795151 130,89 L130,50 C130,50.1036464 129.971788,49.4988099 130,49 C129.739042,46.8828777 129.471022,44.9851234 129,43 C127.813584,37.0088305 125.606104,31.0889814 122,26 C112.282973,9.66267383 94.2553094,0 65,0 C35.7447556,0 17.7163695,9.66228674 8,26 C4.39414151,31.089175 2.18649928,37.0088305 1,43 C0.529043306,44.9851234 0.26102792,46.8828583 0,49 C0.0282766705,49.4534424 6.49996895e-05,50.3228972 0,50 L0,89 Z', transform: 'translate(65.000000, 60.000000) scale(1, -1) translate(-65.000000, -60.000000) ', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Round-and-Soft', fill: '#E1E6E8', xlinkHref: "#" + pathName }),
            React.createElement(FaceColor_1.default, { maskID: maskName },
                React.createElement("g", { transform: 'translate(-4.000000, -2.000000)' },
                    React.createElement("rect", { x: '0', y: '0', width: '138', height: '124' }))),
            React.createElement(texture_1.default, { maskID: maskName })));
    };
    Round02.optionValue = 'Round02';
    return Round02;
}(React.Component));
exports.default = Round02;
