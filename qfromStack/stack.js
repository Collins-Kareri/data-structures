class Stack {
    constructor() {
        this.stack = [];
    };
    push(record) {
        return this.stack.push(record);
    };
    pop() {
        return this.stack.pop();
    };
    peek() {
        return `${this.data[this.data.length - 1]}`;
    };
};

module.exports = Stack;