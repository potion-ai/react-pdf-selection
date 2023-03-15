import { BoundingRect, BoundingRectWithCSSProperties, NormalizedPosition, Position, PositionWithCSSProperties } from "../types";
export declare type Dimensions = {
    width: number;
    height: number;
};
export declare const normalizeBoundingRect: (rect: BoundingRect, { width, height }: Dimensions) => BoundingRect;
export declare const normalizePosition: (position: Position, dimensions: Dimensions) => NormalizedPosition;
export declare const getBoundingRectWithCSSProperties: (rect: BoundingRect, { width, height }: Dimensions) => BoundingRectWithCSSProperties;
export declare const getPositionWithCSSProperties: (position: Position, dimensions: Dimensions) => PositionWithCSSProperties;
export declare const getAbsoluteBoundingRectWithCSSProperties: (rect: BoundingRect) => BoundingRectWithCSSProperties;
