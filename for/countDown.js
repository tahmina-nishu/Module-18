/***

Implement a countdown timer that counts down from 81 to 65.

 */

let start = 81;
let end = 65;
for (let i = start; i >= end; i--) 
{
    setTimeout(() => {
        console.log(i);
    }, (start - i) * 1000);
}
