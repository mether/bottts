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
var Diagram = /** @class */ (function (_super) {
    __extends(Diagram, _super);
    function Diagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diagram.prototype.render = function () {
        var pieceId = 'Mouth/Diagram';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fillOpacity: '0.2', fill: '#000000', x: '4', y: '4', width: '68', height: '24', rx: '5' }),
            React.createElement("rect", { id: 'Kiss-The-Robot-Beep-Boop', fillOpacity: '0.8', fill: '#000000', x: '8', y: '8', width: '60', height: '16', rx: '2' }),
            React.createElement("polyline", { id: 'Path-3', stroke: '#4EFAC9', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', points: '9 17 20 17 22 13 25 20 29 12 31 21 34 10 37 20 40 17 55 17 58 13 60 20 63 17 67 17' })));
    };
    Diagram.optionValue = 'Diagram';
    return Diagram;
}(React.Component));
exports.default = Diagram;
