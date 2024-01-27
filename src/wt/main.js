import os from 'os';
import { Worker, workerData } from 'worker_threads';

const performCalculations = async () => {
    const maxThreadsCount = os.cpus().length;

    let results = new Array(maxThreadsCount);
    let runningWorkers = 0;

    for (let i = 0, n = 10; i < maxThreadsCount; i++, n++) {
        let worker = new Worker('./src/wt/worker.js', { workerData: { n } });
        runningWorkers++;

        worker.on('message', (message) => {
            results[i] = { status: 'resolved', data: message };
        });

        worker.on('error', (error) => {
            results[i] = { status: 'error', data: null };
        });

        worker.on('exit', () => {
            runningWorkers--;
            if (runningWorkers <= 0) {
                console.log(results);
            }
        });
    }
};

await performCalculations();