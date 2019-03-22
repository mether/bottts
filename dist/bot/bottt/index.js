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
var face_1 = require("../face");
var mouth_1 = require("../mouth");
var sides_1 = require("../sides");
var top_1 = require("../top");
var eyes_1 = require("./../eyes");
var Bottt = /** @class */ (function (_super) {
    __extends(Bottt, _super);
    function Bottt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bottt.prototype.render = function () {
        return (React.createElement("g", { id: 'Bottt/Head', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(30.000000, 33.000000)' },
            React.createElement("g", { id: 'Sides', width: '180px', height: '76px', transform: 'translate(0.000000, 66.000000)' },
                React.createElement(sides_1.default, null)),
            React.createElement("g", { id: 'Top', transform: 'translate(41.000000, 0.000000)', width: '100px', height: '52px' },
                React.createElement(top_1.default, null)),
            React.createElement("g", { id: 'Face', transform: 'translate(25.000000, 44.000000)', width: '130px', height: '120px' },
                React.createElement(face_1.default, null)),
            React.createElement("g", { id: 'Mouth', transform: 'translate(52.000000, 124.000000)', width: '76px', height: '32px' },
                React.createElement(mouth_1.default, null)),
            React.createElement("g", { id: 'Eyes', transform: 'translate(38.000000, 76.000000)', width: '104px', height: '48px' },
                React.createElement(eyes_1.default, null))));
    };
    return Bottt;
}(React.Component));
exports.default = Bottt;
