import './style.css';

document.getElementById('calculate').addEventListener('click', () => {
  const input = document.getElementById('number').value;
  const number = parseInt(input, 10);


  if (isNaN(number) || number < 2 || number > 1000) {
    alert('Proszę podać liczbę w zakresie od 2 do 1000.');
    return;
  }

  const tab = create(number);

  const primes = sieveOfEratosthenes(tab, number);
  document.getElementById('result').innerText = `Liczby pierwsze: ${primes.join(', ')}`;
});


function create(N) {
  let a = [];
  for (let i = 0; i <= N + 1; i++) {
      a.push(i);
  }
  return a;
}


function sieveOfEratosthenes(tab, max) {
  const sito = tab;
  sito[0] = sito[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (sito[i]) {
      for (let j = i * i; j <= max; j += i) {
        sito[j] = false;
      }
    }
  }

  let prinmes = [];
  for (let i = 2; i <= max; i++) {
    if (sito[i]) {
      prinmes.push(sito[i]);
    }
  }

  return prinmes;
}

