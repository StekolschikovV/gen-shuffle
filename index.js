var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var gen1 = "AAAAAAAA";
var gen2 = "BBBBBBBB";
var result = new Map();
var shuffle = function (arr) {
    return arr.sort(function () { return Math.round(Math.random() * 100) - 50; });
};
var t0 = +new Date();
while (result.size < 256) {
    var r = shuffle(__spreadArray(__spreadArray([], Array.from(gen1)), Array.from(gen2))).join('').slice(0, 8);
    result.set(r, r);
}
var t1 = +new Date();
console.log(result.size, t1 - t0);
