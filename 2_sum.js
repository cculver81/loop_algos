// Sum from 1 to 10, printing out the number and current sum so far at each step of the way
// The expected output will be:
// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 .... etc

// YOUR CODE HERE 
var sum_x = 0;
for (var x = 1; x <= 10; x++) {
    console.log ("num: " + x);
    sum_x += x;
    console.log ("sum: " + sum_x) 
}