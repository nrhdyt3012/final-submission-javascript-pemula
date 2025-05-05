function fibonacci(n) {
    const sequence = [];
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            sequence.push(i);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
