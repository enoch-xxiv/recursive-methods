let steps = 0;

function collatz(n) {
    if (n == 1) {
        return steps;
    } else if (n % 2 == 0) {
        steps++;
        return collatz(n / 2);
    } else {
        steps++;
        return collatz(3 * n + 1);
    }
}

console.log(collatz(1));
