let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
let num = 0;
for(let num = 0; num < numbers.length; num++){
    if(numbers[num] % 2 === 0){
        console.log(numbers[num]);
    }
}
function isEven() {
    console.log(num + 'は偶数です');
}


class Car {
    constructor(gass,num){
        this.gass = gass;
        this.number = num;
    }
    getNumGas(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }
}
let myCar = new Car(20,17);
myCar.getNumGas();
