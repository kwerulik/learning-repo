class RLECompressor{
    private data: number[];

    constructor(data: number[]) {
        this.data = data;
    }
    
    public compress(): [number, number][]{
        const compressed: [number, number][] = []
        let count = 1; 
        
        for (let i = 1; i <= this.data.length; i++) {
            if (this.data[i] === this.data[i - 1]) {
                count++;
            } else {
                compressed.push([this.data[i - 1], count]);
                count = 1;
            }
        }
        return compressed;
    }

    public decompress(compressedData: [number, number][]): number[] {
        const decompressed: number[] = [];
    
        for (const [value, count] of compressedData) {
            for (let i = 0; i < count; i++) {
                decompressed.push(value);
            }
        }
        return decompressed;
    }
}

    
const inputData = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4];
const rle = new RLECompressor(inputData);

const compressedData = rle.compress();
console.log("Compressed Data:", compressedData);

const decompressData = rle.decompress(compressedData);
console.log("Decompressed Data:", decompressData)