"use strict";
var myhusband = { sex: '男', interest: '敲代码', buy: true };
console.log(myhusband);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高，富，帅', '高'));
