/**
 * 继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法
 * */
class Person {
    public name:string;
    public age:number;
    public skill:string;
    constructor(name:string,age:number,skill:string){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public interest(){
        console.log('read bbb');
    }
}
let ps:Person = new Person('小明',18,'coding');
ps.interest();

class Child extends Person{
    public visualize:string = '宅';
    static job(){
        console.log('敲代码');
    }
    /**
     * 重写：在子类中重写父类的方法
     * */
    public interest(){
        super.interest();
        console.log('阿里巴巴');
    }
}
let child:Child = new Child('小黄',18,'程序猿');
console.log(child.visualize);
child.interest();
Child.job();