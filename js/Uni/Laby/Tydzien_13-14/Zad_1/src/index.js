"use strict";

var person = {
  name: 'John Doe',
  address: {
    street: '101 Main St',
    city: 'Anytown'
  }
};

// Transpilacja optional chaining
var street = person.address === null || person.address === void 0 ? void 0 : person.address.street;

// Transpilacja nullish coalescing
var zipcode = (person.address === null || person.address === void 0 ? void 0 : person.address.zipcode) !== null && (person.address === null || person.address === void 0 ? void 0 : person.address.zipcode) !== void 0 ? person.address.zipcode : 'Brak danych';

  