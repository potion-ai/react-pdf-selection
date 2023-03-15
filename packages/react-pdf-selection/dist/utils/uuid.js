"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid = void 0;
var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
var generateUuid = function () {
    return "" + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};
exports.generateUuid = generateUuid;
