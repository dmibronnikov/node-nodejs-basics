import { promises as fs, existsSync } from 'fs'

const rename = async () => {
    let source = 'src/fs/files/wrongFilename.txt'
    let destination = 'src/fs/files/properFilename.md'

    if (existsSync(destination)) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.rename(source, destination);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();