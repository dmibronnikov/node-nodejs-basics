const parseArgs = () => {
    let result = '';
    for (let i = 2; i < process.argv.length; i += 2) {
        let argName = process.argv[i].slice(2);
        result += `${argName} is ${process.argv[i + 1]}, `;
    }

    console.log(result.slice(0, -2));
};

parseArgs();