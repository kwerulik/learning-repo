let calculation = localStorage.getItem('calculation') || '';

    function updateCalculation(value) {
      localStorage.setItem('calculation', 0);
      calculation += value;
      displayCalculation()
      
    }

    function displayCalculation() {
      document.querySelector('.js-display-calculation').innerHTML = calculation
      localStorage.setItem('calculation', 0);
    }

    function saveCalculation() {
      localStorage.setItem('calculation', calculation);
      calculation = 0;
    }
