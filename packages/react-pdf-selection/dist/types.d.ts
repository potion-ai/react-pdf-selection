import { CSSProperties } from "react";
export declare type BoundingRect = {
    left: number;
    top: number;
    right: number;
    bottom: number;
};
export declare type BoundingRectWithCSSProperties = {
    top: CSSProperties["top"];
    left: CSSProperties["left"];
    width: CSSProperties["width"];
    height: CSSProperties["height"];
};
export declare type SelectionRects = {
    boundingRect: BoundingRect;
    rects: Array<BoundingRect>;
};
export declare type Position = {
    pageNumber: number;
} & SelectionRects;
export declare type NormalizedPosition = {
    absolute: SelectionRects;
    normalized: SelectionRects;
    pageNumber: number;
};
export declare type PositionWithCSSProperties = {
    pageNumber: number;
    boundingRect: BoundingRectWithCSSProperties;
    rects: BoundingRectWithCSSProperties[];
};
export declare type Coords = {
    x: number;
    y: number;
};
export declare type TextSelectionType<D extends object = {}> = D & {
    text: string;
    position: Position;
};
export declare type AreaSelectionType<D extends object = {}> = D & {
    image: string;
    position: Position;
};
export declare type SelectionType<D extends object = {}> = TextSelectionType<D> | AreaSelectionType<D>;
export declare type NormalizedTextSelection = {
    text: string;
    position: NormalizedPosition;
};
export declare type NormalizedAreaSelection = {
    image: string;
    position: NormalizedPosition;
};
export declare type NormalizedSelection = NormalizedTextSelection | NormalizedAreaSelection;
export declare type TextSelectionWithCSSProperties<D extends object = {}> = D & {
    text: string;
    position: PositionWithCSSProperties;
};
export declare type AreaSelectionWithCSSProperties<D extends object = {}> = D & {
    image: string;
    position: PositionWithCSSProperties;
};
export declare type SelectionWithCSSProperties<D extends object = {}> = TextSelectionWithCSSProperties<D> | AreaSelectionWithCSSProperties<D>;
export declare const isAreaSelection: <D extends object = {}>(selection: SelectionWithCSSProperties<D>) => selection is AreaSelectionWithCSSProperties<D>;
