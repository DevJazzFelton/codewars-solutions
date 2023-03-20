// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have attributes x and y.
// Write a function calculating distance between Point a and Point b.
// Tests compare expected result and actual answer with tolerance of 1e-6.

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

//   Here is how the calculation works:

//   The distance between two points can be found by calculating the length of the line segment
//  that connects them. This length can be found using the Pythagorean theorem, which states 
//  that the square of the length of the hypotenuse of a right triangle (i.e., the longest side) 
//  is equal to the sum of the squares of the lengths of the other two sides.
//   In this case, the two points are represented as objects with "x" and "y" properties. 
//   To calculate the distance between them, the function subtracts the "x" and "y" coordinates of 
//   one point from the corresponding coordinates of the other point, to find the lengths of the 
//   horizontal and vertical sides of the right triangle.
//   Then, the function uses the Math.hypot() method to calculate the length of the hypotenuse, 
//   which is the distance between the two points.
//   Finally, the function returns the calculated distance as a number.