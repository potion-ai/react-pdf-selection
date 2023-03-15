"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageFromRange = exports.getPageFromElement = exports.getWindow = void 0;
var getDocument = function (elm) { return (elm || {}).ownerDocument || document; };
var getWindow = function (elm) { return (getDocument(elm) || {}).defaultView || window; };
exports.getWindow = getWindow;
var getPageFromElement = function (target) {
    var node = target.closest(".react-pdf__Page");
    if (!node)
        return null;
    var number = Number(node.dataset.pageNumber);
    return { node: node, number: number };
};
exports.getPageFromElement = getPageFromElement;
var getPageFromRange = function (range) {
    var parentElement = range.startContainer.parentElement;
    if (!parentElement)
        return;
    return exports.getPageFromElement(parentElement);
};
exports.getPageFromRange = getPageFromRange;
