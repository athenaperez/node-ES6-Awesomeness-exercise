console.log("cheer works!")

var cheer = [
'Give me a J',
'Give me an O',
'Give me an H',
'Give me an N',
'Give me a D',
'Give me an O',
'Give me an E',
'What does that spell?',
'JOHN DOE!']

for (let elem of cheer) {
	console.log(elem);
}



// Cheer
const first = 'Joe'; //const
const second = 'Shep'; //const

//object literal shorthand
const myName = {first, second} //const

const nodeCheer = ({first, second}) => {
	let name = `${first} ${second}`.toUpperCase(); //string template literals, let
	[...first, ...second].forEach( (letter) => { //spread operator and fat arrow function
		let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' //'inclusdes()'. Surprise!
		console.log(`Gimmie ${conj} ${letter.toUpperCase()}!`); //string template literals again
	});
	console.log(`What's the spell?\n${name}!`);
};
nodeCheer(myName);
