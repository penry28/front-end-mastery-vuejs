# ARRAY METHODS REFERENCE

| Method         | Description   |
|:---------------|--------------|
| concat()       | Trả về mảng mới bằng cách kết hợp các giá trị của mảng được chỉ định làm tham số với các giá trị mảng hiện có. |
| every()        | Trả về true hoặc false nếu mọi phần tử trong mảng được chỉ định thỏa mãn điều kiện được chỉ định trong hàm gọi lại. Trả về false ngay cả khi có một phần tử không thỏa mãn điều kiện. |
| filter()       | Trả về một mảng mới với tất cả các phần tử thỏa mãn điều kiện được chỉ định trong hàm gọi lại. |
| forEach()      | Thực thi một hàm gọi lại cho từng phần tử của một mảng. |
| indexOf()      | Trả về chỉ số của lần xuất hiện đầu tiên của phần tử được chỉ định trong mảng hoặc -1 nếu không tìm thấy phần tử đó. |
| join()         | Trả về chuỗi của tất cả các phần tử được phân tách ra bằng dấu phân tách được truyền vào. |
| map()          | Tạo một mảng mới với kết quả của việc gọi một hàm được cung cấp trên mọi phần tử trong mảng này. |
| pop()          | Loại bỏ phần tử cuối cùng khỏi một mảng và trả về phần tử đó. |
| push()         | Thêm một hoặc nhiều phần tử vào cuối một mảng và trả về độ dài mới của mảng. |
| shift()        | Loại bỏ phần tử đầu tiên khỏi một mảng và trả về phần tử đó. |
| unshift()      | Thêm một hoặc nhiều phần tử vào phía trước của một mảng và trả về độ dài mới của mảng. |
| some()         | Trả về true nếu ít nhất một phần tử trong mảng này thỏa mãn điều kiện trong hàm gọi lại. |
| toString()     | Trả về một chuỗi đại diện cho mảng và các phần tử của nó. |

## Example.
### concat()
```bash
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [9, 10, 11, 12];

var newArray1 = array1.concat(array2);
console.log(newArray1); // [1, 2, 3, 4, 5, 6, 7, 8];

var newArray2 = array1.concat(array2, array3);
console.log(newArray2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
```

### every()
```bash
const evenNumbers = [2, 4, 6, 8, 10];
const isEven = evenNumbers.every(function(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(isEven); // true

const oddNumbers = [1, 2, 3, 5, 7, 9];
const isOdd = oddNumbers.every(function(item) {
    if (item % 2 !== 0) {
        return true;
    } else {
        return false;
    }
});

console.log(isOdd); // false
```

### filter()
```bash
# Lọc ra những numbers là số chẵn.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
})
```

### forEach()
```bash
# lấy những số lớn hơn 5 và lưu vào một mãng khác.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const otherNumbers = [];

numbers.forEach(function(item) {
    if (item > 5) {
        otherNumbers.push(item);
    }
});

console.log(otherNumbers); // 6, 7, 8, 9, 10.
```

### indexOf()
```bash
const nameOfUsers = ['Chính', 'Hùng', 'Tiến', 'Ngọc', 'Tùng'];

const value1 = nameOfUsers.indexOf('Hùng');
const value2 = nameOfUsers.indexOf('Ngân');

console.log(value1); // 1
console.log(value2); // -1
```

### join()
```bash
const listString = ['Tôi', 'Đang', 'Học', 'Lập', 'Trình', 'Javascript'];

const value1 = listString.join(' ');
const value2 = listString.join(',');
const value3 = listString.join(', ');

console.log(value1); // Tôi Đang Học Lập Trình Javascript
console.log(value2); // Tôi,Đang,Học,Lập,Trình,Javascript
console.log(value3); // Tôi, Đang, Học, Lập, Trình, Javascript
```

### map()
```bash
const users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Phạm Đình Chiểu' },
    { id: 3, name: 'Trần Văn Dần' }
];

const value1 = users.map(function(item) {
    return {
        id: item.id,
    }
});

const value2 = users.map(function(item) {
    return item.id;
})

const value3 = users.map(function(item) {
    return {
        ...item,
        age: item.id + 10
    };
});

console.log(value1);
/**
 * [
 *   { id: 1 },
 *   { id: 2 },
 *   { id: 3 }
 * ];
 */

console.log(value2);
// [1, 2, 3]

console.log(value3);
/**
 * [
 *   { id: 1, name: 'Nguyễn Văn A', age: 11 },
 *   { id: 2, name: 'Phạm Đình Chiểu', age: 12 },
 *   { id: 3, name: 'Trần Văn Dần', age: 13 }
 * ];
 */

```

### pop()
```bash
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop());// 5
```

### push()
```bash
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.push(9));// 6
```

### shift()
```bash
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.shift());// 1
```

### unshift()
```bash
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.unshift(-1));// 6
```

### some()
```bash
const evenNumbers = [1, 2, 3, 5, 7, 9];

const isEven = evenNumbers.some(function(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
})
```

### toString()
```bash
const listString = ['Tôi', 'Thích', 'Lập', 'Trình'];

const value = listString.toString();

console.log(value); // Tôi,Thích,Lập,Trình
```