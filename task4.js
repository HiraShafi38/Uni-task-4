// Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
// Get the number of rows in matrixA and matrixB, and columns in matrixB
const rowsA = matrixA.length;
const colsA = matrixA[0].length;
const rowsB = matrixB.length;
const colsB = matrixB[0].length;
// Check if matrix multiplication is possible (columns of A must equal rows of B)
if (colsA !== rowsB) {
throw new Error("Matrix multiplication is not possible: columns of A must equal rows of B.");   }
// Initialize the result matrix with zeros
let resultMatrix = [];
for (let i = 0; i < rowsA; i++) {
resultMatrix[i] = [];
for (let j = 0; j < colsB; j++) {
resultMatrix[i][j] = 0;
}
}
// Perform matrix multiplication
for (let i = 0; i < rowsA; i++) { // Iterate over the rows of matrixA
for (let j = 0; j < colsB; j++) { // Iterate over the columns of matrixB
for (let k = 0; k < colsA; k++) { // Iterate over the columns of matrixA/rows of matrixB
resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
}
}
}
// Return the result matrix
return resultMatrix;
}
// Example usage:
// Define the first matrix (matrixA)
const matrixA = [
[1, 2, 3],
[4, 5, 6]
];
// Define the second matrix (matrixB)
const matrixB = [
[7, 8],
[9, 10],
[11, 12]
];
// Call the multiplyMatrices function to multiply matrixA and matrixB
const result = multiplyMatrices(matrixA, matrixB);
// Output the result matrix to the console
console.log("The product of matrixA and matrixB is:");
console.table(result);
