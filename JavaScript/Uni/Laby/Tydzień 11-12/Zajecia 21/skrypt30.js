var Sorter = /** @class */ (function () {
    function Sorter(items) {
        this.items = items;
    }
    Sorter.prototype.insertionSort = function () {
        for (var i = 2; i < this.items.length; i++) {
            var key = this.items[i];
            var j = i - 1;
            while (j >= 0 && this.items[j] > key) {
                this.items[j + 1] = this.items[j];
                j--;
            }
            this.items[j + 1] = key;
        }
    };
    Sorter.prototype.getItems = function () {
        return this.items;
    };
    return Sorter;
}());
var numberSorter = new Sorter([5, 2, 9, 1]);
numberSorter.insertionSort();
console.log("Posortowana tablica liczb:", numberSorter.getItems());
var stringSorter = new Sorter(["banana", "apple", "orange", "grape"]);
stringSorter.insertionSort();
console.log("Posortowana tablica stringów:", stringSorter.getItems());
