var RLECompressor = /** @class */ (function () {
    // Konstruktor klasy przyjmujący tablicę liczb
    function RLECompressor(data) {
        this.data = data;
    }
    // Metoda kompresująca dane (RLE - Run-Length Encoding)
    RLECompressor.prototype.compress = function () {
        var compressed = [];
        var count = 1;
        // Iteracja po tablicy danych
        for (var i = 1; i <= this.data.length; i++) {
            if (this.data[i] === this.data[i - 1]) {
                count++; // Zliczamy powtórzenia
            }
            else {
                // Dodajemy parę (wartość, liczba_powtórzeń) do wynikowej tablicy
                compressed.push([this.data[i - 1], count]);
                count = 1; // Resetujemy licznik
            }
        }
        return compressed;
    };
    // Metoda dekompresująca dane z postaci skompresowanej
    RLECompressor.prototype.decompress = function (compressedData) {
        var decompressed = [];
        // Iteracja po skompresowanych danych
        for (var _i = 0, compressedData_1 = compressedData; _i < compressedData_1.length; _i++) {
            var _a = compressedData_1[_i], value = _a[0], count = _a[1];
            for (var i = 0; i < count; i++) {
                decompressed.push(value); // Dodajemy wartość powtórzoną count razy
            }
        }
        return decompressed;
    };
    return RLECompressor;
}());
// Przykład użycia:
var inputData = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4]; // Posortowana tablica wejściowa
var rle = new RLECompressor(inputData);
// Kompresowanie danych
var compressedData = rle.compress();
console.log("Compressed Data:", compressedData);
// Dekompresowanie danych
var decompressedData = rle.decompress(compressedData);
console.log("Decompressed Data:", decompressedData);
