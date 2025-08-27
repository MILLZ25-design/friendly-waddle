/*const PI =3.142
function circleSolution(radius){
  return PI*radius*radius;
}
console.log(circleSolution(5))
console.log("The area of a Circle is: " + circleSolution(5)+ "meters squared");

let a = 10
let b = 3
let c = a % b

function theModulusOfTwoNums(a,b){
  let result = a % b;
  return result ;
  // let result = theModulusOfTwoNum(10,3)
}
  console.log("The value of the question given is " + theModulusOfTwoNums(10 , 3))

  let theModulusOfTwoNum = (a, b) => 10 % 3;
   console.log("Arrow function result for modulus is " + theModulusOfTwoNum(10 , 3))  


   let modulus = (a,b) => 30 + 3;
   console.log("The real Millz is me and am O[P " + modulus(30 + 3))



   let text = "MILLZISKING";
document.getElementById("demo").innerHTML = text.length;
console.log(text())*/

/*let x = 100 + " Apple" ;
console.log(x);*/





function theVowels(word){
  let vowels=[];
  for (let i =0;i< word.length;i++){
  let letter = word[i].toLowerCase();
   if("aeiou".includes(letter)){
     vowels.push(letter);
   }
  }
  return vowels;
}

console.log(theVowels("APPLE"));