for (let i = 1; i <= 20; i++) {
    if (i % 5 === 0) {
        if (i % 2 === 0) {
            console.log(i + " is divisible by 5 and is even");
        } else {
            console.log(i + " is divisible by 5 and is odd");
        }
    } else if (i % 5 !== 0) {
        console.log(i + " is not divisible by 5");
    } else {
        console.log("This should never be reached");
    }
}
