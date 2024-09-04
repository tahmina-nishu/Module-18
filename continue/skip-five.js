/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let num = 55; num <= 85; num += 2)
    {
        if(num % 5 === 0)
            continue;
        else
            console.log(num);
    }