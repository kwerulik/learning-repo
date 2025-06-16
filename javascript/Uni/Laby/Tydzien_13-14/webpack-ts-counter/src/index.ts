import './style.css';

// Pobranie elementów z HTML
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Funkcja do aktualizacji wartości licznika
let counterValue = 0;

const updateCounter = () => {
  counterElement.textContent = counterValue.toString();
};

// Obsługa zdarzeń przycisków
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

// Inicjalne wyświetlenie licznika
updateCounter();
