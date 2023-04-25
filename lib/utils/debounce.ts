interface Func<T extends any[], R> {
  (...args: T): R;
}

export function debounce<T extends any[], R>(func: Func<T, R>, delay: number): Func<T, void> {
  let timeoutId: NodeJS.Timeout;

  return function debounceWrapper(...args: T): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
