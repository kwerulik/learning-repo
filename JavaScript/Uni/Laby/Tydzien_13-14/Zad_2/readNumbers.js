import fs from 'fs/promises';

async function readFirstNumber() {
  try {
    const data = await fs.readFile('number.txt', 'utf8');
    const numbers = data.split('\n').map(Number);
    console.log("Pierwsza wczytana liczba to:", numbers[0]);
  } catch (err) {
    console.error("Wystąpił błąd podczas czytania pliku:", err);
  }
}

readFirstNumber();
