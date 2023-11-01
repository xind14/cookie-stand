
'use strict';
/*
Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

Each cookie stand location should have a separate render() method that creates and appends its row to the table
The header row and footer row are each created in their own stand-alone function
NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).
*/

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//Creating new objects using the constructor 
let Seattle = new Location('Seattle', 23, 65, 6.3, '6am - 7pm', '123-456-7890', '2901 3rd Ave #300, Seattle, WA 98121');
let Tokyo = new Location('Tokyo', 3, 24, 1.2, '6am - 7pm', '222-222-2222', '1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634');
let Dubai = new Location('Dubai', 11, 38, 3.7, '6am - 7pm', '333-333-3333', '1 Sheikh Mohammed bin Rashid Blvd - Dubai');
let Paris = new Location('Paris', 20, 38, 2.3, '6am - 7pm', '444-444-4444', 'Champ de MediaStream, 5 Avenue Anatole France, 75007');
let Lima = new Location('Lima', 2, 16, 4.6, '6am - 7pm', '555-555-5555', 'Cache. Gral. Borgoño cuadra 8, Miraflores 15074');

let storeLocation = [Seattle, Tokyo, Dubai, Paris, Lima]

//Constructor function for creating location objects
function Location (name, min, max, avg, openHours, phone, address){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.openHours = openHours;
  this.phone = phone;
  this.address = address;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.customersPerHour = [];
};
//Adding calRandomCustomers function into Location constructor
  Location.prototype.calRandomCustomers = function (){
    return Math.floor(Math.random()*(this.max - this.min +1) + this.min);
  };
  //Adding calCookiesPerHour function into Location constructor
  Location.prototype.calCookiesPerHour = function(){
    for ( let i=0; i<hours.length;i++){
      const randomCustomers = this.calRandomCustomers(); 
      const cookiesSold = Math.ceil(randomCustomers * this.avg);
    (this.cookiesPerHour.push(cookiesSold)); //(push adds to end of array)
     (this.totalCookies += cookiesSold);
  }
};
//Adding render function into Location constructor
const tableElement = document.getElementById('Table');
Location.prototype.render = function(){
  this.calCookiesPerHour();
  let locationRows = document.createElement('tr');
  tableElement.appendChild(locationRows);
  let locationName = document.createElement('td');
  locationName.textContent = this.name;
  locationRows.appendChild(locationName);
  for (let i=0; i<hours.length;i++){
    let hourlyData = document.createElement('td');
   hourlyData.textContent = this.cookiesPerHour[i];
    locationRows.appendChild(hourlyData);
  }
   let locationTotal = document.createElement('th');
locationTotal.textContent=this.totalCookies;
locationRows.appendChild(locationTotal);
};

//Header function
let renderHeader = function (){
  let headerRow = document.createElement("tr");
  tableElement.appendChild(headerRow);

  let locationHeader = document.createElement('th');
locationHeader.textContent = 'Locations';
  headerRow.appendChild(locationHeader);

  let hoursHeader = document.createElement('th');
  for (let i = 0; i < hours.length; i++) {
    hoursHeader = document.createElement('th');
    hoursHeader.textContent = hours[i];
   headerRow.appendChild(hoursHeader);
  } 
  let dailyTotalHeader = document.createElement('th');
  dailyTotalHeader.textContent = 'Daily Location Total';
  headerRow.appendChild(dailyTotalHeader);
};

//Footer function
let renderFooter = function (){
  let footerRow = document.createElement("tr");
  tableElement.appendChild(footerRow);

  let locationFooter = document.createElement('th');
locationFooter.textContent = 'Hourly Totals for All Locations';
  footerRow.appendChild(locationFooter);

  let dailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < storeLocation.length; j++) {
      hourlyTotal += storeLocation[j].cookiesPerHour[i];
      dailyTotal += storeLocation[j].cookiesPerHour[i];
    }  
    let hoursFooter = document.createElement('th');
    hoursFooter.textContent = hourlyTotal;
   footerRow.appendChild(hoursFooter);
  }
   let totalTotal = document.createElement('th');
   totalTotal.textContent = dailyTotal;
  footerRow.appendChild(totalTotal);
}


//Render All
renderHeader();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

renderFooter();

