"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfViewer = exports.PDFOrientation = exports.SelectionMode = void 0;
var react_1 = __importStar(require("react"));
var react_fast_compare_1 = __importDefault(require("react-fast-compare"));
var react_pdf_1 = require("react-pdf");
require("react-pdf/dist/esm/Page/AnnotationLayer.css");
require("../style/react_pdf_viewer.css");
var utils_1 = require("../utils");
var coordinates_1 = require("../utils/coordinates");
var PageLoader_1 = require("./PageLoader");
var PdfPage_1 = require("./PdfPage");
var PlaceholderPage_1 = require("./PlaceholderPage");
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["AREA"] = 0] = "AREA";
    SelectionMode[SelectionMode["TEXT"] = 1] = "TEXT";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
var PDFOrientation;
(function (PDFOrientation) {
    PDFOrientation["PORTRAIT"] = "portrait";
    PDFOrientation["LANDSCAPE"] = "landscape";
})(PDFOrientation = exports.PDFOrientation || (exports.PDFOrientation = {}));
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/" + react_pdf_1.pdfjs.version + "/pdf.worker.min.js";
var PdfViewer = /** @class */ (function (_super) {
    __extends(PdfViewer, _super);
    function PdfViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeSelectionMode: SelectionMode.TEXT,
            textSelectionActive: false,
            numPages: 0,
        };
        /** Total left and right border width, needed as offset to avoid PageCanvas rendering past right page border. */
        _this.BORDER_WIDTH_OFFSET = 11;
        _this.TOP_WIDTH_OFFSET = 10;
        _this.containerDiv = null;
        _this.scrollingElement = null;
        _this.pageRefs = new Map();
        _this._mounted = false;
        /**
         * Lifecycle function
         */
        _this.componentDidMount = function () {
            _this._mounted = true;
            _this.computeSelectionMap();
            document.addEventListener("keydown", _this.onKeyDown);
            document.addEventListener("scroll", _this.onScroll);
            // debug
            window.PdfViewer = _this;
        };
        _this.componentDidUpdate = function (prevProps) {
            if (_this.props.selections !== prevProps.selections)
                _this.computeSelectionMap();
            if (_this.props.url !== prevProps.url)
                _this.setState({ documentUuid: undefined });
            if (_this.props.scale !== prevProps.scale && _this.state.originalPageDimensions)
                _this.computeScaledPageDimensions(_this.state.originalPageDimensions);
        };
        _this.componentWillUnmount = function () {
            var _a, _b;
            _this._mounted = false;
            document.removeEventListener("keydown", _this.onKeyDown);
            (_a = _this.scrollingElement) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", _this.onScroll);
            (_b = _this.containerDiv) === null || _b === void 0 ? void 0 : _b.removeEventListener("selectstart", _this.onTextSelectionStart);
            document.removeEventListener("selectionchange", _this.onTextSelectionChange);
        };
        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return !react_fast_compare_1.default(_this.props, nextProps) || !react_fast_compare_1.default(_this.state, nextState);
        };
        /**
         * Helpers
         */
        _this.resetSelections = function () {
            _this.clearTextSelection();
            _this.clearAreaSelection();
        };
        _this.computeSelectionMap = function () {
            if (!_this.props.selections) {
                _this.state.selectionMap = undefined;
                return;
            }
            var selectionMap = new Map();
            _this.props.selections.forEach(function (selection) {
                var _a;
                selectionMap.set(selection.position.pageNumber, __spreadArrays(((_a = selectionMap.get(selection.position.pageNumber)) !== null && _a !== void 0 ? _a : []), [
                    selection,
                ]));
            });
            _this.setState({ selectionMap: selectionMap });
        };
        _this.computePageDimensions = function (pdf) { return __awaiter(_this, void 0, void 0, function () {
            var pages, originalPageDimensions, _i, pages_1, page, width, height, orientation_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Array.from({ length: pdf.numPages })
                            .map(function (x, i) { return i + 1; })
                            .map(function (pageNumber) {
                            return new Promise(function (resolve, reject) {
                                pdf.getPage(pageNumber).then(resolve, reject);
                            });
                        }))];
                    case 1:
                        pages = _a.sent();
                        if (!this._mounted)
                            return [2 /*return*/];
                        originalPageDimensions = new Map();
                        for (_i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
                            page = pages_1[_i];
                            width = page.view[2];
                            height = page.view[3];
                            orientation_1 = page.rotate === 90 || page.rotate === 270 ? PDFOrientation.LANDSCAPE : PDFOrientation.PORTRAIT;
                            originalPageDimensions.set(page.pageNumber, { width: width, height: height, orientation: orientation_1 });
                        }
                        this.computeScaledPageDimensions(originalPageDimensions);
                        this.setState({ originalPageDimensions: originalPageDimensions });
                        return [2 /*return*/, originalPageDimensions];
                }
            });
        }); };
        _this.computeScaledPageDimensions = function (originalPageDimensions) {
            var _a, _b, _c;
            if (!_this.containerDiv)
                return;
            var pageDimensions = new Map();
            var pageYOffsets = new Array(originalPageDimensions.size);
            pageYOffsets[0] = ((_a = _this.containerDiv.offsetTop) !== null && _a !== void 0 ? _a : 0) + _this.TOP_WIDTH_OFFSET;
            originalPageDimensions.forEach(function (dimension, pageNumber) {
                var width = dimension.width * _this.props.scale;
                var height = dimension.height * _this.props.scale;
                pageDimensions.set(pageNumber, { width: width, height: height, orientation: dimension.orientation });
                if (pageNumber < originalPageDimensions.size)
                    pageYOffsets[pageNumber] = pageYOffsets[pageNumber - 1] + height + _this.BORDER_WIDTH_OFFSET;
            });
            var visiblePages = _this.getVisiblePages(document.documentElement, pageYOffsets);
            _this.setState({ pageDimensions: pageDimensions, pageYOffsets: pageYOffsets, visiblePages: visiblePages });
            (_c = (_b = _this.props).onPageDimensions) === null || _c === void 0 ? void 0 : _c.call(_b, { pageDimensions: pageDimensions, pageYOffsets: pageYOffsets });
        };
        _this.getVisiblePages = function (scrollElement, pageYOffsets) {
            var pageOffsets = pageYOffsets !== null && pageYOffsets !== void 0 ? pageYOffsets : _this.state.pageYOffsets;
            if (!pageOffsets)
                return [];
            var scrollTop = scrollElement.scrollTop, clientHeight = scrollElement.clientHeight;
            var firstVisiblePageIdx = scrollTop > pageOffsets[pageOffsets.length - 1]
                ? pageOffsets.length - 1
                : pageOffsets.findIndex(function (offset) { return offset > scrollTop; });
            var lastVisiblePageIds = scrollTop + clientHeight > pageOffsets[pageOffsets.length - 1]
                ? pageOffsets.length - 1
                : pageOffsets.findIndex(function (offset) { return offset > scrollTop + clientHeight; });
            var underScanPages = Array.from({ length: Math.min(_this.props.overscanCount, firstVisiblePageIdx) }).map(function (_, i) { return firstVisiblePageIdx - i - 1; });
            var overScanPages = Array.from({
                length: Math.min(_this.props.overscanCount, _this.state.numPages - lastVisiblePageIds - 1),
            }).map(function (_, i) { return i + lastVisiblePageIds + 1; });
            var visibleCount = lastVisiblePageIds - firstVisiblePageIdx + 1;
            var visiblePages = Array.from({ length: visibleCount }).map(function (x, i) { return i + firstVisiblePageIdx; });
            return __spreadArrays(underScanPages, visiblePages, overScanPages);
        };
        _this.getItemKey = function (index) {
            return "doc_" + _this.state.documentUuid + "_page_" + index;
        };
        _this.getPageRef = function (pageNumber) {
            var ref = _this.pageRefs.get(pageNumber);
            if (!ref) {
                ref = react_1.createRef();
                _this.pageRefs.set(pageNumber, ref);
            }
            return ref;
        };
        /**
         * Text selection handlers
         */
        _this.clearTextSelection = function () {
            var _a, _b, _c;
            (_a = utils_1.getWindow(_this.containerDiv).getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
            if (_this.state.textSelectionActive) {
                _this.setState({ textSelectionActive: false });
                (_c = (_b = _this.props).onTextSelection) === null || _c === void 0 ? void 0 : _c.call(_b);
            }
        };
        _this.onTextSelectionStart = function () {
            _this.clearAreaSelection();
        };
        _this.onTextSelectionChange = function () {
            var _a, _b;
            if (_this.state.activeSelectionMode !== SelectionMode.TEXT)
                return;
            var selection = utils_1.getWindow(_this.containerDiv).getSelection();
            if (!selection || selection.isCollapsed)
                return;
            var range = selection.rangeCount > 0 ? selection.getRangeAt(0) : undefined;
            if (!range)
                return;
            var page = utils_1.getPageFromRange(range);
            if (!page)
                return;
            var pageDimension = { width: page.node.clientWidth, height: page.node.clientHeight };
            var rects = utils_1.getClientRects(range, page.node);
            if (rects.length === 0)
                return;
            var boundingRect = utils_1.getBoundingRect(rects);
            var position = coordinates_1.normalizePosition({ boundingRect: boundingRect, rects: rects, pageNumber: page.number }, pageDimension);
            var text = Array.from(range.cloneContents().childNodes)
                .map(function (node) { return node.textContent; })
                .join(" ");
            _this.setState({ textSelectionActive: true });
            (_b = (_a = _this.props).onTextSelection) === null || _b === void 0 ? void 0 : _b.call(_a, { position: position, text: text });
        };
        /**
         * Area selection handlers
         */
        _this.clearAreaSelection = function () {
            var _a, _b;
            if (_this.state.areaSelectionActivePage) {
                _this.setState({ areaSelectionActivePage: undefined });
                (_b = (_a = _this.props).onAreaSelection) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        };
        _this.onAreaSelectionChange = function (pageNumber) {
            _this.setState({ areaSelectionActivePage: pageNumber });
        };
        _this.onAreaSelectionEnd = function (selection) {
            var _a, _b;
            (_b = (_a = _this.props).onAreaSelection) === null || _b === void 0 ? void 0 : _b.call(_a, selection);
        };
        /**
         * Event handlers
         */
        _this.getScrollParent = function (node) {
            var overflowY = window.getComputedStyle(node).overflowY;
            var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
            if (isScrollable && node.scrollHeight >= node.clientHeight) {
                return node;
            }
            return node.parentElement ? _this.getScrollParent(node.parentElement) : document.body;
        };
        _this.onKeyDown = function (event) {
            if (event.key === "Escape")
                _this.resetSelections();
        };
        _this.onMouseDown = function (event) {
            var _a, _b, _c;
            _this.resetSelections();
            _this.setState({
                activeSelectionMode: ((_b = (_a = _this.props).enableAreaSelection) === null || _b === void 0 ? void 0 : _b.call(_a, event)) ? SelectionMode.AREA
                    : (_c = SelectionMode.TEXT) !== null && _c !== void 0 ? _c : SelectionMode.TEXT,
            });
        };
        _this.onScroll = function () {
            if (!_this.scrollingElement || !_this.state.pageYOffsets)
                return;
            var visiblePages = _this.getVisiblePages(_this.scrollingElement);
            _this.setState({ visiblePages: visiblePages });
        };
        _this.onDocumentLoad = function (pdf) { return __awaiter(_this, void 0, void 0, function () {
            var pageDimensions;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.computePageDimensions(pdf)];
                    case 1:
                        pageDimensions = _d.sent();
                        this.setState({ numPages: pdf.numPages, documentUuid: utils_1.generateUuid() });
                        if (this.containerDiv) {
                            this.scrollingElement = this.getScrollParent(this.containerDiv);
                            this.scrollingElement.addEventListener("scroll", this.onScroll);
                            (_a = this.containerDiv) === null || _a === void 0 ? void 0 : _a.addEventListener("selectstart", this.onTextSelectionStart);
                        }
                        // SelectionChange event listener does not work on div, only on document?
                        document.addEventListener("selectionchange", this.onTextSelectionChange);
                        if (pageDimensions)
                            (_c = (_b = this.props).onLoad) === null || _c === void 0 ? void 0 : _c.call(_b, pageDimensions);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.renderPages = function () {
            return Array.from(new Array(_this.state.numPages), function (el, i) {
                var _a, _b, _c, _d;
                var pageNumber = i + 1;
                if (!_this.state.visiblePages || !_this.state.visiblePages.includes(i))
                    return (react_1.default.createElement(PlaceholderPage_1.PlaceholderPage, { key: _this.getItemKey(i), pageDimensions: (_a = _this.state.pageDimensions) === null || _a === void 0 ? void 0 : _a.get(pageNumber) }));
                var props = {
                    style: {},
                    pageNumber: pageNumber,
                    innerRef: _this.getPageRef(pageNumber),
                    areaSelectionActive: _this.state.areaSelectionActivePage === pageNumber,
                    enableAreaSelection: _this.props.enableAreaSelection,
                    pageDimensions: (_b = _this.state.pageDimensions) === null || _b === void 0 ? void 0 : _b.get(pageNumber),
                    selections: (_c = _this.state.selectionMap) === null || _c === void 0 ? void 0 : _c.get(pageNumber),
                    onAreaSelectionChange: _this.onAreaSelectionChange,
                    onAreaSelectionEnd: _this.onAreaSelectionEnd,
                    textSelectionColor: (_d = _this.props.textSelectionColor) !== null && _d !== void 0 ? _d : "#0000ff33",
                    areaSelectionComponent: _this.props.areaSelectionComponent,
                    textSelectionComponent: _this.props.textSelectionComponent,
                    newAreaSelectionComponent: _this.props.newAreaSelectionComponent,
                };
                return react_1.default.createElement(PdfPage_1.PdfPage, __assign({ key: _this.getItemKey(i) }, props));
            });
        };
        _this.render = function () {
            var _a;
            var loading = (_a = _this.props.loading) !== null && _a !== void 0 ? _a : react_1.default.createElement(PageLoader_1.PageLoader, null);
            var document = (react_1.default.createElement("div", { ref: function (ref) { return (_this.containerDiv = ref); }, style: {
                    position: "relative",
                }, onContextMenu: function (e) { return e.preventDefault(); }, onPointerDown: _this.onMouseDown },
                react_1.default.createElement(react_pdf_1.Document, { className: _this.state.activeSelectionMode === SelectionMode.TEXT ? "" : "no-select", file: _this.props.url, loading: loading, onLoadSuccess: _this.onDocumentLoad }, _this.containerDiv && _this.state.documentUuid && _this.state.pageDimensions && _this.renderPages())));
            return _this.props.children ? _this.props.children({ document: document }) : document;
        };
        return _this;
    }
    PdfViewer.defaultProps = {
        overscanCount: 1,
        scale: 1.2,
    };
    return PdfViewer;
}(react_1.Component));
exports.PdfViewer = PdfViewer;
