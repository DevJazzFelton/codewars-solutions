// Upon arriving at an interview, you are presented with a solid blue cube. 
// The cube is then dipped in red paint, coating the entire surface of the cube. 
// The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.
// Your function takes as parameter the number of times the cube has been cut. 
// You must return the number of smaller cubes created by the cuts that have at least one red face.
// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

let countSquares = c => c ? 6 * c * c + 2 : 1;


//SOLUTION EXPLAINED

// This is a JavaScript function called countSquares that takes a single parameter c. The function calculates the total number of squares in a square grid that has c levels of nested squares, where each level has side length that is one unit smaller than the level outside it.

// The function works as follows:

// If c is truthy (i.e., not null, undefined, 0, false, NaN, or an empty string), then the function calculates the number of squares as 6 * c * c + 2.
// If c is falsy, the function returns 1.
// The reason for the + 2 term is that there are two additional squares that are not part of the nested grid. One is the largest square that encompasses all the nested squares, and the other is the smallest square that is fully contained within the innermost square of the grid.

// The formula 6 * c * c represents the number of squares in the nested grid itself. Each level of the grid contains a square of side length c, a square of side length c-1, a square of side length c-2, and so on, down to a square of side length 1. There are 6 of each size of square in the grid, hence the factor of 6. Multiplying by c * c gives the total number of squares in the grid.

// Overall, this function is a compact way to calculate the number of squares in a nested square grid of a given depth.