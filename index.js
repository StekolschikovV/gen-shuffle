var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var t0;
var t1;
var t2;
var t3;
var v1 = function () {
    t0 = Date.now();
    var gen1 = "AAAAAAAA";
    var gen2 = "BBBBBDDD";
    var result = new Map();
    var shuffle = function (arr) {
        return arr.sort(function () { return Math.round(Math.random() * 100) - 50; });
    };
    while (result.size < 1111156) {
        var r = shuffle(__spreadArray(__spreadArray([], Array.from(gen1)), Array.from(gen2))).join('').slice(0, 8);
        result.set(r, r);
        console.log(result.size);
    }
    t1 = Date.now();
    return result;
};
var v2 = function () {
    t2 = Date.now();
    var gen1 = "AAAAAAAA";
    var gen2 = "BBGHZOBB";
    var zip = function (arr) {
        var arrs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arrs[_i - 1] = arguments[_i];
        }
        return arr.map(function (val, i) { return arrs.reduce(function (a, arr) { return __spreadArray(__spreadArray([], a), [arr[i]]); }, [val]); });
    };
    var product = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return __spreadArray([], arrays).reduce(function (a, b) {
            return a.map(function (x) { return b.map(function (y) { return x.concat(y); }); })
                .reduce(function (a, b) { return a.concat(b); }, []);
        }, [[]]);
    };
    var zipped = zip(Array.from(gen1), Array.from(gen2));
    var cartesianProductRes = product.apply(void 0, zipped);
    var result = new Map();
    cartesianProductRes.map(function (e) {
        var key = e.join('');
        result.set(key, key);
    });
    t3 = Date.now();
    return result;
};
console.log(v1().size, t1 - t0);
// console.log(v2().size, t3  - t2)
// console.log(v1())
