// Bài tập 1: Giải phương trình bậc 1 (ax + b = 0).
// Bài tập 2: Giải phương trình bậc 2 (ax2 + bx + c = 0).

// Bài tập 1: Giải phương trình bậc 1 (ax + b = 0).
/**
 * ax + b = 0; 1x = 0;
 * a = 1, b = 2 => x = ?
 * b1: Lấy giá trị của a và b được nhập vào.
 * b2: Kiểm điều kiện thoả mãn.
 *
 * - Nếu a = 0 => phương trình vô nghiệm
 * - Nếu a != 0
 *     x = -b/a.
 *
 *
 * b1: tạo form có 2 input
 *  + nhập a, nhập b
 * b2: kiểm tra 2 giá trị user vừa nhập có phải là số
 *  hay không, nếu không báo lỗi. "Giá trị bạn nhập vào ko phải là một số"
 * b3: gọi đến function giaiPhuongTrinhBac1(a, b) {
 * };
 *  - Nếu a = 0 return 'Phương trình vô nghiệm'
 */

 function giaiPhuongTrinhBac1(a, b) {
    return 10;
}

console.log(giaiPhuongTrinhBac1(0, 2));


// Giải phương trình bậc 2 (ax2 + bx + c = 0).
// b1: Lấy giá trị của a, b và c được nhập vào.
// b2: Kiểm điều kiện thoả mãn.
/**
 * Nếu a = 0 => giải phương trình bậc 1.
 * Nếu a != 0
 *  Giải denta = b2 - 4ac.
 *   denta > 0 phương trình có 2 nghiệm. x1, x2.
 *   denta = 0 phương trình có một nghiệm kép.
 *   denta < 0 phương trình vô nghiệm.
 */

function giaiPhuongTrinhBac2(a, b, c) {
    if (a === 0) return {
        title: 'Phương trình bậc 1',
        x: giaiPhuongTrinhBac1(b, c),
    };

    const denta = '';
    if (denta > 0) {
        const x1 = '';
        const x2 = '';
        return {
            title: 'Phương trình có 2 nghiệm',
            x1: x1,
            x2: x2,
        };
    } else if (denta === 0) {
        const x = '';
        return {
            title: 'Phương trình có một nghiệm kép',
            x: x,
        }
    } else {
        return {
            title: 'Phương trình vô nghiệm'
        }
    }
}

/**
 * căn bậc 2 của 4
 * Math.sqrt(4)
 * Math.pow(2, 6) 2^6
 */