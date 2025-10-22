const students = [
	{
		id: 1,
		name: "Marco Lanci",
		age: 32,
		class: "3C",
	},
	{
		id: 2,
		name: "Mario Banfi",
		age: 34,
		class: "4A",
	},
	{
		id: 3,
		name: "Luigi Banzi",
		age: 33,
		class: "5B",
	},
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// Soluzione find
let student = students.find((student) => student.id === 2);
console.log(student);

// Soluzione forEach
student = undefined;
students.forEach((current) => {
	if (current.id === 2) {
		student = current;
	}
});
console.log(student);

// Soluzione for loop
student = undefined;
for (let i = 0; i < students.length; i++) {
	const current = students[i];
	if (current.id === 2) {
		student = current;
		break;
	}
}
console.log(student);
