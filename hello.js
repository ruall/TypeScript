"use strict";
var ling = "三门";
var age = 18;
var stature = 175.12;
var num = NaN;
console.log('姓名：' + ling + '   年龄：' + age + '   身高：' + stature + '   ' + num);
//enum 枚举类型   人：男 女   季节：春 夏 秋 冬
var PERSON;
(function (PERSON) {
    PERSON["man"] = "\u7537";
    PERSON["woman"] = "\u5973";
})(PERSON || (PERSON = {}));
console.log(PERSON.man + '    ' + PERSON.woman);
//any 万能类型
var an = 10;
an = true;
an = 'a三';
console.log(an);
//函数 方法
function getAges(ages) {
    return '今年' + ages + '岁';
}
var abc = 20;
var result = getAges(abc);
console.log(result);
//有可选参数的函数
function searchXX(a, b) {
    var xx = '';
    xx = 'a:' + a;
    if (b != undefined) {
        xx += 'b:' + b;
    }
    return xx;
}
var a1 = 1;
var b1 = '三季度';
console.log(searchXX(a1, b1));
//不确定参数的函数
function xy() {
    var xxy = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xxy[_i] = arguments[_i];
    }
    var yyx = '不确定参数函数：';
    // for (let yyz of xxy){  //输出结果 三等奖，是那就看到你
    //     yyx+=yyz;
    // }
    for (var yyz in xxy) { //输出结果 0，1
        yyx += yyz + ',';
    }
    return yyx;
}
console.log(xy('三等奖', '是那就看到你'));
//函数表达式
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 2));
//ES6箭头函数
var add1 = function (n3, n4) {
    return n3 + n4;
};
console.log(add1(1, 2));
//全局变量  局部变量
var ab1 = '安东尼';
function aabc() {
    console.log(ab1); //输出 undefined  变量提升
    var ab1 = '安东尼奥'; //函数内局部变量
    console.log(ab1); //输出 安东尼奥
}
aabc();
console.log(ab1); //全局变量 安东尼
function bbac() {
    var anb = '三顿阿就是你接';
    {
        var ana = '萨博多久啊还不大'; //编辑时会变成var 变成函数内的全局变量
        console.log(ana); // 输出 萨博多久啊还不大
    }
    console.log(anb); //输出 三顿阿就是你接
    console.log(ana); //输出 萨博多久啊还不大
}
bbac();
