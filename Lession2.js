// Viết một function xoá các phần từ trùng lặp trong một mảng các số


function delete_unique(arr) {
    var newArr = []
    newArr = arr.filter(function (item) {
      return newArr.includes(item) ? '' : newArr.push(item)
    })
    return newArr;
  }
  console.log(delete_unique([1, 2, 3, 5, 4, 2, 6, 4]));
  document.write(([1, 2, 3, 5, 4, 2, 6, 4]));