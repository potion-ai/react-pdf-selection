"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreaAsPNG = void 0;
var getAreaAsPNG = function (canvas, position) {
    var left = position.left, top = position.top, right = position.right, bottom = position.bottom;
    var width = right - left;
    var height = bottom - top;
    var newCanvas = canvas.ownerDocument.createElement("canvas");
    newCanvas.width = width;
    newCanvas.height = height;
    var newCanvasContext = newCanvas.getContext("2d");
    if (!newCanvasContext) {
        return "";
    }
    var dpr = window.devicePixelRatio;
    newCanvasContext.drawImage(canvas, left * dpr, top * dpr, width * dpr, height * dpr, 0, 0, width, height);
    return newCanvas.toDataURL("image/png");
};
exports.getAreaAsPNG = getAreaAsPNG;
