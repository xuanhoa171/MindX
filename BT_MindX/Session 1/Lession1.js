// let button = document.getElementById('add');
// add.onclick = function revers(str) {
//     let str = document.getElementById('str').value;
//     return str.split(''.reverse().join(''));
    
// }

// function revers() {
//     let str = import('Nhập vào chuỗi chuyển đổi');
//     console.log(str);

//     // Dùng slipt('') để chuyển đổi chuỗi ban đầu thành mảng
//     let l = str.splipt('');
//     console.log(l);

//     // Dùng reverse để chuyển đổi mảng 
//     l_reverse = l.reverse();
//     console.log(l_reverse);

//     // Dùng join để chuyển mảng kết quả về dạng chuỗi 
//     str_reverse = l_reverse.join('');
//     console.log(str_reverse);

// }

function reverseString(s1) {
    var str = s1;
    var splitString = str.split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
}
 
document.write(reverseString("abcdef")) ;
