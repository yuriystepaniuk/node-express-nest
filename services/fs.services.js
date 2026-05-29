import fs from 'fs/promises'   
import path from 'path'

const filePath = path.join(process.cwd(), 'db', 'users.json');

export const read = async () => {
    try {
        const json = await fs.readFile(filePath, 'utf-8');
        return json ? JSON.parse(json) : [] ;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

export const write = async () => {
    try {
        await fs.writeFile(filePath, JSON.stringify(users))
    } catch (error) {
        console.error('Error writing file:', error);
    }   
}



