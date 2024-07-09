// math Object

// string

// let lastName = 'Vivek';

// let firstName = new String ('hju');


// Template Literal

// Date and Time

// Arrays ---Object/Reference type
//  collection of items

// Adding new elements

// insertion
// let numbers = [1,4,5,7];

// numbers.push(9); //end

// numbers.unshift(6); //Start

// numbers.splice(1,0,'a','f'); //middle

// console.log(numbers);

// Searching

// console.log(numbers);
// console.log(numbers.indexOf(1));

// we want to if a number exist in an array



// let courses = [
//     {no:1, naam:'vivek'},
//     {no:2, naam:'kumar'}
// ];
// // console.log(courses);

// let course = courses.find(function(course) {
//         return course.naam === 'vivek';})

        // use arrow function

//         let course = courses.find(course => course.naam === 'vivek');


// console.log(course);


// removing elements


// let numbers = [1,2,3,4,5,6,7];

// numbers.pop();  //end

// numbers.shift(); //start

// numbers.splice(2,1); //middle

// console.log(numbers);

// Emptying an array:

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];
// numbers.length = 0;
// numbers.splice(0,numbers.length)

// console.log(numbers);
// console.log(numbers2);
 

// combining and slicing arrays:

// let first = [1,2,3,4];
// let second = [5,6,7,8];

// let combined = first.concat(second);

// // console.log(combined);

// let sliced = combined.slice(2,6);
// console.log(sliced);

// Spread Operator

// let first = [1,2,3,4,5];

// let second = [6,7,8,9,];

// let combined = [...first, ...second];
// console.log(combined);

// // create copy

// let another = [...combined];
// console.log(another);

// joining array

// let numbers = [23,24,25,26,27];
// const joined = numbers.join(',');
// console.log(joined);

// sorting Array

// let numbers = [20,30,10,60,50];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// filtering array

// let numbers = [1,2,3,-4,-5];

//  let filtered = numbers.filter(function(value){
//         return value <= 0;

//  });
//use arrow function

// let filtered = numbers.filter(value => value >=0);
//  console.log(filtered);

//mapping array

let numbers = [4,5,6,7,8];

let items = numbers.map(function(value){
        return 'student_no' + value;

}
)
console.log(items);





