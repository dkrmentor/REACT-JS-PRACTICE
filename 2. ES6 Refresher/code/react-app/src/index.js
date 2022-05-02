//var -> function

// function sayHello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }

//   //if you use var i -> it is also accessible outside block (within function)
//   console.log(i)
// }

// #############################################
//let -> block -> reassignable
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }

//   //if you use let i -> it is not also accessible outside block (within block)
//   console.log(i)
// }
// sayHello()

// #############################################
//const -> block (cant be reassigned)
// const a= 2;
// //const cannot reassigned
// a=4;
// console.log(a)




////////////////////////////////////////
// objects

// const person = {
//   name: "dhara",
//   //walk has function => (object inside function)=>method
//   walk : function(){  },
//   //another way to create method is 
//   talk(){}
// }
// //call way 1
// person.talk();
// //call way 2
// //we use this when we dont know what property user want to acesss
// const targetMember = 'name'
// person[targetMember.value]= 'dhara'



////////////////////////////////////////
// this
// const person ={
//   name:"dhara",
//   walk(){
//     console.log(this)
//   }
// }
// //call as a method -> this return a refernce to that object
// person.walk()


// const walk = person.walk;
// //call as a stand alone  -> this return window object
// //if strict mode enabled it will return undefined
// walk();



 
////////////////////////////////////////
// binding this
//  const person ={
//    name:"dhara",
//    walk(){
//      console.log(this);
//    }
//  }
//  person.walk()
//  //function in js are objects they have prop and method
//  //with the bind method we can set the value of this (permenently)
//  const walk = person.walk.bind(person)
//  walk()






////////////////////////////////////////
// arrow
//normal function
// const square = function (number){
//   return number * number
// }
// console.log(square(1))
// //arrow functions
// const square2 =(number)=>{
//   return number * number
// }
// console.log(square2(2))
// const square3 = number =>{
//   return number * number
// }
// console.log(square3(3))
// const square4 = number =>  number * number
// console.log(square4(4))

// #############################################

// const jobs = [
//   {id:1,isActive:true},
//   {id:2,isActive:true},
//   {id:3,isActive:false}
// ]

// // const activeJobs = jobs.filter(function(jobs){return jobs.isActive;})
// // console.log(activeJobs)

// const activeJobs2 = jobs.filter(jobs=> jobs.isActive)
// console.log(activeJobs2)


////////////////////////////////////////
// arrow with this
// const person = {
//   talk(){
//     //callback function is a standalone function thats why we got window object
//     //in callback strict mode dont override
//     setTimeout(function() {
//       console.log('this without arrow',this)
//           }, 0);
//   },
//   talk2(){
//     var self = this
//     setTimeout(function() {
//       console.log('this without arrow using self',self)
//           }, 0);
//   },
//   talk3(){
//     setTimeout(()=> {
//       console.log('this with arrow',this)
//           }, 0);
//   }
// };
// person.talk()
// person.talk2()
// person.talk3()


////////////////////////////////////////
// array map with callback
// const colors  = ['red','yellow','green']
// const items = colors.map(function (color) {
//   return "<li>" + color + "</li>"
// })
// console.log(items)
// //array map with arrow
// const items2 = colors.map((color)=>`<li>${color}</li>`)
// console.log(items2)



////////////////////////////////////////
// object destructuring
// const address ={
//   street:'dha',
//   city:'karachi',
//   country:'pakistan',
// }

// const street = address.street;
// const city = address.city;
// const country = address.country;
 
//destructuring
// const {street,city,country} = address

//destructuring aND ASSifning new const
// const {street:st} = address
// console.log(st)



////////////////////////////////////////
// spread operator
// const first = [1,2,3];
// const second = [4,5,6];
// const combined = first.concat(second)
// console.log('concat '+combined)
// const combined2 = [...first,'dhara',...second]
// console.log('spread '+combined2)
// const clone = [...first]
// console.log('clone of first '+ clone )

// const firstObj = {name:"dhara"}
// const secondObj = {id:25}
// const comObj = {...firstObj,...secondObj, location:'pakistan'}
// console.log(comObj)
// const cloning = {...firstObj }
// console.log(cloning)



////////////////////////////////////////
// if we have multiple persons and we later found any bug we have to solve the issue everywhere
// const person ={
//   name:'dhara',
//   walk(){
//     console.log('walk')
//   }
// }
//solution
// Classes
// class Person{
//   constructor(name){
//     //this refer to current obj
//     this.name = name;
//   }
//   walk(){
//     console.log('walk')
//   }
// }
// // New  is used to create an instance of an object that has a constructor function.
// // On calling the constructor function with 'new' operator,
// // A new empty object is created
// const person = new Person("dhara");
// console.log(person)
// console.log(person.walk)


////////////////////////////////////////
//inheritance
// class Person{
//   constructor(name){
//     this.name= name;
//   }
//   walk(){
//     console.log("walk")
//   }
// }
// class Teacher extends Person{
//   constructor(name,degree){
//     super(name)
//     this.degree= degree;
//   }
 
//   teach(){
//     console.log('teach')
//   }
// }
// const teacher = new Teacher('dhara','bscs')
// console.log(teacher) 


////////////////////////////////////////
//module (by default private)
// import { Teacher } from "./teacher"
// const teacher = new Teacher('dhara','bscs')
// console.log(teacher) 
// teacher.teach()


////////////////////////////////////////
//named and default export


//default export import ... from "".
//named export import { }.... from  ""








//summary

// in this chapter we learn that 
// var is function base
// let is block base and re assignable
// const is also block base but not reassignable

// objects can be called in 2 ways
// dot method 
// and bracket method which is used when we dont know what propery user want to access

// if we call this as method it will return reference of that object
// if we call this as a stand alone it will return window object 
// by using binding we can set the value of (this) = permently 

// arrow function
// =()=>{}

// call back function are stand alone function

// if we use arrow function in the object method ; we can have instance of (this) in the set time out  otherwise we wil get window object 


// array map is use to get all element easily in an order

// object destructure is used to easily get all property of object easilt

// spread operator help in cloning and easily concatentation

// if we have multiple person objects and we got mistake we have to go and change everywhere thats why we use classes

// inheritance is used to use to call function from parents and reuse them