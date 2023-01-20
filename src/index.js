
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
  if(!matrix) {
    return newArr
  } else {
    let filter = matrix.filter((item, index) => {
      if(index % 2 !== 0) {
        return item.reverse()
      } else {
        return item
      }
    })
    for(let i = 0; i < filter.length; i++) {
      for(let key of filter[i]) {
        newArr.push(key)
      }
    }
  }
  return newArr
}
