"use strict";
exports.__esModule = true;
var democheck = /** @class */ (function () {
    function democheck() {
    }
    democheck.prototype.getUser = function () {
        return this.user;
    };
    democheck.prototype.getname = function () {
        return this.name;
    };
    democheck.prototype.setuser = function () {
        this.user = "sandeep";
    };
    democheck.prototype.setname = function () {
        this.name = "neela";
    };
    return democheck;
}());
exports.democheck = democheck;
