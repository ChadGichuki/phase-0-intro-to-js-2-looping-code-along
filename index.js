// Code your solutions in this file

const messages = [];

function writeCards(array, event) {
    for (let i=0; i<array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(int) {
    let i = int;
    while(i>=0) {
        console.log(i);
        i--;
    }
}