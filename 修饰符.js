"use strict";
/**
 * 访问修饰符
 * public 共有修饰符，可以在类内和类外使用public修饰的属性和方法，默认修饰符
 * protected 受保护的修饰符，可以在本类和子类中使用protected修饰的属性和行为
 * private 私有修饰符，只能在类内使用private修饰的属性和方法
 * readonly 只读属性，无法修改
 * */
var XiJieJie = /** @class */ (function () {
    function XiJieJie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiJieJie.prototype.say = function () {
        console.log('hello');
    };
    XiJieJie.prototype.sayno = function () {
        console.log('no');
    };
    return XiJieJie;
}());
var XiJ = new XiJieJie('女', 'abc', 18);
console.log(XiJ.sex);
// console.log(XiJ.name); 无法访问
// console.log(XiJ.age); 无法访问
XiJ.say();
// XiJ.sayno(); 无法访问
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex = '女'; 无法赋值，只读属性
