"use strict";
exports.__esModule = true;
var democheck_1 = require("./democheck");
var cd = new democheck_1.democheck();
cd.setname();
cd.setuser();
console.log(cd.getname());
console.log(cd.getUser());
var bmw = {
    color: 5,
    engine: "red",
    camera: true
};
var validate = function (car) {
    console.log(car.engine);
};
validate(bmw);
