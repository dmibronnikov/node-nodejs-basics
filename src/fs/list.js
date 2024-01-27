import { promises as fs } from 'fs'

const list = async () => {
    try {
        let filenames = await fs.readdir('src/fs/files', { recursive: true });
        for (const filename of filenames) {
            console.log(filename);
        }
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();