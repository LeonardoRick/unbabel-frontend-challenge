/**
 * function to debounce execution of any function with any delay
 * @returns the debouncer that can be used as
 *          const debonuce = createDebounce(); debounce(() =>...)
 */
export function createDebounce() {
    let timeout: NodeJS.Timeout;
    return function (fnc: (...args: any) => any, delayMs = 500) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fnc();
        }, delayMs);
    };
}
