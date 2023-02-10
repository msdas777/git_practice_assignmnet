
function Isprime(num){
    let counter=0;
    for(let i=2;i<=num;i++){
        if(num%i===0){
            counter++;
        }
    }
    if(counter==1){
        console.log(prime);
    } else {
        console.log("Not a prime");
    }
}


for(let i=2;i<=50;i++){
    let x = Isprime(i);
}
console.log(x);