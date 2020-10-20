
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if ((!matrix) || (matrix.length === 0)) {
        return [];
    } else {

        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1 || i === 1) {
                result.push(matrix[i].reverse());
            } else {
                result.push(matrix[i]);
            }
        }
    }
    return result.flat();
}



