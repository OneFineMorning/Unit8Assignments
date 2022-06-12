//Unit 8.1 Assignment

//forEach Exercises 

//doubelValues ================================
function doubleValues(arr){
let newArr = [];

arr.forEach(function(val){
newArr.push(val *2);
});

return newArr;
}

//onlyEvenValues ================================
function onlyEvenValues (arr) {
let newArr = [];

arr.forEach(function(val){
if(val % 2 === 0){
newArr.push(val);    
}

});

return newArr;
}

//showFirstAndLast ================================
function showFirstAndLast(arr) {
let newArr = [];

arr.forEach(function(val){
newArr.push(val[0]+val[val.length-1]);
});

return newArr;
}

//addKeyAndValue ================================
function addKeyaAndValue (arr, key, value){

arr.forEach(function(val){
val[key] = value;
});

return arr;
}

//vowelCount ================================
function vowelCount(str){
let newObj = {};
let vowels = 'aeiou';

let splitString = str.split('');
let count = 0;

splitString.forEach(function(char){
    let lowerCase = char.toLowerCase();
    if (vowels.indexOf(char) === -1){
    console.log('not found');
    } else {
        if(newObj[lowerCase]){
        newObj[lowerCase]++;
        } else {
         newObj[lowerCase]=1;
        }
    }
       
});

return newObj;
}

//.map Exercises
//doubleValuesWithMap ================================
function doubleValuesWithMap (arr){
let newArr = [];

arr.map(function(val){
newArr.push(val* 2);
})

return newArr;
}

//valTimesIndex ================================
function valTimesIndex(arr){
let newArr = [];

arr.map(function(val, i){
newArr.push(val*i);
})

return newArr;
}

//extractKey ================================
function extractKey (arr, key){
let newArr = [];

arr.map(function(obj){
newArr.push(obj[key]);
});

return newArr;
}

//extractFullName ================================
function extractFullName (arr){
let newArr = [];

arr.map(function (obj){
newArr.push(obj['first'] + ' ' + obj['last']);
});

return newArr;
}

//filter Exercises
//filterByValue ================================
function filterByValue (arr, key){

return arr.filter(function(obj){
    return obj[key] !== undefined;
    });
}

//find ================================
function find (arr, search){

return arr.filter(function(val){
    return val === search;
}) [0];
 
}

//findInObj ================================
function findInObj (arr, key, val){

return arr.filter(function (obj){
    return obj[key] === val;
});

}

//removeVowels ================================
function removeVowels(string) {
const vowels = "aeiou";

let stringLowerCase = string.toLowerCase();

arr = stringLowerCase.split("");

return arr.filter (function(val){
    return vowels.indexOf(val) < 0;
}).join("");

}

//doubleOddNumbers ================================
function doubleOddNumbers (arr){
return arr 

.filter(function(val) {
    return val % 2 != 0; 
}) 
.map (function(val){
    return val * 2;
})

}