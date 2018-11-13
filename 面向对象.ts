/**
 * 类是对象具体事物的一个抽象，对象是类的具体表现
 * */
class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('hello ts')
    }
}
let Xj:XiaoJieJie = new XiaoJieJie('typescript',18);
console.log(Xj);
Xj.say();

