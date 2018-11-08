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
let arr1:number[] = new Array();
let arr2:number[] = new Array(1,2,3,4); //声明数字类型的数组
let arr3:Array<string> = new Array('张三','李四','王五'); //声明字符串类型的数组
let arr4:Array<boolean> = new Array(true,false); //声明布尔类型的数组


//元祖
let a:[string,number];
a=['萨克那句',123];
// a=[123,'萨克那句'];  错误写法



/**
 * 引用类型  字符串
 * */
let b:string = '圣安东尼奥';
let c:String = new String('圣安东尼奥adajnj');
console.log(b,b.length+"-----"+c,c.length);



/**
 * 引用类型  data 时间
 * */

//不带任何参数
let d:Date = new Date();
console.log(d);

//传一个整数
let d1:Date = new Date(1000); //1970-01-01T00:00:01.000Z
let d2:Date = new Date(2000); //1970-01-01T00:00:02.000Z
console.log(d1,d2);

//传递一个字符串
let d3:Date = new Date('2018/09/07 05:29:00'); //2018-09-06T21:29:00.000Z
let d4:Date = new Date('2018-09-07 05:29:00'); //2018-09-06T21:29:00.000Z
let d6:Date = new Date('2018-09-07T05:29:00'); //2018-09-06T21:29:00.000Z
console.log(d3,d4,d6);




/**
 * 引用类型  RegExp 正则
 * */

//构造函数声明法
let r1:RegExp = new RegExp('abdhHagL');
let r2:RegExp = new RegExp('abdhHagL','gi');
console.log(r1,r2);

//字面量声明
let r3:RegExp = /abdhHagL/;
let r4:RegExp = /abdhHagL/gi;
console.log(r3,r4);

let r5:RegExp = /jspang/i;
let s1:string = 'jspang.com';
let r6:boolean = r5.test(s1);
console.log(r6);

let r7:RegExp = /jspang/i;
let s2:string = 'jspang.com';
console.log(r7.exec(s2)); // [ 'jspang', index: 0, input: 'jspang.com', groups: undefined ]