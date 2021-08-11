const gen1 = "AAAAAAAA"
const gen2 = "BBBBBBBB"

let result = new Map();

const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

const t0 = +new Date()

while (result.size < 256) {
    const r = shuffle([...Array.from(gen1), ...Array.from(gen2)]).join('').slice(0, 8)
    result.set(r, r)
}

const t1 = +new Date()

console.log(result.size, t1 - t0)
