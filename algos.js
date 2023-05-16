

const algoBruteForce = (list, goal) => {
    const pairs = [];
    for (let i = 0; i < list.length; i++) {
        for(let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === goal) {
                pairs.push([list[i], list[j]]);
            }
        }
    }
    return pairs;
}

const algoSorted = (list, goal) => {
    const pairs = [];
    const listed = list.sort((a, b) => a - b);
    for (let i = 0; i < listed.length; i++) {
        for(let j = i + 1; j < listed.length; j++) {
            if (listed[i] + listed[j] === goal) {
                pairs.push([listed[i], listed[j]]);
            }
        }
    }
    return pairs;
}

const algoSet = (list, goal) => {
    const pairs = [];
    let listed = [...new Set(list)];
    for (let i = 0; i < listed.length; i++) {
        for(let j = i + 1; j < listed.length; j++) {
            if (listed[i] + listed[j] === goal) {
                pairs.push([listed[i], listed[j]]);
                listed.splice(j, 1);
            }
        }
    }
    return pairs;
}



const algoRecursive = (list, goal) => {
    const pairs = [];
    let listed = [...new Set(list)]
    .sort((a, b) => a - b);

    const findPairs = (i, start, end) => {
        const dis = end  - start;
        if (dis <= 0) {
            return;
        }
        const mid = Math.floor(dis / 2) + start;
        if (dis === 1) {
            if (listed[i] + listed[mid] === goal) {
                pairs.push([listed[i], listed[end]]);
                listed.splice(end, 1);
            }
            return;
        }
        if (listed[i] + listed[mid] === goal) {
            pairs.push([listed[i], listed[mid]]);
            listed.splice(mid, 1);
            return;
        }
        if (listed[i] + listed[mid] < goal) {
            findPairs(i, mid, end);
        } else {
            findPairs(i, start, mid);
        }
    }

    for (let i = 0; i < listed.length; i++) {
        findPairs(i, i + 1, listed.length - 1)
    }
    return pairs;
}

const algoRecursiveNoSet = (list, goal) => {
    const pairs = [];
    let listed = list.sort((a, b) => a - b);

    const findPairs = (i, start, end) => {
        const dis = end  - start;
        if (dis <= 0) {
            return;
        }
        const mid = Math.floor(dis / 2) + start;
        if (dis === 1) {
            if (listed[i] + listed[mid] === goal) {
                pairs.push([listed[i], listed[end]]);
                listed.splice(end, 1);
            }
            return;
        }
        if (listed[i] + listed[mid] === goal) {
            pairs.push([listed[i], listed[mid]]);
            listed.splice(mid, 1);
            return;
        }
        if (listed[i] + listed[mid] < goal) {
            findPairs(i, mid, end);
        } else {
            findPairs(i, start, mid);
        }
    }

    for (let i = 0; i < listed.length; i++) {
        findPairs(i, i + 1, listed.length - 1)
    }
    return pairs;
}

const algoContains = (list, goal) => {
    const set = new Set(list);
    const pairs = [];
    let listed = [...new Set(list)];
    for (let i = 0; i < listed.length; i++) {
        if (set.has(goal - listed[i])) {
            pairs.push([listed[i], goal - listed[i]]);
            set.delete(goal - listed[i]);
            set.delete(listed[i]);
        }
    }
    return pairs;
}

const algoContainsNoSet = (list, goal) => {
    const set = new Set(list);
    const pairs = [];
    let listed = list;
    for (let i = 0; i < listed.length; i++) {
        if (set.has(goal - listed[i])) {
            pairs.push([listed[i], goal - listed[i]]);
            set.delete(goal - listed[i]);
            set.delete(listed[i]);
        }
    }
    return pairs;
}


module.exports = {
    algoBruteForce,
    algoSet,
    algoRecursive,
    algoRecursiveNoSet,
    algoContains,
    algoContainsNoSet
}