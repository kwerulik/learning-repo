import fs from 'fs/promises';


async function readDistances() {
  try {
    const data = await fs.readFile('distances.txt', 'utf8');
    const distances = data.split('\r\n').map(String).map((el) => el.split(' ')).sort((a,b) => a[1] - b[1]);
    console.log("Miasto z najmniejszym dystansem:", distances);
  } catch (err) {
    console.error("Wystąpił błąd podczas czytania pliku:", err);
  }
}

// Uruchamiamy funkcję
readDistances();
