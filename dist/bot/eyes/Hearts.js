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
var Hearts = /** @class */ (function (_super) {
    __extends(Hearts, _super);
    function Hearts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hearts.prototype.render = function () {
        var pieceId = 'Eyes/Hearts-😍';
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M29.9583333,10 C27.4074091,10 24.8837273,11.9797894 23.5,13.8206358 C22.1106364,11.9797894 19.5925909,10 17.0416667,10 C11.5523182,10 8,13.3341032 8,17.6412715 C8,23.3708668 12.4118636,26.771228 17.0416667,30.376724 C18.695,31.6133636 21.8223436,34.7777086 22.2083333,35.470905 C22.5943231,36.1641015 24.3143077,36.1885229 24.7916667,35.470905 C25.2690257,34.7532872 28.3021818,31.6133636 29.9583333,30.376724 C34.5853182,26.771228 39,23.3708668 39,17.6412715 C39,13.3341032 35.4476818,10 29.9583333,10 Z', id: 'Heart', fill: '#FF5353', fillRule: 'nonzero', transform: 'translate(23.500000, 23.000000) rotate(-3.000000) translate(-23.500000, -23.000000) ' }),
            React.createElement("path", { d: 'M86.9583333,10 C84.4074091,10 81.8837273,11.9797894 80.5,13.8206358 C79.1106364,11.9797894 76.5925909,10 74.0416667,10 C68.5523182,10 65,13.3341032 65,17.6412715 C65,23.3708668 69.4118636,26.771228 74.0416667,30.376724 C75.695,31.6133636 78.8223436,34.7777086 79.2083333,35.470905 C79.5943231,36.1641015 81.3143077,36.1885229 81.7916667,35.470905 C82.2690257,34.7532872 85.3021818,31.6133636 86.9583333,30.376724 C91.5853182,26.771228 96,23.3708668 96,17.6412715 C96,13.3341032 92.4476818,10 86.9583333,10 Z', id: 'Heart', fill: '#FF5353', fillRule: 'nonzero', transform: 'translate(80.500000, 23.000000) rotate(3.000000) translate(-80.500000, -23.000000) ' })));
    };
    Hearts.optionValue = 'Hearts';
    return Hearts;
}(React.Component));
exports.default = Hearts;
