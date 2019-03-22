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
var Smile02 = /** @class */ (function (_super) {
    __extends(Smile02, _super);
    function Smile02() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smile02.prototype.render = function () {
        var pieceId = 'Mouth/Smile02';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M18,10.2222222 C18,21.7845222 24.4740576,28 38,28 C51.5182433,28 58,21.6614595 58,10.2222222 C58,9.49621891 57.1738581,8 55,8 C39.2707408,8 29.1916598,8 21,8 C18.9490269,8 18,9.38479408 18,10.2222222 Z', id: pathName }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName })),
            React.createElement("use", { id: 'Mouth', fillOpacity: '0.8', fill: '#000000', xlinkHref: "#" + pathName }),
            React.createElement("rect", { id: 'Teeth', fill: '#FFFFFF', mask: "url(#" + maskName + ")", x: '30', y: '2', width: '16', height: '14', rx: '2' })));
    };
    Smile02.optionValue = 'Smile02';
    return Smile02;
}(React.Component));
exports.default = Smile02;
