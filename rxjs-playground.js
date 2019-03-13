"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var $s0 = new rxjs_1.Subject();
var $s1 = new rxjs_1.Subject();
rxjs_1.concat($s0, $s1)
    .pipe(operators_1.switchMap(function (value) {
    console.log(value);
    return rxjs_1.of(true);
}))
    .subscribe(function (value) { return console.log("last value " + value); });
rxjs_1.merge($s0, $s1)
    .pipe(operators_1.switchMap(function (value) {
    console.log(value);
    return rxjs_1.of(true);
}))
    .subscribe(function (value) { return console.log("last value " + value); });
$s0.next({ filter: '10' });
$s1.next([1, 2, 3]);
