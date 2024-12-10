# Euclidean Algorithm Bug

This repository contains a JavaScript implementation of the Euclidean algorithm with a bug. The algorithm is designed to find the greatest common divisor (GCD) of two numbers.  If the GCD is 1, it should return `true`; otherwise, it should return `false`. However, a flaw in the recursive implementation causes incorrect results in certain cases.

## Bug Description

The function `foo` uses recursion to compute the GCD.  In certain cases where the inputs are not coprime the algorithm results in an incorrect result. 

## Solution

The solution corrects the logic within the recursive function to ensure it consistently calculates and returns the correct boolean value. Please see `bugSolution.js` for the corrected code.

## How to run

1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the corrected version.
3. Run the JavaScript files in a browser console or using Node.js.