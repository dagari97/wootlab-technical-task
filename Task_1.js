function evenOdd(num)
{
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num.length; i++)
    {
        if (i % 2 === 0) 
        {even += num[i];}
        else
        {
            odd += num[i];
            }
    }
    return [even, odd];
 
}
    let num = [ 1, 2, 3, 4, 5, 6 ];
    console.log("Sum of even numbers"+evenOdd()[0]);
    console.log("Sum of odd numbers"+evenOdd()[1]);