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
var Glow = /** @class */ (function (_super) {
    __extends(Glow, _super);
    function Glow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Glow.prototype.render = function () {
        var pieceId = 'Eyes/Glow';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.1', fill: '#FFFFFF', cx: '21', cy: '30', r: '15' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.1', fill: '#FFFFFF', cx: '83', cy: '30', r: '15' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.1', fill: '#FFFFFF', cx: '21', cy: '30', r: '12' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.1', fill: '#FFFFFF', cx: '83', cy: '30', r: '12' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.8', fill: '#FFFFFF', cx: '21', cy: '30', r: '6' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.8', fill: '#FFFFFF', cx: '83', cy: '30', r: '6' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.8', fill: '#FFFFFF', cx: '21', cy: '30', r: '3' }),
            React.createElement("circle", { id: 'Eye', fillOpacity: '0.8', fill: '#FFFFFF', cx: '83', cy: '30', r: '3' })));
    };
    Glow.optionValue = 'Glow';
    return Glow;
}(React.Component));
exports.default = Glow;
