/**
 * Convenience function for marking a function as deprecated.
 *
 * Will emit a warning the first time that function is called.
 *
 * @param fn the function to mark as deprecated.
 * @param key a unique key identifying the function.
 * @param message the warning message.
 *
 * @return a wrapped function
 */
declare function deprecate<Args extends unknown[]>(fn: (...args: Args) => void, key: string, message: string): (...args: Args) => void;
export = deprecate;
