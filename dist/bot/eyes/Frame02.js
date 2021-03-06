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
var Frame02 = /** @class */ (function (_super) {
    __extends(Frame02, _super);
    function Frame02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frame02.prototype.render = function () {
        var pieceId = 'Eyes/Frame-2';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("rect", { id: 'Container', fillOpacity: '0.8', fill: '#000000', x: '8', y: '10', width: '88', height: '36', rx: '4' }),
            React.createElement("rect", { id: 'Eye', fill: '#5EF2B8', x: '28', y: '21', width: '10', height: '17', rx: '2' }),
            React.createElement("rect", { id: 'Eye', fill: '#5EF2B8', x: '66', y: '21', width: '10', height: '17', rx: '2' }),
            React.createElement("polygon", { id: 'Reflection', fillOpacity: '0.4', fill: '#FFFFFF', points: '83 10 88 10 76 46 71 46' })));
    };
    Frame02.optionValue = 'Frame02';
    return Frame02;
}(React.Component));
exports.default = Frame02;
