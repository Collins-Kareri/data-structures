class Queue {
    constructor() {
        this.data = [];
    };
    add(record) {
        return this.data.unshift(record);
    };
    record() {
        return this.data.pop();
    };
    peek() {
        return `${this.data[this.data.length - 1]} this is the last element`;
    };
};

module.exports = Queue;

const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('Hello');
queueTwo.add('There');