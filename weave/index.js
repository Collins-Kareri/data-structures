/*
implement the 'weave' function, weave
receives 2 queues as arguments and combines the
contents of each into a new, third queue,
The third queue should contain the *alternating* content
of the 2 queues. The function should handle
queues of different lenghts without inserting
'undefined' into the new one.
*Do not* access the array inside of any queue, only
use the 'add', 'remove' and 'peek' functions.
--- Example
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);
  const queueTwo = new Queue();
  queueTwo.add('Hello');
  queueTwo.add('There');
  const g = weave(queueOne, queueTwo);
  q.remove() //1
  q.remove() //'Hi'
  q.remove() //2
  q.remove() //'There'
*/

const Queue = require('./queue');

// function weave(sourceOne, sourceTwo) {
//     let weaved = new Queue();
//     return weaved.concat(sourceOne, sourceTwo);
// };

// console.log(weave(queueOne, queueTwo));

function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        };

        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove())
        };
    };
    return q;
};