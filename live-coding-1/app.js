function bigWords(str, arr) {
    return arr.filter(word => word.length > str.length);
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
console.log(bigWords('bocina', myArray)); // Output: ['insecto', 'bootcamp', 'escritorio']

function printArray(arr) {
    const ul = document.createElement('ul');

    arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

const filteredArray = bigWords('bocina', myArray);
printArray(filteredArray);
