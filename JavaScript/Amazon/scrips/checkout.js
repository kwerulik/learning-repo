import { loadProduscts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practise.js';

loadProduscts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});