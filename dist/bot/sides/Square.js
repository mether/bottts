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
var SidesColor_1 = require("../color/SidesColor");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        var pieceId = 'Sides/Square';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M11.5374834,16 L24.4625166,16 C28.4743509,16 29.929139,16.4177153 31.3958057,17.2020972 C32.8624723,17.9864791 34.0135209,19.1375277 34.7979028,20.6041943 C35.5822847,22.070861 36,23.5256491 36,27.5374834 L36,48.4625166 C36,52.4743509 35.5822847,53.929139 34.7979028,55.3958057 C34.0135209,56.8624723 32.8624723,58.0135209 31.3958057,58.7979028 C29.929139,59.5822847 28.4743509,60 24.4625166,60 L11.5374834,60 C7.52564907,60 6.070861,59.5822847 4.60419433,58.7979028 C3.13752767,58.0135209 1.98647908,56.8624723 1.20209717,55.3958057 C0.41771525,53.929139 1.80555915e-16,52.4743509 -3.10752092e-16,48.4625166 L3.10752092e-16,27.5374834 C-1.80555915e-16,23.5256491 0.41771525,22.070861 1.20209717,20.6041943 C1.98647908,19.1375277 3.13752767,17.9864791 4.60419433,17.2020972 C6.070861,16.4177153 7.52564907,16 11.5374834,16 Z M127.537483,16 L140.462517,16 C144.474351,16 145.929139,16.4177153 147.395806,17.2020972 C148.862472,17.9864791 150.013521,19.1375277 150.797903,20.6041943 C151.582285,22.070861 152,23.5256491 152,27.5374834 L152,48.4625166 C152,52.4743509 151.582285,53.929139 150.797903,55.3958057 C150.013521,56.8624723 148.862472,58.0135209 147.395806,58.7979028 C145.929139,59.5822847 144.474351,60 140.462517,60 L127.537483,60 C123.525649,60 122.070861,59.5822847 120.604194,58.7979028 C119.137528,58.0135209 117.986479,56.8624723 117.202097,55.3958057 C116.417715,53.929139 116,52.4743509 116,48.4625166 L116,27.5374834 C116,23.5256491 116.417715,22.070861 117.202097,20.6041943 C117.986479,19.1375277 119.137528,17.9864791 120.604194,17.2020972 C122.070861,16.4177153 123.525649,16 127.537483,16 Z', id: pathName }),
            React.createElement("g", { id: 'Ears', transform: 'translate(14.000000, 0.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#0076DE', xlinkHref: "#" + pathName }),
                React.createElement(SidesColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-14.000000, 0.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '180', height: '76' }))),
                React.createElement("rect", { id: 'Shadow', fillOpacity: '0.1', fill: '#000000', mask: "url(#" + maskName + ")", x: '-14', y: '38', width: '180', height: '38' }))));
    };
    Square.optionValue = 'Square';
    return Square;
}(React.Component));
exports.default = Square;
