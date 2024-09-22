// let a=10;
// document.write(a, "<br>");
// let b=5;
// document.write(b,"<br>");
// let sum =a+b;
// document.write(sum, "<br>");
// let difference = a-b;
// document.write(difference, "<br>");
// let product = a*b;
// document.write(product, "<br>");
// let quotient=a/b;
// document.write(quotient, "<br>");
// let remainder = a%b;
// document.write(remainder, "<br>");
// let isEqual= (a==b);
// document.write(isEqual, "<br>");
// let isNotEqual=(a != b);
// document.write(isNotEqual, "<br>");
// let isGreater=(a>b);
// document.write(isGreater, "<br>");
// let logicalAnd=(a>b && b<10);
// document.write(logicalAnd, "<br>");

// let fname="John";
// document.write("Hello", fname, "<br>");


// let age=30;
// document.write('Age',age,"<br>")

// let isStudent = false;
// document.write(`student - ${isStudent? "yes":"No"},<br>`)


// let age=30;
// document.write('age', age,"<br>")

// let age=30;
// let emptyValue=null;
// let unintialized;


// let age=16;
// if(age>17){
//     document.write("Eligible for vote");
// }
// else{
//     document.write("Not eligible for vote");

// let age=16;
// document.write(age>17? "Eligible": "Not eligible");

// let number=prompt("Enter number");

// if(number>0){
//     console.log("The number is positive");

// }
// else if( number <0){
//     console.log("The number is negtive");

// }
// else{
//     console.log("the number is zero");

// }

// confirm("Enter again") && goto again;

// //-----------------------------------
// let fruit=prompt("Enter fruit name");
// switch(fruit) {
//     case "Apple":
//         console.log("You choose a apple");
        
// }

// switch(fruit){
//     case: 
// }

//simple function 
// oh
// function morning(){
//     document.getElementById("demo").innerHTML="Good morning"
//     document.getElementById("mode").style.background="Yellow"
//     document.getElementById("mode").style.color="black"
// }
// function afternoon(){
//     document.getElementById("demo").innerHTML="Good afternoon"
//     document.getElementById("mode").style.background="orange"
//     document.getElementById("mode").style.color="orange"
// }
// function evening(){
//     document.getElementById("demo").innerHTML="Good evening"
//     document.getElementById("mode").style.background="lightyellow"
//     document.getElementById("mode").style.color="lightyellow"
// }
// function night(){
//     document.getElementById("demo").innerHTML="Good night"
//     document.getElementById("mode").style.background="Black"
//     document.getElementById("mode").style.color="Black"
// }
// greeting();                  //function calling


//function expression
// let a=function(){
//     document.write("Have a nice day")
// }
// a()

//arrow function
// let msg=()=>{
//     document.write("Happy Birthday")
// }
// msg()

//iife
// (function(){
//     document.write("This is IIFE function")
// }()
// );


// function oddEven(num){
//     if(num%2==0){
//         return `${num} is even`
//     }
//     else{
//         return `${num} is odd`
//     }
// }
// console.log(oddEven(prompt("enter number")))

// let a=function(num){
//     console.log(num%2==0? "Even":"Odd");
// }
// a(10)

// let greet=()=>{
//     return "Welcome"
// }

// console.log(greet)




//arrow function
// let greeting=(name)=>`Welcome,${name}`

// console.log(greeting("Ravi"))


//iife function
// (function sum(a,b){
//     console.log(`sum of ${a} and ${b} is ${a+b}`)
// })(10,20)


//Generator function
// function *myGen(){
//     yield 1
//     yield 2
// }
// const g=myGen();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())

// function *myGen(){
//     for(let i=0;i<=10;i++){
//         yield i;
//     }
// }

// const g= myGen()
// for(let i=1; i<=10; i++){
//     console.log(g.next().value);
// }

// console.log("Hello" && "welcome");
// console.log("" && "welcome");
// console.log("hello" && "");
// console.log(12 && 13);
// console.log(null && 13);

// let a = 10
// console.log(a>10 && "a is greater than 10");


// var x=30;
// var y=20;
// if(x>=y && y<=20){
//     document.write(true);
// }

// let a=10

// let show=a>5? "a is greater than 5":"a is not greater than 5"

// console.log(show)

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// for(let i=0;i<arr.length;i++){
// if(i%2==0){
//     console.log("Divisible by 2", i);
// }
// }


// let n=5
// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         console.log("x");
//     }
//     console.log("\n");
// }

// let arr=[10,55,68,3,49,35]

//for in loop

// for(let i in obj){
//     console.log(i, obj[i])
// }

// var str="hello everyone today we learn string_method";
// console.log(str.length)

// var str2=123;
// var b= str2.toString()
// console.log(typeof(b))
// console.log(typeof(str2))
// console.log(a)


// //indexOf & lastIndexOf
// var str3="hello everyone today we learn string_method everyone learn";
// console.log(str3.indexOf('o'))
// console.log(str3.indexOf('learn'))
// console.log(str3.lastIndexOf('e'))

// console.log(str.slice(10))
// console.log(str.slice(4,8))
// console.log(str.slice(-5))
// console.log(str.slice(5,-7))
// console.log(str.slice(-6,3))

// console.log(str.substring(-6))
// console.log(str.substring(9))
// console.log(str.substring(15,12))
// console.log(str.substring(-6,-4))
// console.log(str.substring(-6,3))
// console.log(str.substring(6,-3))


// console.log(str.search("today"))
// console.log(str.search("Today"))
// console.log(str.search("T"))
// console.log(str.search("d"))

// console.log(str.match("d"))
// console.log(str.match("/d/g"))
// console.log(str.match("/e/g"))


// for(let i=1;i<=4;i++)
// {
//     for(let j=1;j<=4;j++)
//     {
//         document.write("*");
//     }
//    document.write("<br>"); 
// }

// for(let i=1;i<=4;i++)
//     {
//         for(let j=1;j<=i;j++)
//         {
//             document.write("*");
//         }
//        document.write("<br>"); 
//     }
    

    // for(let i=1;i<=5;i++)
    //     {
    //         for(let j=1;j<=6-i;j++)
    //         {
    //             document.write("*");
    //         }
    //        document.write("<br>"); 
    //     }




    // for(let i=1;i<=5;i++)
    //     {
    //         for(let j=1;j<=6-i;j++)
    //         {
    //             document.write("&nbsp;&nbsp;");
    //         }
    //         for(let k=1; k<=2*i-1;k++)
    //         {
    //        document.write("*"); 
    //     }
    // document.write("<br>");
    // }
    
// let arr=[10,20,30,40,55,67,23,45]
// let newArr=arr.map(i => i%2==0? i:"")
// document.write(newArr)

// let arr=[10,20,30,40]

// let double=i=>i*2
// let newArr = arr.forEach(double)

// document.

// ls=[10,20,30,40,55,60]
// document.write(ls.filter(i=>i>30))

// document.write(ls.filter(i=> i%2==0))

// ls=[10,20,30,40,30]
// document.write(ls.find(i=>i==305))                         // ctrl+d

// ls.find((i, id)=>i==30 && document.write(``)

// cart = ["apple","banana","cherry"]
// document.write(cart,"<br>")

// function remove (item,cart){
//     document.write(cart.filter(i=> i!=item))
// }
// remove(prompt("Enter element to remove"),cart)
// document.write("<br>",cart)

// const nums=[10,20,30]
function allSum(nums){
    return nums.reduce((acc, num)=> acc+num,0)

}
let nums=[10,20,30,100]
document.write(allSum(nums))