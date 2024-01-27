import { cp } from 'node:fs/promises'

const copy = async () => {
    try {
        await cp('src/fs/files', 'src/fs/files_copy', { errorOnExist: true, force: false, recursive: true });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
