import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const path = `${import.meta.dirname}/files/script.js`;
    const child = fork(path, args, { stdio: 'pipe' });

    process.stdin.pipe(child.stdin);

    child.stdout.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

spawnChildProcess(['argument1', 'argument2', 42]);
