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
var Bulging = /** @class */ (function (_super) {
    __extends(Bulging, _super);
    function Bulging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bulging.prototype.render = function () {
        var pieceId = 'Eyes/Bulging-😳';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("circle", { id: 'Container', fillOpacity: '0.2', fill: '#000000', cx: '28', cy: '24', r: '18' }),
            React.createElement("circle", { id: 'Container', fillOpacity: '0.2', fill: '#000000', cx: '74', cy: '24', r: '18' }),
            React.createElement("circle", { id: 'Cornea', fill: '#F1EEDA', cx: '28', cy: '24', r: '15' }),
            React.createElement("circle", { id: 'Cornea', fill: '#F1EEDA', cx: '74', cy: '24', r: '15' }),
            React.createElement("rect", { id: 'Iris', fillOpacity: '0.8', fill: '#000000', x: '26', y: '15', width: '10', height: '10', rx: '2' }),
            React.createElement("rect", { id: 'Iris', fillOpacity: '0.8', fill: '#000000', x: '74', y: '15', width: '10', height: '10', rx: '2' })));
    };
    Bulging.optionValue = 'Bulging';
    return Bulging;
}(React.Component));
exports.default = Bulging;
