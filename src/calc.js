function Calculator() {
    function add(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    return {
        add: add,
        subtract: subtract
    }
}
