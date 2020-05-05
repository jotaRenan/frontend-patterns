export function logarIterable(label, iterable) {
    console.groupCollapsed(label);
    for (const item of iterable) {
        console.log(item);
    }
    console.groupEnd();
}
