"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法
 * */
var Person = /** @class */ (function () {
    function Person(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Person.prototype.interest = function () {
        console.log('read bbb');
    };
    return Person;
}());
var ps = new Person('小明', 18, 'coding');
ps.interest();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visualize = '宅';
        return _this;
    }
    Child.job = function () {
        console.log('敲代码');
    };
    /**
     * 重写：在子类中重写父类的方法
     * */
    Child.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('阿里巴巴');
    };
    return Child;
}(Person));
var child = new Child('小黄', 18, '程序猿');
console.log(child.visualize);
child.interest();
Child.job();
