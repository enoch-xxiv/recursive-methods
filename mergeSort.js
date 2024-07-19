function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

function splitArray(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const mid = Math.floor(arr.length / 2);
        const [left, right] = [
            splitArray(arr.slice(0, mid)),
            splitArray(arr.slice(mid)),
        ];
        return merge(left, right);
    }
}
