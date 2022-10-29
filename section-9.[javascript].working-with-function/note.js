/**
 * Các cách khai báo function trong javascript.
 */
// c1. (hay xử dụng) regular function
function funcName() {
    // Nơi viết phần xử lý.
}

// c2. (hay xử dụng) regular function
var funcName2 = function() {
    // Nơi viết phần xử lý.
}

// c3 (hay xử dụng) arrow function
const funcName3 = () => {
    // Nơi viết phần xử lý.
}

/**
 * Giá trị trả về của một function
 * 2 loại func
 */
// Loại 1 function return void
// Loại 2 function return <giá trị cụ thể> 1, 2, 3 [], {}, function, chính nó.
/**
 * Kết luận:
 * - một function mà không có từ khóa return
 * thì đó là function return void
 * - một function mà có từ khóa return
 * thì đó là function return value;
 */

// Rút tiền của của cây rút tiền
// b1: đút thẻ vào
// b2: nhập mật khẩu
// b3: chọn phương thức (rút tiền, nạp tiền, kiểm tra số dư)
// b4: nhận thông báo rút thành công hay thất bại
// b5: trả tiền ra cho em.

// Cấy ATM sẽ làm gì.
/**
 * b1: đút thẻ vào
 *  - function checkCardIsValid() {
 *       return true;// nếu thành công.
 *       return false; // không hợp lệ.
 *    }
 *
 *  - function enterPassword() {
 *      // nhập 1, 2, 3, 4, 5, 6
 *    }
 */

//  function funcName() {
//     // Nơi viết phần xử lý.
// }

/**
 * function: khai báo
 * funcName: tên của function
 * trong dấu {}: phần xử lý của func đó
 */

function checkCardIsValid() {
    // return 10;
    console.log(10);
}

// Cú pháp gọi func
// funcName();

// checkCardIsValid();

/**
 * agruments.
 * tham số truyền vào của một func.
 * - Có thể truyền 1 hoặc nhiều tham số vào function.
 * - Mội tham số truyền vào của một function được cách nhau bằng dầu ,
 * - Tham số của một function có thể là
 *      + string
 *      + number
 *      + object
 *      + array
 *      + function
 *
 * - Một function mà tham số truyền vào là một function
 *  và function đó nó cũng return về một function
 *    => high order function.
 */
function checkAccount(email, password) {
    if (email === 'chinh@gmail.com' && password === '123') {
        return true;
    }
    return false;
}

console.log(checkAccount('chinh@gmail.com', '123'));

function sum(a, b) {
    return a + b;
}

const value = sum(5, 10);

console.log(value);

// function functionA(a, b) {

// }

// function functionB(func) {
//     return function() {
//         console.log('hello world');
//     }
// }

// const value2 = functionB(functionA);

// console.log(value2());
