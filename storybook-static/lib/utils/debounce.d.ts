interface Func<T extends unknown[], R> {
    (...args: T): R;
}
export declare function debounce<T extends unknown[], R>(func: Func<T, R>, delay: number): Func<T, void>;
export {};
