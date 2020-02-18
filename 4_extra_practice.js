// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE

var x = 1;
while (x <= 20) {
    if (x % 2 != 0) {
        console.log (x)
    }
    x++;
}

var sum_x = 0;
var x = 1;
while (x <= 10) {
    console.log ("num: " + x);
    sum_x += x;
    console.log ("sum: " + sum_x);
    x++;
}

var x = 1;
while (x <= 30) {
    if (x % 3 == 0 && x % 5 == 0) {
            console.log ("FizzBuzz");
    }
    else if (x % 3 == 0) {
            console.log ("Fizz");
    }
    else if (x % 5 == 0) {
            console.log ("Buzz");
    }
    else {
            console.log (x);
    }
    x++;
}