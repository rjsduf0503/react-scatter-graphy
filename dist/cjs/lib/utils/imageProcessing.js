"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageProcessing = void 0;
function imageProcessing(_a) {
    var maxWidth = _a.maxWidth, size = _a.size, src = _a.src, callback = _a.callback;
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.style.imageRendering = 'crisp-edges';
    image.onload = function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        if (!context)
            return;
        var width = maxWidth, height = (image.height * maxWidth) / image.width;
        (canvas.width = width), (canvas.height = height);
        context.scale(0.5 / size, 0.5 / size);
        context.imageSmoothingEnabled = false;
        context.drawImage(image, 0, 0, width * 2, height * 2);
        var imageData = context.getImageData(0, 0, width, height);
        var pixels = new Uint8Array(imageData.data);
        var minX = width, maxX = 0, minY = height, maxY = 0;
        var imbalancedCoords = [];
        for (var i = 0; i < pixels.length; i += 4) {
            if (pixels[i + 3] !== 0) {
                var x = (i / 4) % width, y = Math.floor(i / 4 / width);
                (minX = Math.min(x, minX)),
                    (maxX = Math.max(x, maxX)),
                    (minY = Math.min(y, minY)),
                    (maxY = Math.max(y, maxY));
                imbalancedCoords.push([x, y]);
            }
        }
        var w = maxX - minX, h = maxY - minY;
        var coords = imbalancedCoords.map(function (v) { return [
            ((v[0] - minX) * width) / w,
            ((v[1] - minY) * height) / h,
        ]; });
        callback({ error: null, coords: coords, height: height });
    };
    image.onerror = function (error) {
        callback({ error: error });
    };
    image.src = src;
}
exports.imageProcessing = imageProcessing;
