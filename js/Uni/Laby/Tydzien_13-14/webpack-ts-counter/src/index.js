"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
// Pobranie elementów z HTML
var counterElement = document.getElementById('counter');
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
// Funkcja do aktualizacji wartości licznika
var counterValue = 0;
var updateCounter = function () {
    counterElement.textContent = counterValue.toString();
};
// Obsługa zdarzeń przycisków
incrementButton.addEventListener('click', function () {
    counterValue++;
    updateCounter();
});
decrementButton.addEventListener('click', function () {
    counterValue--;
    updateCounter();
});
// Inicjalne wyświetlenie licznika
updateCounter();
