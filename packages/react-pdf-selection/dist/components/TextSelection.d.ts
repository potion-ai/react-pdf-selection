/// <reference types="react" />
import { TextSelectionWithCSSProperties } from "../types";
export declare type TextSelectionProps<D extends object = {}> = {
    textSelection: TextSelectionWithCSSProperties<D>;
};
export declare const TextSelection: ({ textSelection }: TextSelectionProps) => JSX.Element;
