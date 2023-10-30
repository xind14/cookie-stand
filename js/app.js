

// Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
// Store the results for each location in a separate array… perhaps as a property of the object representing that location.
// Display the values of each array as unordered lists in the browser.
// Calculating the sum of these hourly totals; your output for each location should look like this:


// Make sure to make each location is its own JavaScript object.

// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	23	65	6.3 
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

// Hours Open: 6am - 7pm
// Contact Info: 123-456-7890
// Location: 2901 3rd Ave #300, Seattle, WA 98121
// Hours Open: 6am - 7pm
// Contact Info: 222-222-2222
// Location: 1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634
// Hours Open: 6am - 7pm
// Contact Info: 333-333-3333
// Location: 1 Sheikh Mohammed bin Rashid Blvd - Dubai
// Hours Open: 6am - 7pm
// Contact Info: 444-444-4444
// Location: Champ de MediaStream, 5 Avenue Anatole France, 75007
// Hours Open: 6am - 7pm
// Contact Info: 555-555-5555
// Location: Cache. Gral. Borgoño cuadra 8, Miraflores 15074


'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', 'Total']

// seattle object 
const seattleLocation = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  general: {
     open:'Hours Open: 6am - 7pm',
     contact:'Contact Info: 123-456-7890',
     address:'Location: 2901 3rd Ave #300, Seattle, WA 98121'
      }
 
}

// tokyo  object 
const tokyoLocation = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  general: {
    open:'Hours Open: 6am - 7pm',
    contact:'Contact Info: 222-222-2222',
    address:'Location: 1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634',
     }
}


// dubai object 
const dubaiLocation = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  general: {
    open:'Hours Open: 6am - 7pm',
    contact:'Contact Info: 333-333-3333',
    address:'Location: 1 Sheikh Mohammed bin Rashid Blvd - Dubai',
     }
}

// paris object 
const parisLocation = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  general: {
    open:'Hours Open: 6am - 7pm',
    contact:'Contact Info: 444-444-4444',
    address:'Champ de MediaStream, 5 Avenue Anatole France, 75007',
     }
}

// lima object 
const limaLocation = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  general: {
    open:'Hours Open: 6am - 7pm',
    contact:'Contact Info: 555-555-5555',
    address:'Location: Cache. Gral. Borgoño cuadra 8, Miraflores 15074',
     }
}

return Math.floor( Math.random() * (max - min + 1) + min );
locationcontent
const peopleSection = document.getElementById("root");
const johnsWeight = document.createElement("li")
johnsWeight.textContent = `Weight: ${john.weight}`;
johnsStats.appendChild(johnsWeight);

// const geno = {
//   name: 'Geno',
//   age: 1,
//   breed: 'Pit',
//   fur: {
//       face: "spotted",
//       tail: "white",
//       body: "white",
//       ears: "brown"
//   },
//   isGoodWithOtherDogs: true,
//   isGoodWithStrangers: false,
//   interests: [ "digging", "counter surfing", "chewing" ],
//   speak: function() {
//       console.log("WOOF!");
//   },
//   // this is a "setter" which changes a value
//   haveBirthday: function() {
//       this.age++;
//       if(this.age >= 10) {
//           this.fur.face = "grey";
//       }
//       // Save to the database that we have a new age ...
//   },
// };

// // Display some properties
// console.log("name", geno.name);
// console.log("age", geno.age);
// // console.log(geno.interests);
// console.log("interest", geno.interests[2]);

// // Invoke a method
// console.log("facial fur", geno.fur.face);
// geno.speak();
// geno.haveBirthday();
// geno.haveBirthday();
// geno.haveBirthday();
// console.log("facial fur", geno.fur.face);
// geno.haveBirthday();
// geno.haveBirthday();
// geno.haveBirthday();
// console.log("facial fur", geno.fur.face);
// geno.haveBirthday();
// geno.haveBirthday();
// geno.haveBirthday();
// geno.haveBirthday();
// geno.haveBirthday();
// console.log("age", geno.age);
// console.log("facial fur", geno.fur.face);


// // You should never directly change property values
// // You can ... but it's not good practice
// geno.name = "Fidget";
// console.log(geno.name);

// geno.age++;
// console.log(geno.age);

// // This only works within the instance. It "is" the instance
// // Out here, it's got no meaning.
// console.log(this.age);

// const john = {
//   name: "John",
//   age: 55,
//   weight: getRandomWeight(),
//   hair: false,
//   colors: ["black", "grey"]
// };

// const cathy = {
//   name: "Cathy",
//   age: 54,
//   weight: getRandomWeight(),
//   hair: true,
//   colors: ["yellow", "purple"]
// };

// function getRandomWeight() {
//   // Look Up Math.random on MDN
//   const max = 200;
//   const min = 100;
//   return Math.floor( Math.random() * (max - min + 1) + min );
// }


// // we can reference global variables from another script file
// // if they are loaded first ...
// console.log(geno);
// console.log(" --------------------- ");

// // const's find the section with the ID of "people"
// const peopleSection = document.getElementById("root");

// // // Add a child node (div or a container called "johnsArea")
// const johnsArea = document.createElement("div");
// johnsArea.textContent = john.name;
// // Append this (put it inside) to the #root element
// peopleSection.appendChild(johnsArea);

// // Create a new "ul" inside of John's Area
// const johnsStats = document.createElement('ul');
// johnsArea.appendChild(johnsStats);

// // In that UL, add 2 bulconst points, from the John Object
// const johnsAge = document.createElement("li")
// johnsAge.textContent = `Age: ${john.age}`;
// johnsStats.appendChild(johnsAge);

// const johnsWeight = document.createElement("li")
// johnsWeight.textContent = `Weight: ${john.weight}`;
// johnsStats.appendChild(johnsWeight);


// // // Add a child node
// const cathysArea = document.createElement("div");
// cathysArea.textContent = cathy.name;
// peopleSection.appendChild(cathysArea);

// // Create a new "ul" inside of Cathy's Area
// const cathysStats = document.createElement('ul');
// cathysArea.appendChild(cathysStats);

// // In that UL, add 2 bulconst points, from the John Object
// const cathysAge = document.createElement("li")
// cathysAge.textContent = `Age: ${cathy.age}`;
// cathysStats.appendChild(cathysAge);

// const cathysWeight = document.createElement("li")
// cathysWeight.textContent = `Weight: ${cathy.weight}`;
// cathysStats.appendChild(cathysWeight);