/*

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

const randomCustomers= function () {
  return Math.floor(Math.random()*(this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
 };


// seattle objects
const seattleLocation = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookie: 6.3,
  cookiesPerHour:[],
  totalCookies:0,
  openHours:'6am - 7pm',
  contactInfo:'123-456-7890',
  address:'2901 3rd Ave #300, Seattle, WA 98121',

  randomCookiesNumber: function (){
    for ( let i=0; i<hours.length;i++){
      const customersPerHour = randomCustomers.call(this); 
      const cookiesSold = Math.ceil(customersPerHour * this.avgCookie);
    (this.cookiesPerHour.push(cookiesSold)); //(push adds to end of array)
     (this.totalCookies += cookiesSold)
    }
  },
  render: function(){
    const unorderedList = document.getElementById('seattleList');
    for ( let i=0; i<hours.length-1;i++){
      const listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; 
      unorderedList.appendChild(listItem);

    } const listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookies} cookies`;
      unorderedList.appendChild(listItem);
      }
    };
    seattleLocation.randomCookiesNumber(); 
   seattleLocation.render(); 

//tokyo  object 
const tokyoLocation = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookie: 1.2,
  cookiesPerHour:[],
  totalCookies:0,
  openHours:'6am - 7pm',
  contactInfo:'222-222-2222',
  address:'1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634',

  randomCookiesNumber: function (){
    for ( let i=0; i<hours.length;i++){
      const customersPerHour = randomCustomers.call(this); 
      const cookiesSold = Math.ceil(customersPerHour * this.avgCookie);
     console.log( this.cookiesPerHour.push(cookiesSold));
      console.log(this.totalCookies += cookiesSold)
    }
  },
  render: function(){
    const unorderedList = document.getElementById('tokyoList');
    for ( let i=0; i<hours.length-1;i++){
      const listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; 
      unorderedList.appendChild(listItem);
    } const listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookies} cookies`;
      unorderedList.appendChild(listItem);
      }
    };
    tokyoLocation.randomCookiesNumber(); 
   tokyoLocation.render(); 


// dubai object 
const dubaiLocation = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookie: 3.7,
  cookiesPerHour:[],
  totalCookies:0,
  openHours:'6am - 7pm',
  contactInfo:'333-333-3333',
  address:'1 Sheikh Mohammed bin Rashid Blvd - Dubai',

  randomCookiesNumber: function (){
    for ( let i=0; i<hours.length;i++){
      const customersPerHour = randomCustomers.call(this); 
      const cookiesSold = Math.ceil(customersPerHour * this.avgCookie);
     console.log( this.cookiesPerHour.push(cookiesSold));
      console.log(this.totalCookies += cookiesSold)
    }
  },
  render: function(){
    const unorderedList = document.getElementById('dubaiList');
    for ( let i=0; i<hours.length-1;i++){
      const listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; 
      unorderedList.appendChild(listItem);
    } const listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookies} cookies`;
      unorderedList.appendChild(listItem);
      }
    };
    dubaiLocation.randomCookiesNumber(); 
   dubaiLocation.render(); 

// paris object 
const parisLocation = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookie: 2.3,
  cookiesPerHour:[],
  totalCookies:0,
  openHours:'6am - 7pm',
  contactInfo:'444-444-4444',
  address:'Champ de MediaStream, 5 Avenue Anatole France, 75007',
  randomCookiesNumber: function (){
    for ( let i=0; i<hours.length;i++){
      const customersPerHour = randomCustomers.call(this); 
      const cookiesSold = Math.ceil(customersPerHour * this.avgCookie);
     console.log( this.cookiesPerHour.push(cookiesSold));
      console.log(this.totalCookies += cookiesSold)
    }
  },
  render: function(){
    const unorderedList = document.getElementById('parisList');
    for ( let i=0; i<hours.length-1;i++){
      const listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; 
      unorderedList.appendChild(listItem);
    } const listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookies} cookies`;
      unorderedList.appendChild(listItem);
      }
    };
    parisLocation.randomCookiesNumber(); 
   parisLocation.render(); 


// lima object 
const limaLocation = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookie: 4.6,
  cookiesPerHour:[],
  totalCookies:0,
  openHours:'6am - 7pm',
  contactInfo:'555-555-5555',
  address:'Cache. Gral. Borgoño cuadra 8, Miraflores 15074',
  randomCookiesNumber: function (){
    for ( let i=0; i<hours.length;i++){
      const customersPerHour = randomCustomers.call(this); 
      const cookiesSold = Math.ceil(customersPerHour * this.avgCookie);
     console.log( this.cookiesPerHour.push(cookiesSold));
      console.log(this.totalCookies += cookiesSold)
    }
  },
  render: function(){
    const unorderedList = document.getElementById('limaList');
    for ( let i=0; i<hours.length-1;i++){
      const listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`; 
      unorderedList.appendChild(listItem);
    } const listItem = document.createElement('li');
      listItem.textContent = `Total: ${this.totalCookies} cookies`;
      unorderedList.appendChild(listItem);
      }
    };
    limaLocation.randomCookiesNumber(); 
   limaLocation.render();*/
