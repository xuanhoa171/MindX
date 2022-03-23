
function arr_unique (array) {
    array.sort();
    let max = [0,0];

    let count = 1;

    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.

    for (let i = array.length-1; i > 0; --i) {
        if(array[i] == array[i-1]) ++count ; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else {
            //So sánh số lần xuất hiện với max[1]
            if(max[1] < count) {
                //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                max[0] = array[i];
                max[1] = count ;
            }
            count = 1; 
        }

    }
    console.log("Value "+ max[0] + " " + "Count " + max[1]);

};

let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
arr_unique(array);