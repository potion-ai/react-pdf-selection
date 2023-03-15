/// <reference types="react" />
import { AreaSelectionWithCSSProperties } from "../types";
export declare type AreaSelectionProps<D extends object = {}> = {
    areaSelection: AreaSelectionWithCSSProperties<D>;
};
export declare const AreaSelection: ({ areaSelection }: AreaSelectionProps) => JSX.Element;
