/*
 * In This Project we learn these things:
 * 1. How to read user datas and put them in a vatiable or constant.
 * 2. <readline> and <process> library.
 * 3. <await> keyword.
 * 4. how to use switch-case condition.
 * 5. show a returned data from a function and use <``> for this work.
 * 6. learning about math operators in JS and TS.
 */

// Importing library for using
import * as readline from 'node:readline/promises';
import {stdin, stdout} from 'node:process';

// clearing screen
console.clear();

// show some details
console.log("Hello World, I'm Ilia Fotohi!!!\n");
console.log("This is a Calcualtor that wrote with JS(ESM)\n");
console.log("Enjoy and Please E-mail me with : mohammadrezafotohijob@gamil.com\n");
console.log("=============================================================================\n");

// making interface for readline library
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

// recieving Datas from User for calculation
// we using [ await ] keyword for waiting until entering data from user
const num_1 = await rl.question("Please Enter First Number: ");
const num_2 = await rl.question("Please Enter Second Number: ");
const operator = await rl.question("Please Enter Operator [+ , - , * , /, **]: ");

// converting num_1 and num_2 to float Numbers
const FirstNumber = parseFloat(num_1);
const SecondNumber = parseFloat(num_2);

// an ArrowFunction for making calculation process that made with inner switch-case
const Calculation = (firstnumber, secondnumber, operator) => {
    switch(operator){
    case "+":
	return firstnumber + secondnumber;
	break;
    case "-":
	return firstnumber - secondnumber;
	break;
    case "*":
	return firstnumber * secondnumber;
	break;
    case "/":
	return firstnumber / secondnumber;
	break;
    case "**":
	return firstnumber ** secondnumber;
	break;
    default:
	console.error("Please Enter Correct Operator!!!");
    }
}

// showing result
console.log(`\nThe Result of Calculation is : ${Calculation(FirstNumber, SecondNumber, operator)}`);

// closing readline for saving or managing library
rl.close();


// This Codes made with javascript(ESM), node.js, npm
// This is just a project for learning-by-doing javascript(ESM)
// Please Correct me and tell me what ca i do for bettering my JS and TS experinces.







