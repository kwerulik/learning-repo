class car{
    constructor(brand, model , year){
        this.brand = brand;
        this.model = brand;
        this.year = year;
    }
    disPlayInfo(){
        console.log(`Car: ${this.brand}, ${this.model} Year: ${this.year}`);
    }
    
}

const MyCar = new car("Toyota", "Yaris", 2022);
MyCar.disPlayInfo();