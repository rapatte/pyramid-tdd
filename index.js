module.exports = pyramid = (n) => {
    const mid = Math.floor((n * 2 - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < 2 * n - 1; col++) {
            if (mid - row <= col && mid + row >= col) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level);
    }
}