
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []

  for(let i = 0; i < matrix.length; i++) {
		for(let item of matrix[i]) {
    	newArr.push(item)
    }
  }
  return newArr.sort((a, b) => a-b)
}
