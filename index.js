const vectorB = [1, 2, 3]; // Assuming values for x, y, and z
const matrixAB = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33]
];

// Function to transpose a matrix
function transposeMatrix(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

// Function to perform matrix multiplication
function multiplyMatrices(matrix1, matrix2) {
    return matrix1.map((row1) =>
        matrix2[0].map((col2, j) =>
            matrix2.reduce((sum, row2) =>
                sum + row1[j] * row2[j], 0)
        )
    );
}

// Calculate the result using the provided formula
const transposedVectorB = transposeMatrix([vectorB]);
console.log(transposedVectorB)
const intermediateMatrix = multiplyMatrices(transposedVectorB, matrixAB);
const result = multiplyMatrices(intermediateMatrix, [vectorB]);

console.log(result[0][0]);
