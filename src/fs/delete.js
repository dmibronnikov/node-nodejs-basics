import { promises as fs } from 'fs'

const remove = async () => {
    try {
        await fs.rm('src/fs/files/fileToRemove.txt');
    } catch {
        throw 'FS operation failed';
    }
};

await remove();