/**
 * 访问修饰符
 * public 共有修饰符，可以在类内和类外使用public修饰的属性和方法，默认修饰符
 * protected 受保护的修饰符，可以在本类和子类中使用protected修饰的属性和行为
 * private 私有修饰符，只能在类内使用private修饰的属性和方法
 * readonly 只读属性，无法修改
 * */
class XiJieJie{
    public sex:string;
    protected name:string;
    private age:number;
    constructor(sex:string,name:string,age:number){
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    public say(){
        console.log('hello')
    }
    protected sayno(){
        console.log('no');
    }
}
let XiJ:XiJieJie = new XiJieJie('女','abc',18);
console.log(XiJ.sex);
// console.log(XiJ.name); 无法访问
// console.log(XiJ.age); 无法访问
XiJ.say();
// XiJ.sayno(); 无法访问

class Man {
    public readonly sex:string = '男';
}
let man:Man = new Man();
// man.sex = '女'; 无法赋值，只读属性