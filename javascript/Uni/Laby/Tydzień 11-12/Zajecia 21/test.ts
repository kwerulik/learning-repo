// // Klasa generyczna Sorter<T>
// class Sorter<T extends number | string> {
//     private items: T[];

//     // Konstruktor inicjalizujący tablicę generyczną
//     constructor(items: T[]) {
//         this.items = items;
//     }

//     // Metoda sortująca tablicę za pomocą algorytmu sortowania przez wstawianie
//     insertionSort(): void {
//         for (let i = 1; i < this.items.length; i++) {
//             const key = this.items[i];
//             let j = i - 1;

//             // Przesuwanie elementów większych od klucza o jedno miejsce w prawo
//             while (j >= 0 && this.items[j] > key) {
//                 this.items[j + 1] = this.items[j];
//                 j--;
//             }

//             // Wstawienie klucza w odpowiednie miejsce
//             this.items[j + 1] = key;
//         }
//     }

//     // Metoda do pobrania posortowanej tablicy
//     getItems(): T[] {
//         return this.items;
//     }
// }

// // Tworzenie obiektu Sorter dla liczb
// const numberSorter = new Sorter<number>([5, 2, 9, 1]);
// numberSorter.insertionSort();
// console.log("Posortowana tablica liczb:", numberSorter.getItems());

// // Tworzenie obiektu Sorter dla stringów
// const stringSorter = new Sorter<string>(["banana", "apple", "orange", "grape"]);
// stringSorter.insertionSort();
// console.log("Posortowana tablica stringów:", stringSorter.getItems());
