import { loadProduscts, loadProdusctsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practise.js';
import { loadCart } from "../data/cart.js";


Promise.all([
  loadProdusctsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

// new Promise((resolve) => {
//   loadProduscts(() => {
//     resolve('value1');
//   })
// }).then((value) => {
//   console.log(value);     
//   return new Promise( resolve => {
//     loadCart(() => {
//       resolve();
//     });
//   });
// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// loadProduscts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
