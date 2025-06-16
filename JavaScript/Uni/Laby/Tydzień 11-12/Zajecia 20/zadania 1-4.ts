// Zad 1 
// const greeting: string = "Hello, TypeScript!"; 
// console.log(greeting);

//-----------------------------------------
// Zad 2
// Definicja typu
// interface Product {
    //     id: number;
//     name: string;
//     price: number;
//     available: boolean;
//   }

//   // Funkcja z typami
//   function getProductName(product: Product): string {
    //     return product.name;
    //   }
    
    //   // Użycie
    //   const myProduct: Product = { id: 1, name: "Laptop", price: 1500, available: true };
    //   console.log(getProductName(myProduct)); // Laptop

    
//-----------------------------------------
// // Zad 3
// interface Car {
//     readonly id: number;
//     brand: string;
// }

// const myCar: Car = { id: 101, brand: "Toyota" };
// myCar.brand = "Honda"; // OK
// //myCar.id = 102; // Błąd: id jest readonly
 
    
//--------------------------------------
// Zad 4
// interface Animal {
//     species: string;
//   }
    
//   interface Pet extends Animal {
//     name: string;
//   }
    
//   const dog: Pet = {
//     species: "Dog",
//     name: "Buddy",
//   };
    
//   console.log(dog.species); // "Dog"
    