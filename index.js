
const {
    algoContainsNoSet,
} = require('./algos');


const [,,list, goal] = process.argv;

const parsedList = list.split(',').map(Number);
const parsedGoal = Number(goal);


algoContainsNoSet(parsedList, parsedGoal).forEach(([i,j]) => console.log(`${i},${j}`));