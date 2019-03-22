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
var Arturito = /** @class */ (function (_super) {
    __extends(Arturito, _super);
    function Arturito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arturito.prototype.render = function () {
        var pieceId = 'Eyes/Arturito';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("g", { id: 'Radar-Eye', transform: 'translate(23.000000, 5.000000)' },
                React.createElement("path", { d: 'M50,0 L56,0 L58,32 L50,32 L50,38 L0,38 L9,0 L50,0 Z', id: 'R2-Eye', fillOpacity: '0.8', fill: '#0040AE' }),
                React.createElement("circle", { id: 'Outline', fillOpacity: '0.2', fill: '#000000', cx: '26', cy: '16', r: '15' }),
                React.createElement("circle", { id: 'Eye', fillOpacity: '0.6', fill: '#000000', cx: '26', cy: '16', r: '12' }),
                React.createElement("circle", { id: 'Shine', fill: '#FFFFFF', cx: '31', cy: '9', r: '2' }))));
    };
    Arturito.optionValue = 'Arturito';
    return Arturito;
}(React.Component));
exports.default = Arturito;
