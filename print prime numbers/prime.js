
for (let i =2; i <= 100; i++) {
    let prime = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && prime == 0) {
        console.log(i);
    }
}