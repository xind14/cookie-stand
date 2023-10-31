
'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

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
    (this.cookiesPerHour.push(cookiesSold));
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
   limaLocation.render(); 

