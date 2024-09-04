/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let oddSum = 0;
let i = 81; 
while(i <= 131)
{
    oddSum += i;
    i += 2
}
console.log('sum of all the odd numbers from 81 to 131 = ' + oddSum);
/*
Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let evenSum = 0;
i = 206; 
while(i <= 311)
{
    evenSum += i;
    i += 2
}
console.log('sum of all the even numbers from 206 to 311 = ' + evenSum);