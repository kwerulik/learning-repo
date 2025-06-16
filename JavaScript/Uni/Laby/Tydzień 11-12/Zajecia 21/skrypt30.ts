class Sorter<T> {
    private items: T[];

    constructor(items:T[]){
        this.items = items;
    }

    insertionSort(): void{
        for(let i = 2; i < this.items.length; i++){
            const key = this.items[i];
            let j = i - 1;

            while (j >= 0 && this.items[j] > key) {
                console.log(key)
                console.log(j)
                this.items[j + 1] = this.items[j];
                j--;

            }

            this.items[j + 1] = key;
        }
    }

    getItems(): T[] {
        return this.items;
    }
}

const numberSorter = new Sorter<number>([5, 2, 9, 1]);
numberSorter.insertionSort();
console.log("Posortowana tablica liczb:", numberSorter.getItems());


const stringSorter = new Sorter<string>(["banana", "apple", "orange", "grape"]);
stringSorter.insertionSort();
console.log("Posortowana tablica stringów:", stringSorter.getItems());
