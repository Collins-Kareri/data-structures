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
    peek(index) {
        if (index !== 0) {
            return this.stack[index - 1];
        } else {
            return this.stack[index];
        }
    };
};

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.pop();
console.log(s);
console.log(s.peek(6));