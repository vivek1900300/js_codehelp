// Object
// console.log("hello");

// create object

// let rectangle = {

//     length: 1,
//     breadth:5,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// Factory Function

// function createRectangle( len, bre){

//     let rectangle = {

//         length: len,
//         breadth: bre,

//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1 = createRectangle(5,4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

// camelcase -->numberOfStudents

// Constructor function ->pascal notation -> first letter of everyword is capital ->NumberOfStudent
//  Constructor function -> prop/methods -> initialize/define

// function Rectangle(){
//       this.length = 1;
//       this.breadth = 2;
//       this.draw = function()  {
//         console.log('drawing');
//    }
// }

// object creation using constructor function

// let rectangleObject = new Rectangle();


// Dynamic Nature of Object

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);


// delete rectangleObject.color;
// console.log(rectangleObject);

// Constructor Property

// Functions are OBJECTs

// types in JS

// let a = 11;
// let b = a;
//  a++;

//  console.log(a);
//  console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a);
// console.log(b);

// note: 
// primitive are copied by  their value
// reference are copied by  their address/reference


// let a = 10;

//  function inc(a) {
//     a++;

//  }
//  inc(a);
//  console.log(a);


//  let b = {value:10};

//  function inc(b){
//     b.value++;
//  }
//  inc(b);
//  console.log(b.value);

// Iterating through Objects

// for-in loop

// let rectangle = {
//     length : 4,
//     breadth : 8
// };

// for(let key  in rectangle){
    // keys are reflected through key variable
    // value are reflected throgh rectangle[key]
//     // console.log(key , rectangle[key]);
// }


// for-of loop(array/map)
 
// for(let key of rectangle){
//     console.log(key);
// }

// Object Cloning

// 01

// let src = {
//     a: 20,
//     b: 40,
//     c: 50
// };

// let dest ={}
// for(let key in src){
//     dest[key] = src[key];

// }
// console.log(dest);

// src.a++;
// console.log(dest);

//  object cloning 02

// let src ={
//     a: 20,
//     b: 30,
//     c: 60
// };
// let dest = Object.assign({}, src)
//  console.log(dest);

//  src.a++;
//  console.log(dest);

// Object cloning 03

let src ={
    a:10,
    b:20,
    c:30
};
 let dest = {...src};

 console.log(dest);
 
 src.a++;
 console.log(dest);


// Garbage collection
//  we have no control over garbage collector  ---> when to start/stop  --> run in background





