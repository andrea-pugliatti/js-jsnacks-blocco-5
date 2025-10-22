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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Soluzione find
const student = students.find((current) => current.name === "Marco Lanci");
let studentClass = student.class;
// Avrei potuto fare
// let studentClass = students.find((current) => current.name === "Marco Lanci").class;

console.log(studentClass);

// Soluzione forEach
studentClass = undefined;
students.forEach((current) => {
	if (current.name === "Marco Lanci") {
		studentClass = current.class;
	}
});
console.log(studentClass);

// Soluzione for loop
studentClass = undefined;
for (let i = 0; i < students.length; i++) {
	const current = students[i];
	if (current.name === "Marco Lanci") {
		studentClass = current.class;
	}
}
console.log(studentClass);
