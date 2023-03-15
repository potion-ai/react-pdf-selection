"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbsoluteBoundingRectWithCSSProperties = exports.getPositionWithCSSProperties = exports.getBoundingRectWithCSSProperties = exports.normalizePosition = exports.normalizeBoundingRect = void 0;
var normalizeBoundingRect = function (rect, _a) {
    var width = _a.width, height = _a.height;
    return {
        left: (rect.left * 100) / width,
        top: (rect.top * 100) / height,
        right: (rect.right * 100) / width,
        bottom: (rect.bottom * 100) / height,
    };
};
exports.normalizeBoundingRect = normalizeBoundingRect;
var normalizePosition = function (position, dimensions) {
    return {
        absolute: {
            boundingRect: position.boundingRect,
            rects: position.rects,
        },
        normalized: {
            boundingRect: exports.normalizeBoundingRect(position.boundingRect, dimensions),
            rects: position.rects.map(function (rect) { return exports.normalizeBoundingRect(rect, dimensions); }),
        },
        pageNumber: position.pageNumber,
    };
};
exports.normalizePosition = normalizePosition;
var getBoundingRectWithCSSProperties = function (rect, _a) {
    var width = _a.width, height = _a.height;
    return ({
        left: rect.left + "%",
        top: rect.top + "%",
        width: ((rect.right - rect.left) * width) / 100,
        height: ((rect.bottom - rect.top) * height) / 100,
    });
};
exports.getBoundingRectWithCSSProperties = getBoundingRectWithCSSProperties;
var getPositionWithCSSProperties = function (position, dimensions) { return (__assign(__assign({}, position), { boundingRect: exports.getBoundingRectWithCSSProperties(position.boundingRect, dimensions), rects: position.rects.map(function (rect) { return exports.getBoundingRectWithCSSProperties(rect, dimensions); }) })); };
exports.getPositionWithCSSProperties = getPositionWithCSSProperties;
var getAbsoluteBoundingRectWithCSSProperties = function (rect) { return ({
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
}); };
exports.getAbsoluteBoundingRectWithCSSProperties = getAbsoluteBoundingRectWithCSSProperties;
