class Taiyaki {
    constructor(taste){
        this.taste = taste;
    }
    inside(){
        console.log(`中身は${this.taste}`);
    }
}
let anko = new Taiyaki('あんこ');
anko.inside();
let cream = new Taiyaki('クリーム');
cream.inside();
let cheese = new Taiyaki('チーズ');
cheese.inside();
