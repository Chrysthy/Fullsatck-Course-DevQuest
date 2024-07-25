const pessoas = ['Noob', 'Leon', 'Collin']

console.log(...pessoas);


//CONCATENAR DOIS ARRAYS

let pessoas1 = ['Noob', 'Leon', 'Collin']
let pessoas2 = ['Chery', 'Mary', 'James']
let pessoas3 = ['Joker']

// pessoas1 = pessoas1.concat(pessoas2).concat(pessoas3)

pessoas1 = [...pessoas1, ...pessoas2, ...pessoas3]

console.log(pessoas1);
