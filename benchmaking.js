const {
    algoSet,
    algoBruteForce,
    algoRecursive,
    algoRecursiveNoSet
} = require('./algos');



const benchmark = (fn) => {
    const startTime = performance.now();
    fn();
    const finishTime = performance.now();
    return finishTime - startTime;
};

const PrepareTest = () => {
    const numbers = 100000000;
    var list = Array.from({length: numbers}, () => Math.floor(Math.random() * 2000) - 1000);
    list = [...new Set(list)]
    const goal = Math.floor(Math.random() * 100);

    const runBenchmark = (name, fn) => console.log(`${name}: ${benchmark(fn)} ms`);
    
    runBenchmark('algoSet', () => algoSet(list, goal));
    runBenchmark('algoBruteForce', () => algoBruteForce(list, goal));
    runBenchmark('algoRecursive', () => algoRecursive(list, goal));
    runBenchmark('algoRecursiveNoSet', () => algoRecursiveNoSet(list, goal));
}

PrepareTest();


