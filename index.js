/*
1) Write a function named calculateDifference that takes two arguments and returns 
the difference between the first and second argument.*/

function calculateDifference(a,b){
    let result = a-b;
    return result;
}
console.log(calculateDifference(20,9))

/*2) Write a function named isOdd that takes one argument and returns true if the 
    number is odd, and false if it is not.*/
function isOdd(a){
    if(a % 2 != 0)
       {
        return true;
       }
    else
        {
            return false
        }
}
console.log(isOdd(5));

/*3) Write a function named findMin that takes an array of numbers and returns 
the smallest number in the array.*/
function findMin(ar){
    let minm=ar[0];
    for(let i=1; i<=ar.length; i++){
        if(ar[i]<minm){
            minm=ar[i];
        }
    }
    return minm;
}

console.log(findMin([2,4,21,1,3,0,3]));
/*4) Write a function named filterEvenNumbers that takes an array of numbers and returns 
a new array containing only the even numbers.
function filterEvenNumbers(ar){
    let even = [];
    for(let i=0; i<ar.length; i++){
        if(ar[i]%2 == 0){
            even.push(ar[i]);
        }
    }
    return even;  
}
console.log(filterEvenNumbers([2,4,21,1,3,0,3]));*/
//pratice forEach
function filterEvenNumbers(ar){
    let evenNum = []
    ar.forEach(num => {
       if(num%2 == 0){
        evenNum.push(num)
       }   
    });
    return evenNum;
}
console.log(filterEvenNumbers([2,4,21,1,3,0,3]));
/*5) Write a function named sortArrayDescending that takes an array of numbers
 and returns a new array sorted in descending order.*/
 function sortArrayDescending(ar){

   let arLngth = ar.length;
   for(let i= 0; i < arLngth-1; i++){
    for(let j=0; j < arLngth-1-i; j++){
        if(ar[j] < ar[j+1]){
            let temp = ar[j];
            ar[j] = ar[j+1];
            ar[j+1] = temp;
        }
    }
   }
   return ar;
 }
 console.log(sortArrayDescending([2,4,21,1,3,0,3]));

 /*6) Write a function named lowercaseFirstLetter that takes a string
  and returns the same string with the first letter lowercased.*/
  function lowercaseFirstLetter(s){
   let res = ""
    for(let i=0; i<s.length; i++){
        if(i==0){
            res += s[i].toLowerCase();
        }
        else{
            res += s[i];
        }
    }
    return res;

  }
console.log(  lowercaseFirstLetter("NAfiSa"))
/*
function lowerCaseFirstLetter(s){
    return s.charAt(1).toLowerCase()+ s.slice(2)
}
console.log(lowerCaseFirstLetter("Hello")); 
*/
 /* 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the 
  string. It should filter vowels from the string.*/
  function countVowels(s){
    let str =""
    for(let i=0; i<s.length; i++){
        if(s[i]=='a'||s[i]=='e'|| s[i]=='i'|| s[i]=='o'||s[i]=='u'||s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'|| s[i]=='U'){
            str += s[i]
        }
    }
    return str;

  }
  console.log(  countVowels("NAfiSa"))
/*8) Write a function named findAverage that takes an array of numbers and returns the average of all elements. */
function findAverage(ar){
    let sum = 0;
    let res;
    for (let i=0; i<ar.length; i++){
        
        sum = sum+ar[i];
      res = sum / ar.length;
    }
    return res;

}
console.log(findAverage([10,10,10]))