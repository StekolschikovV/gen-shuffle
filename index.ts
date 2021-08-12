let t0
let t1
let t2
let t3
const v1 = () => {
    t0 =  Date.now()
    const gen1 = "AAAAAAAA";
    const gen2 = "BBBBBDDD";

    let result = new Map();

    const shuffle = (arr) => {
        return arr.sort(() => Math.round(Math.random() * 100) - 50);
    }

    while (result.size < 1111156) {
        const r = shuffle([...Array.from(gen1), ...Array.from(gen2)]).join('').slice(0, 8)
        result.set(r, r)
        console.log(result.size)
    }

    t1 = Date.now()
    return result
}

const v2 = () => {
    t2 =  Date.now()

    const gen1 = "AAAAAAAA";
    const gen2 = "BBGHZOBB";

    const zip = (arr, ...arrs) =>
        arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

    const product = (...arrays) => {
        return [...arrays].reduce((a, b) =>
            a.map(x => b.map(y => x.concat(y)))
                .reduce((a, b) => a.concat(b), []), [[]]);
    }

    const zipped = zip(Array.from(gen1), Array.from(gen2));
    const cartesianProductRes = product(...zipped)
    let result = new Map();
    cartesianProductRes.map( e => {
        const key = e.join('')
        result.set(key, key)
    } )
    t3 =  Date.now()

    return result
}

console.log(v1().size, t1 - t0)
// console.log(v2().size, t3  - t2)
// console.log(v1())


