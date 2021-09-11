for(let num = 1; num <= 100; num++){
    if(num % 3 === 0 && num % 5 === 0){
    console.log("fuzzbuzz!!");
    }else if(num % 3 === 0){
        console.log("fuzz!");
    }else if(num % 5 === 0){
        console.log("buzz!");
    }else{
        console.log(num);   
    }

}