const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Soluzione map
let incremented = numbers.map((num) => num + 1);
console.log(incremented);

// Soluzione forEach
incremented = [];
numbers.forEach((num) => {
	incremented.push(num + 1);
});
console.log(incremented);
