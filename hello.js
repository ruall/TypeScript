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
function getName(name) {
    return '我叫';
}
