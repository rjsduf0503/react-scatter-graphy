interface Func<T extends any[], R> {
    (...args: T): R;
}
export declare function debounce<T extends any[], R>(func: Func<T, R>, delay: number): Func<T, void>;
export {};
