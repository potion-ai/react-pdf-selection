export declare const getWindow: (elm: any) => typeof window;
export declare const getPageFromElement: (target: HTMLElement) => {
    node: HTMLElement;
    number: number;
} | null;
export declare const getPageFromRange: (range: Range) => {
    node: HTMLElement;
    number: number;
} | null | undefined;
