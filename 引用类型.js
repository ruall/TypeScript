"use strict";
/**
 * 引用类型   数组
 * */
//字面量赋值法
/*
let arr1:number[] = []; //声明数字类型的数组
let arr2:number[] = [1,2,3,4]; //声明数字类型的数组
let arr3:Array<string> = ['张三','李四','王五']; //声明字符串类型的数组
let arr4:Array<boolean> = [true,false]; //声明布尔类型的数组
*/
//构造函数赋值法
var arr1 = new Array();
var arr2 = new Array(1, 2, 3, 4); //声明数字类型的数组
var arr3 = new Array('张三', '李四', '王五'); //声明字符串类型的数组
var arr4 = new Array(true, false); //声明布尔类型的数组
//元祖
var a;
a = ['萨克那句', 123];
// a=[123,'萨克那句'];  错误写法
/**
 * 引用类型  字符串
 * */
var b = '圣安东尼奥';
var c = new String('圣安东尼奥adajnj');
console.log(b, b.length + "-----" + c, c.length);
/**
 * 引用类型  data 时间
 * */
//不带任何参数
var d = new Date();
console.log(d);
//传一个整数
var d1 = new Date(1000); //1970-01-01T00:00:01.000Z
var d2 = new Date(2000); //1970-01-01T00:00:02.000Z
console.log(d1, d2);
//传递一个字符串
var d3 = new Date('2018/09/07 05:29:00'); //2018-09-06T21:29:00.000Z
var d4 = new Date('2018-09-07 05:29:00'); //2018-09-06T21:29:00.000Z
var d6 = new Date('2018-09-07T05:29:00'); //2018-09-06T21:29:00.000Z
console.log(d3, d4, d6);
/**
 * 引用类型  RegExp 正则
 * */
//构造函数声明法
var r1 = new RegExp('abdhHagL');
var r2 = new RegExp('abdhHagL', 'gi');
console.log(r1, r2);
//字面量声明
var r3 = /abdhHagL/;
var r4 = /abdhHagL/gi;
console.log(r3, r4);
var r5 = /jspang/i;
var s1 = 'jspang.com';
var r6 = r5.test(s1);
console.log(r6);
var r7 = /jspang/i;
var s2 = 'jspang.com';
console.log(r7.exec(s2)); // [ 'jspang', index: 0, input: 'jspang.com', groups: undefined ]
