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
var RoboCop = /** @class */ (function (_super) {
    __extends(RoboCop, _super);
    function RoboCop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoboCop.prototype.render = function () {
        var pieceId = 'Mouth/RoboCop';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M38.000205,0 L76.000205,0 L76,21 C74.6982291,28.3333333 70.417878,32 63.1589466,32 C52.2706162,32 49.1374429,24.0000982 38.000205,24 C26.8628005,24 23.7296555,32 12.8412584,32 C5.58232699,32 1.30197584,28.3333333 0.000204963239,21 L-3.97903932e-13,0 L38.000205,0 Z', id: 'Drop-It!', fill: '#F6E3D0' }),
            React.createElement("path", { d: 'M30,8 C30,12.418278 33.581722,16 38,16 C42.418278,16 46,12.418278 46,8', id: 'Thank-You-For-Your-Cooperation', stroke: '#A75548', strokeWidth: '4', strokeLinecap: 'round' })));
    };
    RoboCop.optionValue = 'RoboCop';
    return RoboCop;
}(React.Component));
exports.default = RoboCop;
