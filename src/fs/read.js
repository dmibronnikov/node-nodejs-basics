import { promises as fs } from 'fs'

const read = async () => {
    try {
        const data = await fs.readFile('src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(data);
    } catch {
        throw 'FS operation failed';
    }
};

await read();