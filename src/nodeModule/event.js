import event from 'node:events';

const emmiter = new event.EventEmitter();

emmiter.on('first', (name) => {
    console.log(`Hello, ${name}!`);
});

emmiter.on('second', (name) => {
    console.log(`Goodbye, ${name}!`);
});

emmiter.emit('first', 'John');
emmiter.emit('first', 'John');
emmiter.emit('first', 'John');


emmiter.emit('second', 'John');