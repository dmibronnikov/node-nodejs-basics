import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    let reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    await pipeline(
        process.stdin,
        reverseTransform,
        process.stdout
    );
};

await transform();