import { pipeline } from 'stream/promises';
import { Writable } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    let echo = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });
    await pipeline(
        createReadStream('src/hash/files/fileToCalculateHashFor.txt'),
        createHash('sha256').setEncoding('hex'),
        echo
    );
};

await calculateHash();