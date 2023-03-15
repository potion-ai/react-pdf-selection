import { BoundingRect } from "../types";
export declare const getClientRects: (range: Range, containerEl: HTMLElement, shouldOptimize?: boolean) => Array<BoundingRect>;
export declare const getBoundingRect: (clientRects: Array<BoundingRect>) => BoundingRect;
