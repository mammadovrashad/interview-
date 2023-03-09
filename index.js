// ==============================================

// Task 1

const string =
  "Lorem ipsum is a placeholder text commonly used to lorem demonstrate the visual form of a document or a typeface without relying on meaningful lorem content.";

// Capitalize the first letter of the given sentence and replace all lorem words with “graphic”

// const str = string.toUpperCase();
// const newString=str.replaceAll('LOREM','grapich').toLowerCase();
// const result=newString.charAt(0).toUpperCase()+newString.slice(1);
// console.log(result);

// ==============================================

// Task 2

const array = [
  "Black Sea",
  "Caribbean Sea",
  "North Sea",
  "Baltic Sea",
  "Red Sea",
];

// Delete the word 'Sea' from each item of the given array

// const result=arr.map(v=>v.split(' ')[0]);
// console.log(result);

// ==============================================

// Task 11

const fruits = [
  "Apple",
  "Banana",
  "Strawberry",
  "Banana",
  "Mango",
  "Cherry",
  "Banana",
  "Mango",
];

// Delete duplicate values from given array

// var unique = fruits.filter((value, index, array) => array.indexOf(value) === index);
// console.log(unique);

// ==============================================

// Task 3

const arr = [
  { obj: {}, arr1: [], str: "", nmb: 77 },
  { obj: {}, arr1: [{ str: "" }], str: "", nmb: 77 },
  { obj: {}, arr1: [{ str: "" }], str: "", nmb: 77 },
  { obj: {}, arr1: [], str: "", nmb: 77 },
];

// Finding objects whose property is array and whose length is greater than 0 from the given array

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if(element.arr1.length>0){
//         console.log(element.arr1);
//     };
// }

// ==============================================

// Task 5

let d1 = "2015-03-25";
let d2 = "2015-06-25";
let d3 = "2015-03-15";

// const compareDates = (d1, d2, d3) => {
//     let date1 = new Date(d1).getTime();
//     let date2 = new Date(d2).getTime();
//     let date3=  new Date(d3).getTime()

//     if (date1 > date2 && date1> date3) {
//         console.log(`boyuk olan ${d1}`);
//     }
//     else if(date2>date1 && date2>date3){
//         console.log(`boyuk olan ${d2}`);
//     }
//     else{
//         console.log(`boyuk olan ${d3}`);
//     }
//   };

// compareDates(d1,d2,d3)

// Compare the given dates and find the largest one

// ==============================================

// Task 6

let d = "2023-03-03";

// Add 5 days to the given date with "moment" and show the result

// function addDays(date, days) {
//     date.setDate(date.getDate() + days);
//     return date;
//   }

//   const date = new Date(d);
//   const newDate = addDays(date, 5);

//   console.log(newDate);

// ==============================================

// Task 8

const arr2 = ["5 1", "98", "1 2 3", "0"];

// const result=arr2.map(v=>Number(v.replaceAll(' ','')))
// const sum=result.reduce((s,v)=>s+v);
// console.log(sum);

// Convert the given array elements to the correct number type and calculate sum with reduce method

// Note: Note the spaces between the values. Spaces should be deleted. Example tip: "1 2 3" => "123"

// ==============================================

// Task 9

const str = "can be used to perform case-insensitive more global searches";

// const result=str.charAt(0).toUpperCase()+str.slice(1);
// console.log(result);

// Capitalize the first letter of the words in the given sentence

// ==============================================

// Task 10

const array3 = [
  { person: { age: "29", salary: "300" } },
  { person: { age: "19", salary: "400" } },
  { person: { age: "9", salary: "500" } },
  { person: { age: "18", salary: "600" } },
];

// let sumSalary=0;
// for (let i = 0; i < array3.length; i++) {
//     if(array3[i].person.age>18){
//         sumSalary+=Number(array3[i].person.salary)

//     }

// }
// console.log(sumSalary);

// Calculate the total salary in the given array for those whose age-i is greater than 18

// ==============================================

// Task 12

// Finding the country object where countryCode is 994

const demoData = {
  data: [
    {
      period: "Month",
      start_date: "2012-06",
      end_date: "2012-07",
      attributes: {},
      measures: {
        Visits: 1000000,
      },
      SubRows: [
        {
          country: "Albania",
          measures: {
            Visits: 50,
            countryCode: "67",
          },
          SubRows: null,
        },
        {
          country: "Germany",
          measures: {
            Visits: 300,
            countryCode: "154",
          },
          SubRows: null,
        },
        {
          country: "Azerbaijan",
          measures: {
            Visits: 100,
            countryCode: "994",
          },
          SubRows: null,
        },
      ],
    },
  ],
};
// const subrows=demoData.data[0].SubRows;
// subrows.forEach(element => {
//     if(element.measures.countryCode==='994'){
//         console.log(element.country);
//     }
    
// });

//   ==============================================


// Task 4

const array4 = [
    { name: "miki", surname: "Jonatan", "age": "21" },
    { name: "miki", surname: "Jonatan", "age": "21" },
    { name: "miki", surname: "Jonatan", "age": "21" },
    ]
    
    // Convert the age property to Number type in the given array. Then the names and surnames should be written with upper case
    
      
    //   const newArr = array4.map(({ name, surname, age }) => ({
    //     name: name.toUpperCase(),
    //     surname: surname.toUpperCase(),
    //     age: Number(age),
    //   }));
      
    //   console.log(newArr);
      
    // ==============================================