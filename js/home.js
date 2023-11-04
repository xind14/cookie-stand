//Creating new objects using the constructor
let Seattle = new Location(
  "Seattle",
  23,
  65,
  6.3,
  "6am - 7pm",
  "123-456-7890",
  "2901 3rd Ave #300, Seattle, WA 98121",
  "Seattle's cozy cookie haven boasts fresh, gooey cookies like classic chocolate chip, drawing locals for its warm atmosphere."
);
let Tokyo = new Location(
  "Tokyo",
  3,
  24,
  1.2,
  "6am - 7pm",
  "222-222-2222",
  "1 Chrome-1-2 Oshiage, Sumida CountQueuingStrategy, Tokyo 131-8634",
  "Tokyo's vibrant stand blends Japanese craftsmanship with flavors like sakura blossom, creating a must-visit spot for unique, indulgent cookies."

);
let Dubai = new Location(
  "Dubai",
  11,
  38,
  3.7,
  "6am - 7pm",
  "333-333-3333",
  "1 Sheikh Mohammed bin Rashid Blvd - Dubai",
" Dubai's opulent stand showcases exotic cookies like pistachio-saffron and date-filled delights, adorned with edible gold leaf, a luxurious treat amid the city's extravagance."

);
let Paris = new Location(
  "Paris",
  20,
  38,
  2.3,
  "6am - 7pm",
  "444-444-4444",
  "Champ de MediaStream, 5 Avenue Anatole France, 75007",
  " In Montmartre, Paris, our stand offers visually stunning, artisanal cookies, infused with the finest French butter and chocolate, a treat for the senses."

);
let Lima = new Location(
  "Lima",
  2,
  16,
  4.6,
  "6am - 7pm",
  "555-555-5555",
  "Cache. Gral. Borgoño cuadra 8, Miraflores 15074",
  "Lima's scenic stand captures Peru's flavors, featuring cookies with tropical fruits and Andean chocolate, offering a symphony of tastes by the beach."

);

let storeLocation = [Seattle, Tokyo, Dubai, Paris, Lima];

//Constructor function for creating location objects
function Location(name, min, max, avg, openHours, phone, address, description) {
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
  this.description=description;
}


//Adding render function into Location constructor
const storeInfo = document.getElementById("root");
Location.prototype.renderLocationInfo = function () {

    let storeSection = document.createElement("section");
    storeInfo.appendChild(storeSection);

    let nameInfo = document.createElement("h2");
    nameInfo.textContent = this.name;
    storeSection.appendChild(nameInfo);

    let generalInfo = document.createElement("ul");
    storeSection.appendChild(generalInfo);

    let openInfo = document.createElement("li");
    openInfo.textContent = `Hours Open: ${this.openHours}`;
    generalInfo.appendChild(openInfo);

    let contactInfo = document.createElement("li");
    contactInfo.textContent = `Contact Info: ${this.phone}`;
    generalInfo.appendChild(contactInfo);

    let addressInfo = document.createElement("li");
    addressInfo.textContent = `Location: ${this.address}`;
    generalInfo.appendChild(addressInfo);
    let descriptionInfo = document.createElement("li");
    descriptionInfo.textContent = `About Us: ${this.description}`;
    generalInfo.appendChild(descriptionInfo);
  };

Seattle.renderLocationInfo();
Tokyo.renderLocationInfo();
Dubai.renderLocationInfo();
Paris.renderLocationInfo();
Lima.renderLocationInfo();

