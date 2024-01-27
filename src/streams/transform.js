import { Transform, Writable } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    let reverseTransform = new Transform({
        transform(chunk, encoding, next) {
            next(null, chunk.toString().split('').reverse().join(''));
        }
    });

    let echo = new Writable({
        write(chunk, encoding, next) {
            process.stdout.write(`${chunk}\n`);
            next();
        }
    })

    await pipeline(
        process.stdin,
        reverseTransform,
        echo
    );
};

await transform();