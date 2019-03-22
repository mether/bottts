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
var GlowingBulb01 = /** @class */ (function (_super) {
    __extends(GlowingBulb01, _super);
    function GlowingBulb01() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlowingBulb01.prototype.render = function () {
        var pieceId = 'Top/GlowingBulb01';
        var pathName1 = pieceId + "-path-1";
        var pathName2 = pieceId + "-path-2";
        var filterName1 = pieceId + "-filter-1";
        var filterName2 = pieceId + "-filter-2";
        var maskName = pieceId + "-mask";
        return (React.createElement("g", { id: pieceId, stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M48,8 L52,8 C60.836556,8 68,15.163444 68,24 L68,32 C68,36.418278 64.418278,40 60,40 L40,40 C35.581722,40 32,36.418278 32,32 L32,24 C32,15.163444 39.163444,8 48,8 Z', id: pathName1 }),
                React.createElement("filter", { x: '-33.3%', y: '-37.5%', width: '166.7%', height: '175.0%', filterUnits: 'objectBoundingBox', id: filterName1 },
                    React.createElement("feOffset", { dx: '0', dy: '0', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feGaussianBlur", { stdDeviation: '4', in: 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
                    React.createElement("feComposite", { in: 'shadowBlurOuter1', in2: 'SourceAlpha', operator: 'out', result: 'shadowBlurOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0', type: 'matrix', in: 'shadowBlurOuter1' })),
                React.createElement("filter", { x: '-27.8%', y: '-31.2%', width: '155.6%', height: '162.5%', filterUnits: 'objectBoundingBox', id: filterName2 },
                    React.createElement("feGaussianBlur", { stdDeviation: '2', in: 'SourceAlpha', result: 'shadowBlurInner1' }),
                    React.createElement("feOffset", { dx: '0', dy: '0', in: 'shadowBlurInner1', result: 'shadowOffsetInner1' }),
                    React.createElement("feComposite", { in: 'shadowOffsetInner1', in2: 'SourceAlpha', operator: 'arithmetic', k2: '-1', k3: '1', result: 'shadowInnerInner1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0', type: 'matrix', in: 'shadowInnerInner1' })),
                React.createElement("rect", { id: pathName2, x: '22', y: '40', width: '56', height: '12', rx: '1' })),
            React.createElement("g", { id: 'Bulb' },
                React.createElement("use", { fill: 'black', fillOpacity: '1', filter: "url(#" + filterName1 + ")", xlinkHref: "#" + pathName1 }),
                React.createElement("use", { fillOpacity: '0.300000012', fill: '#FFFFFF', fillRule: 'evenodd', xlinkHref: "#" + pathName1 }),
                React.createElement("use", { fill: 'black', fillOpacity: '1', filter: "url(#" + filterName2 + ")", xlinkHref: "#" + pathName1 })),
            React.createElement("path", { d: 'M49,11.5 C53.9315485,11.5 58.3660426,13.6281427 61.4352098,17.0161556', id: 'Reflection', stroke: '#FFFFFF', strokeWidth: '2', strokeLinecap: 'round' }),
            React.createElement("path", { d: 'M49.8284271,29 L50.3137085,29 L59.3137085,20 L62.1421356,22.8284271 L52,32.9705627 L52,40 L48,40 L48,32.8284271 L38,22.8284271 L40.8284271,20 L49.8284271,29 Z', id: 'Why', fillOpacity: '0.8', fill: '#FFFFFF' }),
            React.createElement("mask", { id: maskName, fill: 'white' },
                React.createElement("use", { xlinkHref: "#" + pathName2 })),
            React.createElement("use", { id: 'Band', fill: '#48494B', xlinkHref: "#" + pathName2 })));
    };
    GlowingBulb01.optionValue = 'GlowingBulb01';
    return GlowingBulb01;
}(React.Component));
exports.default = GlowingBulb01;
