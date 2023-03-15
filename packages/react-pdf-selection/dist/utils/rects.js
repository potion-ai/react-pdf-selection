"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoundingRect = exports.getClientRects = void 0;
var sort = function (rects) {
    return rects.sort(function (A, B) {
        var top = A.top - B.top;
        if (top === 0) {
            return A.left - B.left;
        }
        return top;
    });
};
var overlaps = function (A, B) { return A.left <= B.left && B.left <= A.right; };
var sameLine = function (A, B, yMargin) {
    if (yMargin === void 0) { yMargin = 5; }
    return Math.abs(A.top - B.top) < yMargin && Math.abs(A.bottom - B.bottom) < yMargin;
};
var inside = function (A, B) {
    return A.top > B.top && A.left > B.left && A.bottom < B.bottom && A.right < B.right;
};
var nextTo = function (A, B, xMargin) {
    if (xMargin === void 0) { xMargin = 10; }
    return A.left <= B.left && A.right <= B.right && B.left - A.right <= xMargin;
};
var optimizeClientRects = function (clientRects) {
    var rects = sort(clientRects);
    var toRemove = new Set();
    var firstPass = rects.filter(function (rect) {
        return rects.every(function (otherRect) {
            return !inside(rect, otherRect);
        });
    });
    var passCount = 0;
    while (passCount <= 2) {
        firstPass.forEach(function (A) {
            firstPass.forEach(function (B) {
                if (A === B || toRemove.has(A) || toRemove.has(B)) {
                    return;
                }
                if (!sameLine(A, B)) {
                    return;
                }
                if (overlaps(A, B) || nextTo(A, B)) {
                    A.right = Math.max(A.right, B.right);
                    A.bottom = Math.max(A.bottom, B.bottom);
                    toRemove.add(B);
                }
            });
        });
        passCount += 1;
    }
    return firstPass.filter(function (rect) { return !toRemove.has(rect); });
};
var getClientRects = function (range, containerEl, shouldOptimize) {
    if (shouldOptimize === void 0) { shouldOptimize = true; }
    var clientRects = Array.from(range.getClientRects());
    var offset = containerEl.getBoundingClientRect();
    var rects = clientRects.map(function (rect) {
        var top = rect.top + containerEl.scrollTop - offset.top;
        var left = rect.left + containerEl.scrollLeft - offset.left;
        return {
            top: top,
            left: left,
            right: left + rect.width,
            bottom: top + rect.height,
        };
    });
    return shouldOptimize ? optimizeClientRects(rects) : rects;
};
exports.getClientRects = getClientRects;
var getBoundingRect = function (clientRects) {
    return clientRects.reduce(function (res, rect) {
        return {
            left: Math.min(res.left, rect.left),
            top: Math.min(res.top, rect.top),
            right: Math.max(res.right, rect.right),
            bottom: Math.max(res.bottom, rect.bottom),
        };
    }, clientRects[0]);
};
exports.getBoundingRect = getBoundingRect;
