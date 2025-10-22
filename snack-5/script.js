const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Soluzione filter
let even = nums.filter((num) => num % 2 === 0);
console.log(even);

// Soluzione forEach
even = [];
nums.forEach((num) => {
	if (num % 2 === 0) {
		even.push(num);
	}
});
console.log(even);

// Soluzione for loop
even = [];
for (let i = 0; i < nums.length; i++) {
	const num = nums[i];
	if (num % 2 === 0) {
		even.push(num);
	}
}
console.log(even);
