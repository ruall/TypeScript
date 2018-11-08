let ling:string = "三门";
let age:number = 18;
let stature:number = 175.12;
let num:number = NaN;
console.log('姓名：'+ling+'   年龄：'+age+'   身高：'+stature+'   '+num);

//enum 枚举类型   人：男 女   季节：春 夏 秋 冬
enum PERSON{man='男',woman='女'}
console.log(PERSON.man+'    '+PERSON.woman);

//any 万能类型
let an:any = 10;
an = true;
an = 'a三';
console.log(an);


//函数 方法
function  getAges(ages:number):string {
    return '今年'+ages+'岁'
}
let abc:number = 20;
let result:string = getAges(abc);
console.log(result);


//有可选参数的函数
function searchXX(a:number,b?:string):string {
    let xx:string = '';
    xx = 'a:'+a;
    if(b!=undefined){
        xx += 'b:'+b;
    }
    return xx;
}
let a1:number = 1;
let b1:string = '三季度';
console.log(searchXX(a1,b1));


//不确定参数的函数
function xy(...xxy:string[]):string {
    let yyx:string = '不确定参数函数：';
    // for (let yyz of xxy){  //输出结果 三等奖，是那就看到你
    //     yyx+=yyz;
    // }
    for(let yyz in xxy){  //输出结果 0，1
        yyx+=yyz+',';
    }
    return yyx;
}
console.log(xy('三等奖','是那就看到你'));



//函数表达式
let add = function (n1:number,n2:number):number {
    return n1+n2;
};
console.log(add(1,2));

//ES6箭头函数
let add1 = (n3:number,n4:number):number =>{
    return n3+n4;
};
console.log(add1(1,2));


//全局变量  局部变量
let ab1:string = '安东尼';
function aabc():void {
    console.log(ab1); //输出 undefined  变量提升
    let ab1:string = '安东尼奥'; //函数内局部变量
    console.log(ab1); //输出 安东尼奥
}
aabc();
console.log(ab1); //全局变量 安东尼



function bbac():void {
    let anb:string = '三顿阿就是你接';
    {
        let ana:string = '萨博多久啊还不大'; //编辑时会变成var 变成函数内的全局变量
        console.log(ana); // 输出 萨博多久啊还不大
    }
    console.log(anb); //输出 三顿阿就是你接
    console.log(ana); //输出 萨博多久啊还不大
}
bbac();