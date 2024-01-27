import { open } from 'node:fs/promises'

const create = async () => {
    let fileHandle = null;
    try {
        fileHandle = await open('src/fs/files/fresh.txt', 'wx');
        await fileHandle.write('I am fresh and young');
    } catch {
        throw new Error('FS operation failed');
    } finally {
        await fileHandle?.close();
    }
};

await create();