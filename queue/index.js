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
};

let queue1 = new Queue();
console.log(queue1.add(4));
console.log(queue1.add(5));
console.log(queue1.add(4));