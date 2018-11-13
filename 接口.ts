/**
 * 接口信息
 * */
interface Husband {
    sex:string;
    interest:string;
    buy?:boolean; //可选参数
}
let myhusband:Husband = {sex:'男',interest:'敲代码',buy:true};
console.log(myhusband);


interface SearchMan {
    (source:string,subString:string):boolean
}
let mySearch:SearchMan;
mySearch = function (source:string,subString:string):boolean {
    let flag = source.search(subString);
    return (flag!= -1);
};
console.log(mySearch('高，富，帅','高'));