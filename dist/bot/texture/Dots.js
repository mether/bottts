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
var Dots = /** @class */ (function (_super) {
    __extends(Dots, _super);
    function Dots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dots.prototype.render = function () {
        var pieceId = 'Texture/Dots';
        return (React.createElement("g", { id: pieceId, mask: "url(#" + this.props.maskID + ")", stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            React.createElement("path", { d: 'M33.6,96.7586207 C32.440202,96.7586207 31.5,95.8168748 31.5,94.6551724 C31.5,93.49347 32.440202,92.5517241 33.6,92.5517241 C34.759798,92.5517241 35.7,93.49347 35.7,94.6551724 C35.7,95.8168748 34.759798,96.7586207 33.6,96.7586207 Z M33.6,84.137931 C32.440202,84.137931 31.5,83.1961852 31.5,82.0344828 C31.5,80.8727804 32.440202,79.9310345 33.6,79.9310345 C34.759798,79.9310345 35.7,80.8727804 35.7,82.0344828 C35.7,83.1961852 34.759798,84.137931 33.6,84.137931 Z M34.1,109.206897 C32.940202,109.206897 32,108.265151 32,107.103448 C32,105.941746 32.940202,105 34.1,105 C35.259798,105 36.2,105.941746 36.2,107.103448 C36.2,108.265151 35.259798,109.206897 34.1,109.206897 Z M47.1,109.206897 C45.940202,109.206897 45,108.265151 45,107.103448 C45,105.941746 45.940202,105 47.1,105 C48.259798,105 49.2,105.941746 49.2,107.103448 C49.2,108.265151 48.259798,109.206897 47.1,109.206897 Z M27.3,90.4482759 C26.140202,90.4482759 25.2,89.50653 25.2,88.3448276 C25.2,87.1831252 26.140202,86.2413793 27.3,86.2413793 C28.459798,86.2413793 29.4,87.1831252 29.4,88.3448276 C29.4,89.50653 28.459798,90.4482759 27.3,90.4482759 Z M27.1,103.206897 C25.940202,103.206897 25,102.265151 25,101.103448 C25,99.9417459 25.940202,99 27.1,99 C28.259798,99 29.2,99.9417459 29.2,101.103448 C29.2,102.265151 28.259798,103.206897 27.1,103.206897 Z M51.1,103.206897 C49.940202,103.206897 49,102.265151 49,101.103448 C49,99.9417459 49.940202,99 51.1,99 C52.259798,99 53.2,99.9417459 53.2,101.103448 C53.2,102.265151 52.259798,103.206897 51.1,103.206897 Z M39.9,90.4482759 C38.740202,90.4482759 37.8,89.50653 37.8,88.3448276 C37.8,87.1831252 38.740202,86.2413793 39.9,86.2413793 C41.059798,86.2413793 42,87.1831252 42,88.3448276 C42,89.50653 41.059798,90.4482759 39.9,90.4482759 Z M39.9,103.068966 C38.740202,103.068966 37.8,102.12722 37.8,100.965517 C37.8,99.8038148 38.740202,98.862069 39.9,98.862069 C41.059798,98.862069 42,99.8038148 42,100.965517 C42,102.12722 41.059798,103.068966 39.9,103.068966 Z M33.6,71.5172414 C32.440202,71.5172414 31.5,70.5754955 31.5,69.4137931 C31.5,68.2520907 32.440202,67.3103448 33.6,67.3103448 C34.759798,67.3103448 35.7,68.2520907 35.7,69.4137931 C35.7,70.5754955 34.759798,71.5172414 33.6,71.5172414 Z M27.3,65.2068966 C26.140202,65.2068966 25.2,64.2651507 25.2,63.1034483 C25.2,61.9417459 26.140202,61 27.3,61 C28.459798,61 29.4,61.9417459 29.4,63.1034483 C29.4,64.2651507 28.459798,65.2068966 27.3,65.2068966 Z M27.3,77.8275862 C26.140202,77.8275862 25.2,76.8858403 25.2,75.7241379 C25.2,74.5624355 26.140202,73.6206897 27.3,73.6206897 C28.459798,73.6206897 29.4,74.5624355 29.4,75.7241379 C29.4,76.8858403 28.459798,77.8275862 27.3,77.8275862 Z M39.9,77.8275862 C38.740202,77.8275862 37.8,76.8858403 37.8,75.7241379 C37.8,74.5624355 38.740202,73.6206897 39.9,73.6206897 C41.059798,73.6206897 42,74.5624355 42,75.7241379 C42,76.8858403 41.059798,77.8275862 39.9,77.8275862 Z M8.4,96.7586207 C7.24020203,96.7586207 6.3,95.8168748 6.3,94.6551724 C6.3,93.49347 7.24020203,92.5517241 8.4,92.5517241 C9.55979797,92.5517241 10.5,93.49347 10.5,94.6551724 C10.5,95.8168748 9.55979797,96.7586207 8.4,96.7586207 Z M8.4,84.137931 C7.24020203,84.137931 6.3,83.1961852 6.3,82.0344828 C6.3,80.8727804 7.24020203,79.9310345 8.4,79.9310345 C9.55979797,79.9310345 10.5,80.8727804 10.5,82.0344828 C10.5,83.1961852 9.55979797,84.137931 8.4,84.137931 Z M8.4,109.37931 C7.24020203,109.37931 6.3,108.437564 6.3,107.275862 C6.3,106.11416 7.24020203,105.172414 8.4,105.172414 C9.55979797,105.172414 10.5,106.11416 10.5,107.275862 C10.5,108.437564 9.55979797,109.37931 8.4,109.37931 Z M2.1,90.4482759 C0.940202025,90.4482759 0,89.50653 0,88.3448276 C0,87.1831252 0.940202025,86.2413793 2.1,86.2413793 C3.25979797,86.2413793 4.2,87.1831252 4.2,88.3448276 C4.2,89.50653 3.25979797,90.4482759 2.1,90.4482759 Z M2.1,103.068966 C0.940202025,103.068966 0,102.12722 0,100.965517 C0,99.8038148 0.940202025,98.862069 2.1,98.862069 C3.25979797,98.862069 4.2,99.8038148 4.2,100.965517 C4.2,102.12722 3.25979797,103.068966 2.1,103.068966 Z M14.7,90.4482759 C13.540202,90.4482759 12.6,89.50653 12.6,88.3448276 C12.6,87.1831252 13.540202,86.2413793 14.7,86.2413793 C15.859798,86.2413793 16.8,87.1831252 16.8,88.3448276 C16.8,89.50653 15.859798,90.4482759 14.7,90.4482759 Z M14.7,103.068966 C13.540202,103.068966 12.6,102.12722 12.6,100.965517 C12.6,99.8038148 13.540202,98.862069 14.7,98.862069 C15.859798,98.862069 16.8,99.8038148 16.8,100.965517 C16.8,102.12722 15.859798,103.068966 14.7,103.068966 Z M8.4,71.5172414 C7.24020203,71.5172414 6.3,70.5754955 6.3,69.4137931 C6.3,68.2520907 7.24020203,67.3103448 8.4,67.3103448 C9.55979797,67.3103448 10.5,68.2520907 10.5,69.4137931 C10.5,70.5754955 9.55979797,71.5172414 8.4,71.5172414 Z M2.1,77.8275862 C0.940202025,77.8275862 0,76.8858403 0,75.7241379 C0,74.5624355 0.940202025,73.6206897 2.1,73.6206897 C3.25979797,73.6206897 4.2,74.5624355 4.2,75.7241379 C4.2,76.8858403 3.25979797,77.8275862 2.1,77.8275862 Z M14.7,65.2068966 C13.540202,65.2068966 12.6,64.2651507 12.6,63.1034483 C12.6,61.9417459 13.540202,61 14.7,61 C15.859798,61 16.8,61.9417459 16.8,63.1034483 C16.8,64.2651507 15.859798,65.2068966 14.7,65.2068966 Z M14.7,77.8275862 C13.540202,77.8275862 12.6,76.8858403 12.6,75.7241379 C12.6,74.5624355 13.540202,73.6206897 14.7,73.6206897 C15.859798,73.6206897 16.8,74.5624355 16.8,75.7241379 C16.8,76.8858403 15.859798,77.8275862 14.7,77.8275862 Z M21,96.7586207 C19.840202,96.7586207 18.9,95.8168748 18.9,94.6551724 C18.9,93.49347 19.840202,92.5517241 21,92.5517241 C22.159798,92.5517241 23.1,93.49347 23.1,94.6551724 C23.1,95.8168748 22.159798,96.7586207 21,96.7586207 Z M21,84.137931 C19.840202,84.137931 18.9,83.1961852 18.9,82.0344828 C18.9,80.8727804 19.840202,79.9310345 21,79.9310345 C22.159798,79.9310345 23.1,80.8727804 23.1,82.0344828 C23.1,83.1961852 22.159798,84.137931 21,84.137931 Z M21,109.37931 C19.840202,109.37931 18.9,108.437564 18.9,107.275862 C18.9,106.11416 19.840202,105.172414 21,105.172414 C22.159798,105.172414 23.1,106.11416 23.1,107.275862 C23.1,108.437564 22.159798,109.37931 21,109.37931 Z M33.6,122 C32.440202,122 31.5,121.058254 31.5,119.896552 C31.5,118.734849 32.440202,117.793103 33.6,117.793103 C34.759798,117.793103 35.7,118.734849 35.7,119.896552 C35.7,121.058254 34.759798,122 33.6,122 Z M27.3,115.689655 C26.140202,115.689655 25.2,114.747909 25.2,113.586207 C25.2,112.424504 26.140202,111.482759 27.3,111.482759 C28.459798,111.482759 29.4,112.424504 29.4,113.586207 C29.4,114.747909 28.459798,115.689655 27.3,115.689655 Z M39.9,115.689655 C38.740202,115.689655 37.8,114.747909 37.8,113.586207 C37.8,112.424504 38.740202,111.482759 39.9,111.482759 C41.059798,111.482759 42,112.424504 42,113.586207 C42,114.747909 41.059798,115.689655 39.9,115.689655 Z M8.4,122 C7.24020203,122 6.3,121.058254 6.3,119.896552 C6.3,118.734849 7.24020203,117.793103 8.4,117.793103 C9.55979797,117.793103 10.5,118.734849 10.5,119.896552 C10.5,121.058254 9.55979797,122 8.4,122 Z M2.1,115.689655 C0.940202025,115.689655 0,114.747909 0,113.586207 C0,112.424504 0.940202025,111.482759 2.1,111.482759 C3.25979797,111.482759 4.2,112.424504 4.2,113.586207 C4.2,114.747909 3.25979797,115.689655 2.1,115.689655 Z M14.7,115.689655 C13.540202,115.689655 12.6,114.747909 12.6,113.586207 C12.6,112.424504 13.540202,111.482759 14.7,111.482759 C15.859798,111.482759 16.8,112.424504 16.8,113.586207 C16.8,114.747909 15.859798,115.689655 14.7,115.689655 Z M21,122 C19.840202,122 18.9,121.058254 18.9,119.896552 C18.9,118.734849 19.840202,117.793103 21,117.793103 C22.159798,117.793103 23.1,118.734849 23.1,119.896552 C23.1,121.058254 22.159798,122 21,122 Z M21,71.5172414 C19.840202,71.5172414 18.9,70.5754955 18.9,69.4137931 C18.9,68.2520907 19.840202,67.3103448 21,67.3103448 C22.159798,67.3103448 23.1,68.2520907 23.1,69.4137931 C23.1,70.5754955 22.159798,71.5172414 21,71.5172414 Z', id: 'dots', fillOpacity: '0.2', fill: '#000000', fillRule: 'nonzero' }),
            React.createElement("path", { d: 'M123.6,35.7586207 C122.440202,35.7586207 121.5,34.8168748 121.5,33.6551724 C121.5,32.49347 122.440202,31.5517241 123.6,31.5517241 C124.759798,31.5517241 125.7,32.49347 125.7,33.6551724 C125.7,34.8168748 124.759798,35.7586207 123.6,35.7586207 Z M123.6,23.137931 C122.440202,23.137931 121.5,22.1961852 121.5,21.0344828 C121.5,19.8727804 122.440202,18.9310345 123.6,18.9310345 C124.759798,18.9310345 125.7,19.8727804 125.7,21.0344828 C125.7,22.1961852 124.759798,23.137931 123.6,23.137931 Z M123.6,48.3793103 C122.440202,48.3793103 121.5,47.4375645 121.5,46.2758621 C121.5,45.1141597 122.440202,44.1724138 123.6,44.1724138 C124.759798,44.1724138 125.7,45.1141597 125.7,46.2758621 C125.7,47.4375645 124.759798,48.3793103 123.6,48.3793103 Z M117.3,29.4482759 C116.140202,29.4482759 115.2,28.50653 115.2,27.3448276 C115.2,26.1831252 116.140202,25.2413793 117.3,25.2413793 C118.459798,25.2413793 119.4,26.1831252 119.4,27.3448276 C119.4,28.50653 118.459798,29.4482759 117.3,29.4482759 Z M117.3,42.0689655 C116.140202,42.0689655 115.2,41.1272196 115.2,39.9655172 C115.2,38.8038148 116.140202,37.862069 117.3,37.862069 C118.459798,37.862069 119.4,38.8038148 119.4,39.9655172 C119.4,41.1272196 118.459798,42.0689655 117.3,42.0689655 Z M129.9,29.4482759 C128.740202,29.4482759 127.8,28.50653 127.8,27.3448276 C127.8,26.1831252 128.740202,25.2413793 129.9,25.2413793 C131.059798,25.2413793 132,26.1831252 132,27.3448276 C132,28.50653 131.059798,29.4482759 129.9,29.4482759 Z M129.9,42.0689655 C128.740202,42.0689655 127.8,41.1272196 127.8,39.9655172 C127.8,38.8038148 128.740202,37.862069 129.9,37.862069 C131.059798,37.862069 132,38.8038148 132,39.9655172 C132,41.1272196 131.059798,42.0689655 129.9,42.0689655 Z M123.6,10.5172414 C122.440202,10.5172414 121.5,9.57549551 121.5,8.4137931 C121.5,7.2520907 122.440202,6.31034483 123.6,6.31034483 C124.759798,6.31034483 125.7,7.2520907 125.7,8.4137931 C125.7,9.57549551 124.759798,10.5172414 123.6,10.5172414 Z M117.3,4.20689655 C116.140202,4.20689655 115.2,3.26515068 115.2,2.10344828 C115.2,0.941745871 116.140202,0 117.3,0 C118.459798,0 119.4,0.941745871 119.4,2.10344828 C119.4,3.26515068 118.459798,4.20689655 117.3,4.20689655 Z M117.3,16.8275862 C116.140202,16.8275862 115.2,15.8858403 115.2,14.7241379 C115.2,13.5624355 116.140202,12.6206897 117.3,12.6206897 C118.459798,12.6206897 119.4,13.5624355 119.4,14.7241379 C119.4,15.8858403 118.459798,16.8275862 117.3,16.8275862 Z M129.9,16.8275862 C128.740202,16.8275862 127.8,15.8858403 127.8,14.7241379 C127.8,13.5624355 128.740202,12.6206897 129.9,12.6206897 C131.059798,12.6206897 132,13.5624355 132,14.7241379 C132,15.8858403 131.059798,16.8275862 129.9,16.8275862 Z M98.4,35.7586207 C97.240202,35.7586207 96.3,34.8168748 96.3,33.6551724 C96.3,32.49347 97.240202,31.5517241 98.4,31.5517241 C99.559798,31.5517241 100.5,32.49347 100.5,33.6551724 C100.5,34.8168748 99.559798,35.7586207 98.4,35.7586207 Z M98.4,23.137931 C97.240202,23.137931 96.3,22.1961852 96.3,21.0344828 C96.3,19.8727804 97.240202,18.9310345 98.4,18.9310345 C99.559798,18.9310345 100.5,19.8727804 100.5,21.0344828 C100.5,22.1961852 99.559798,23.137931 98.4,23.137931 Z M98.4,48.3793103 C97.240202,48.3793103 96.3,47.4375645 96.3,46.2758621 C96.3,45.1141597 97.240202,44.1724138 98.4,44.1724138 C99.559798,44.1724138 100.5,45.1141597 100.5,46.2758621 C100.5,47.4375645 99.559798,48.3793103 98.4,48.3793103 Z M92.1,29.4482759 C90.940202,29.4482759 90,28.50653 90,27.3448276 C90,26.1831252 90.940202,25.2413793 92.1,25.2413793 C93.259798,25.2413793 94.2,26.1831252 94.2,27.3448276 C94.2,28.50653 93.259798,29.4482759 92.1,29.4482759 Z M104.7,29.4482759 C103.540202,29.4482759 102.6,28.50653 102.6,27.3448276 C102.6,26.1831252 103.540202,25.2413793 104.7,25.2413793 C105.859798,25.2413793 106.8,26.1831252 106.8,27.3448276 C106.8,28.50653 105.859798,29.4482759 104.7,29.4482759 Z M104.7,42.0689655 C103.540202,42.0689655 102.6,41.1272196 102.6,39.9655172 C102.6,38.8038148 103.540202,37.862069 104.7,37.862069 C105.859798,37.862069 106.8,38.8038148 106.8,39.9655172 C106.8,41.1272196 105.859798,42.0689655 104.7,42.0689655 Z M98.4,10.5172414 C97.240202,10.5172414 96.3,9.57549551 96.3,8.4137931 C96.3,7.2520907 97.240202,6.31034483 98.4,6.31034483 C99.559798,6.31034483 100.5,7.2520907 100.5,8.4137931 C100.5,9.57549551 99.559798,10.5172414 98.4,10.5172414 Z M92.1,16.8275862 C90.940202,16.8275862 90,15.8858403 90,14.7241379 C90,13.5624355 90.940202,12.6206897 92.1,12.6206897 C93.259798,12.6206897 94.2,13.5624355 94.2,14.7241379 C94.2,15.8858403 93.259798,16.8275862 92.1,16.8275862 Z M104.7,4.20689655 C103.540202,4.20689655 102.6,3.26515068 102.6,2.10344828 C102.6,0.941745871 103.540202,0 104.7,0 C105.859798,0 106.8,0.941745871 106.8,2.10344828 C106.8,3.26515068 105.859798,4.20689655 104.7,4.20689655 Z M104.7,16.8275862 C103.540202,16.8275862 102.6,15.8858403 102.6,14.7241379 C102.6,13.5624355 103.540202,12.6206897 104.7,12.6206897 C105.859798,12.6206897 106.8,13.5624355 106.8,14.7241379 C106.8,15.8858403 105.859798,16.8275862 104.7,16.8275862 Z M111,35.7586207 C109.840202,35.7586207 108.9,34.8168748 108.9,33.6551724 C108.9,32.49347 109.840202,31.5517241 111,31.5517241 C112.159798,31.5517241 113.1,32.49347 113.1,33.6551724 C113.1,34.8168748 112.159798,35.7586207 111,35.7586207 Z M111,23.137931 C109.840202,23.137931 108.9,22.1961852 108.9,21.0344828 C108.9,19.8727804 109.840202,18.9310345 111,18.9310345 C112.159798,18.9310345 113.1,19.8727804 113.1,21.0344828 C113.1,22.1961852 112.159798,23.137931 111,23.137931 Z M111,48.3793103 C109.840202,48.3793103 108.9,47.4375645 108.9,46.2758621 C108.9,45.1141597 109.840202,44.1724138 111,44.1724138 C112.159798,44.1724138 113.1,45.1141597 113.1,46.2758621 C113.1,47.4375645 112.159798,48.3793103 111,48.3793103 Z M123.6,61 C122.440202,61 121.5,60.0582541 121.5,58.8965517 C121.5,57.7348493 122.440202,56.7931034 123.6,56.7931034 C124.759798,56.7931034 125.7,57.7348493 125.7,58.8965517 C125.7,60.0582541 124.759798,61 123.6,61 Z M129.9,54.6896552 C128.740202,54.6896552 127.8,53.7479093 127.8,52.5862069 C127.8,51.4245045 128.740202,50.4827586 129.9,50.4827586 C131.059798,50.4827586 132,51.4245045 132,52.5862069 C132,53.7479093 131.059798,54.6896552 129.9,54.6896552 Z M104.7,54.6896552 C103.540202,54.6896552 102.6,53.7479093 102.6,52.5862069 C102.6,51.4245045 103.540202,50.4827586 104.7,50.4827586 C105.859798,50.4827586 106.8,51.4245045 106.8,52.5862069 C106.8,53.7479093 105.859798,54.6896552 104.7,54.6896552 Z M111,61 C109.840202,61 108.9,60.0582541 108.9,58.8965517 C108.9,57.7348493 109.840202,56.7931034 111,56.7931034 C112.159798,56.7931034 113.1,57.7348493 113.1,58.8965517 C113.1,60.0582541 112.159798,61 111,61 Z M111,10.5172414 C109.840202,10.5172414 108.9,9.57549551 108.9,8.4137931 C108.9,7.2520907 109.840202,6.31034483 111,6.31034483 C112.159798,6.31034483 113.1,7.2520907 113.1,8.4137931 C113.1,9.57549551 112.159798,10.5172414 111,10.5172414 Z', id: 'dots', fillOpacity: '0.1', fill: '#000000', fillRule: 'nonzero' })));
    };
    Dots.optionValue = 'Dots';
    return Dots;
}(React.Component));
exports.default = Dots;
