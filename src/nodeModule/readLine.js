import { createInterface } from "node:readline/promises";

const start = async () => {
    const readLineInterface = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const name = await readLineInterface.question('What is your name? ');
    console.log(`Hello, ${name}!`);

    readLineInterface.close();
}

start()