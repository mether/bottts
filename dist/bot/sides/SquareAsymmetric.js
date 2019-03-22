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
var SquareAsymmetric = /** @class */ (function (_super) {
    __extends(SquareAsymmetric, _super);
    function SquareAsymmetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareAsymmetric.prototype.render = function () {
        var pieceId = 'Sides/SquareAsymmetric';
        var pathName = pieceId + "-path";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M160,15.0003274 C161.68664,15.0091031 162.317652,15.194108 162.953691,15.5342654 C163.605543,15.8828796 164.11712,16.3944567 164.465735,17.0463086 C164.814349,17.6981604 165,18.3447329 165,20.1277704 L165,39.8722296 C165,41.6552671 164.814349,42.3018396 164.465735,42.9536914 C164.11712,43.6055433 163.605543,44.1171204 162.953691,44.4657346 C162.317652,44.805892 161.68664,44.9908969 160,44.9996726 L160,54.8722296 C160,56.6552671 159.814349,57.3018396 159.465735,57.9536914 C159.11712,58.6055433 158.605543,59.1171204 157.953691,59.4657346 C157.30184,59.8143488 156.655267,60 154.87223,60 L129.12777,60 C127.344733,60 126.69816,59.8143488 126.046309,59.4657346 C125.394457,59.1171204 124.88288,58.6055433 124.534265,57.9536914 C124.185651,57.3018396 124,56.6552671 124,54.8722296 L124,5.1277704 C124,3.34473292 124.185651,2.69816044 124.534265,2.04630859 C124.88288,1.39445674 125.394457,0.882879593 126.046309,0.534265408 C126.69816,0.185651222 127.344733,1.2037061e-16 129.12777,-2.07168062e-16 L154.87223,2.07168062e-16 C156.655267,-1.2037061e-16 157.30184,0.185651222 157.953691,0.534265408 C158.605543,0.882879593 159.11712,1.39445674 159.465735,2.04630859 C159.814349,2.69816044 160,3.34473292 160,5.1277704 L160,15.0003274 Z M10,23 L10,12.1277704 C10,10.3447329 10.1856512,9.69816044 10.5342654,9.04630859 C10.8828796,8.39445674 11.3944567,7.88287959 12.0463086,7.53426541 C12.6981604,7.18565122 13.3447329,7 15.1277704,7 L30.8722296,7 C32.6552671,7 33.3018396,7.18565122 33.9536914,7.53426541 C34.6055433,7.88287959 35.1171204,8.39445674 35.4657346,9.04630859 C35.8143488,9.69816044 36,10.3447329 36,12.1277704 L36,28.1277704 L36,47.8722296 C36,49.6552671 35.8143488,50.3018396 35.4657346,50.9536914 C35.1171204,51.6055433 34.6055433,52.1171204 33.9536914,52.4657346 C33.3018396,52.8143488 32.6552671,53 30.8722296,53 L5.1277704,53 C3.34473292,53 2.69816044,52.8143488 2.04630859,52.4657346 C1.39445674,52.1171204 0.882879593,51.6055433 0.534265408,50.9536914 C0.185651222,50.3018396 8.02470732e-17,49.6552671 -1.38112041e-16,47.8722296 L1.38112041e-16,28.1277704 C-8.02470732e-17,26.3447329 0.185651222,25.6981604 0.534265408,25.0463086 C0.882879593,24.3944567 1.39445674,23.8828796 2.04630859,23.5342654 C2.69816044,23.1856512 3.34473292,23 5.1277704,23 L10,23 Z', id: pathName }),
            React.createElement("g", { id: 'Ears', transform: 'translate(10.000000, 8.000000)' },
                React.createElement("mask", { id: maskName, fill: 'white' },
                    React.createElement("use", { xlinkHref: "#" + pathName })),
                React.createElement("use", { fill: '#0076DE', xlinkHref: "#" + pathName }),
                React.createElement(SidesColor_1.default, { maskID: maskName },
                    React.createElement("g", { transform: 'translate(-10.000000, -8.000000)' },
                        React.createElement("rect", { x: '0', y: '0', width: '180', height: '76' }))),
                React.createElement("rect", { id: 'Shadow', fillOpacity: '0.1', fill: '#000000', mask: "url(#" + maskName + ")", x: '-10', y: '39', width: '180', height: '29' }),
                React.createElement("circle", { id: 'Beep', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", cx: '151', cy: '12', r: '5' }),
                React.createElement("circle", { id: 'Beep', fillOpacity: '0.6', fill: '#FFFFFF', mask: "url(#" + maskName + ")", cx: '151', cy: '28', r: '5' }))));
    };
    SquareAsymmetric.optionValue = 'SquareAsymmetric';
    return SquareAsymmetric;
}(React.Component));
exports.default = SquareAsymmetric;
