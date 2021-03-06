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
var Antenna01 = /** @class */ (function (_super) {
    __extends(Antenna01, _super);
    function Antenna01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Antenna01.prototype.render = function () {
        var pieceId = 'Sides/Antenna01';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M12,20 L12,8.1277704 C12,6.34473292 12.1856512,5.69816044 12.5342654,5.04630859 C12.8828796,4.39445674 13.3944567,3.88287959 14.0463086,3.53426541 C14.6981604,3.18565122 15.3447329,3 17.1277704,3 L42.8722296,3 C44.6552671,3 45.3018396,3.18565122 45.9536914,3.53426541 C46.6055433,3.88287959 47.1171204,4.39445674 47.4657346,5.04630859 C47.8143488,5.69816044 48,6.34473292 48,8.1277704 L48,45.8722296 C48,47.6552671 47.8143488,48.3018396 47.4657346,48.9536914 C47.1171204,49.6055433 46.6055433,50.1171204 45.9536914,50.4657346 C45.3018396,50.8143488 44.6552671,51 42.8722296,51 L17.1277704,51 C15.3447329,51 14.6981604,50.8143488 14.0463086,50.4657346 C13.3944567,50.1171204 12.8828796,49.6055433 12.5342654,48.9536914 C12.1856512,48.3018396 12,47.6552671 12,45.8722296 L12,34 L5.1277704,34 C3.34473292,34 2.69816044,33.8143488 2.04630859,33.4657346 C1.39445674,33.1171204 0.882879593,32.6055433 0.534265408,31.9536914 C0.185651222,31.3018396 8.02470732e-17,30.6552671 -1.38112041e-16,28.8722296 L1.38112041e-16,25.1277704 C-8.02470732e-17,23.3447329 0.185651222,22.6981604 0.534265408,22.0463086 C0.882879593,21.3944567 1.39445674,20.8828796 2.04630859,20.5342654 C2.69816044,20.1856512 3.34473292,20 5.1277704,20 L12,20 Z M125.12777,17 L150.87223,17 C152.655267,17 153.30184,17.1856512 153.953691,17.5342654 C154.605543,17.8828796 155.11712,18.3944567 155.465735,19.0463086 C155.814349,19.6981604 156,20.3447329 156,22.1277704 L156,35.8722296 C156,37.6552671 155.814349,38.3018396 155.465735,38.9536914 C155.11712,39.6055433 154.605543,40.1171204 153.953691,40.4657346 C153.30184,40.8143488 152.655267,41 150.87223,41 L125.12777,41 C123.344733,41 122.69816,40.8143488 122.046309,40.4657346 C121.394457,40.1171204 120.88288,39.6055433 120.534265,38.9536914 C120.185651,38.3018396 120,37.6552671 120,35.8722296 L120,22.1277704 C120,20.3447329 120.185651,19.6981604 120.534265,19.0463086 C120.88288,18.3944567 121.394457,17.8828796 122.046309,17.5342654 C122.69816,17.1856512 123.344733,17 125.12777,17 Z M5,0 L7,0 L7,20 L5,20 L5,0 Z', id: pathName }),
            React.createElement("g", { id: 'Ears', transform: 'translate(6.000000, 11.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#0076DE', xlinkHref: "#" + pathName }),
                React.createElement(SidesColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-6.000000, -11.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '180', height: '76' }))),
                React.createElement("rect", { id: 'Shadow', fillOpacity: '0.1', fill: '#000000', mask: "url(#" + maskName + ")", x: '-6', y: '27', width: '180', height: '38' })),
            React.createElement("g", { id: 'Antenna', transform: 'translate(8.000000, 4.000000)' },
                React.createElement("rect", { fillOpacity: '0.4', fill: '#FFFFFF', x: '3', y: '7', width: '2', height: '20' }),
                React.createElement("circle", { id: 'Beep-Boop', fill: '#FFEA8F', cx: '4', cy: '4', r: '4' }),
                React.createElement("circle", { id: 'Beep-Boop', fill: '#FFFFFF', cx: '5', cy: '3', r: '2' }))));
    };
    Antenna01.optionValue = 'Antenna01';
    return Antenna01;
}(React.Component));
exports.default = Antenna01;
