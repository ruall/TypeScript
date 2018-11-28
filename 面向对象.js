"use strict";
/**
 * 类是对象具体事物的一个抽象，对象是类的具体表现
 * */
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('hello ts');
    };
    return XiaoJieJie;
}());
var Xj = new XiaoJieJie('typescript', 18);
console.log(Xj);
Xj.say();
