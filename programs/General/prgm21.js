//wap to check a given num is prime or not

num = 5
flag = 0

if (num < 0) {
    console.log(`The num is negative`);
}
else if (num == 1) {
    console.log(`The num is neither nor composite`);
}
else {
    for (i = 2; i < num; i++) {

        if (num % i == 0) {
            flag = 1;
            break;

        }

    }
    console.log(flag > 0 ? 'The num is not prime' : 'The num is prime');

}

//sum of prime num from 1 to 100

let sum = 0;
    
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) sum += num;
    }
    

console.log("Sum of prime numbers from 1 to 100:",sum);


console.log(`----------------------------------------------------------------------------`);

// wap to display all prime numbers btw 1 - 50

for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) console.log(num);
}