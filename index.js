
const {
    algoRecursiveNoSet,
    algoBruteForce
} = require('./algos');


const [,,list, goal] = process.argv;

const parsedList = list.split(',').map(Number);
const parsedGoal = Number(goal);


algoRecursiveNoSet(parsedList, parsedGoal).forEach(([i,j]) => console.log(`${i},${j}`));