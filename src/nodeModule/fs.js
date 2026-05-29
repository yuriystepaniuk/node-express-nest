
import afs from 'fs/promises';
import fs, { write } from 'fs';
import path from 'path';
import readline from 'readline';


const createDirectory = async () => {
    await fs.mkdir(path.join('storage', 'asd'));
}

// createDirectory()

const addTextToFile = async () => {
    const filePath = path.join('storage', 'files', 'myFile.txt');
    await afs.writeFile(filePath, 'Hello, World!');
} 

// addTextToFile()

const appendAndRead = async () => {
    // await fs.mkdir(path.join('storage', 'files'), { recursive: true })
    const filePath = path.join('storage', 'files', 'myFile.txt');
    // await afs.writeFile(filePath, 'Hello1\n')
    await afs.appendFile(filePath, 'Hello2\n');
    const data = await afs.readFile(filePath, 'utf-8');
    console.log(data);
}

// appendAndRead()

const renameFile = async () => {
    const oldPath = path.join('storage', 'files', 'myFile.txt');
    const newPath = path.join('storage', 'files', 'myRenamedFile.txt');
    try {
        await afs.stat(newPath);
        console.log('File already renamed, skipping');
    } catch {
        await fs.rename(oldPath, newPath);
    }
}

// renameFile

const start = async () => {
    // await fs.mkdir(path.join('storage', 'files'), { recursive: true })
    const filePath = path.join('storage', 'asd', 'addddd.txt');
    // await fs.writeFile(filePath, 'Hello1\n')
    // await fs.appendFile(filePath, 'Hello2\n')
    // const arrayBufferLikeBuffer = await fs.readFile(filePath, { encoding: 'utf-8' });
    // console.log(arrayBufferLikeBuffer);
    // await fs.rename(filePath, path.join(process.cwd(), 'storage', 'asd', 'myFile2.txt'))
    // await fs.rename(filePath, path.join(path.dirname(filePath), 'addddd.txt'))
    // await fs.copyFile(filePath, path.join(path.dirname(filePath), 'MyFile.txt'))
    // await fs.rm(path.join(process.cwd(), 'storage'), { recursive: true })
}

//  start()


const readByLine = async () => {
    const filePath = path.join('storage', 'asd', 'addddd.txt');
    const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
    const rl = readline.createInterface({ input: fileStream });
    try {
        for await (const line of rl) {
            await afs.appendFile('res.txt', `${line}------------`);
        }
    } finally {
        rl.close();
    }
}

// readByLine()

const readStream = fs.createReadStream('kos.png');
const writeStream = fs.createWriteStream('copy.png');
readStream.pipe(writeStream);
