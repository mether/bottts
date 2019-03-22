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
var Hal = /** @class */ (function (_super) {
    __extends(Hal, _super);
    function Hal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hal.prototype.render = function () {
        var pieceId = 'Eyes/Hal';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("circle", { id: '9k', fillOpacity: '0.4', fill: '#FFFFFF', cx: '52', cy: '24', r: '24' }),
            React.createElement("circle", { id: 'Hal', fillOpacity: '0.8', fill: '#000000', cx: '52', cy: '24', r: '20' }),
            React.createElement("path", { d: 'M65.4099666,15.2688976 C64.255446,13.4993048 62.7601287,11.9723152 61.0171519,10.7810659 M56.6467057,8.68518644 C55.1761516,8.23958978 53.6160554,8 52,8 C49.9125219,8 47.9184128,8.3997603 46.0900522,9.12690144 M41.0773564,12.308221 C39.5172104,13.7663492 38.2491513,15.5330907 37.37049,17.5111349', id: 'Bright', strokeOpacity: '0.9', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round' }),
            React.createElement("circle", { id: 'Dave', fill: '#C6080C', cx: '52', cy: '24', r: '10' }),
            React.createElement("circle", { id: "I-can't-do-that", fill: '#EE9337', cx: '52', cy: '24', r: '4' }),
            React.createElement("circle", { id: "I'm-afraid", fill: '#F5F94F', cx: '52', cy: '24', r: '1' })));
    };
    Hal.optionValue = 'Hal';
    return Hal;
}(React.Component));
exports.default = Hal;
