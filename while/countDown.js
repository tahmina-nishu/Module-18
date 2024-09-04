/***

Implement a countdown timer that counts down from 21 to 15.

 */

let start = 21;
let i = 21;

while (i >= 15) {
    // Create an IIFE to capture the current value of `i`
    (function(value) {
        setTimeout(() => {
            console.log(value);
        }, (start - value) * 1000);
    })(i);
    
    i--;
}
