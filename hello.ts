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
function  getName(name:number):string {
    return '我叫'
}