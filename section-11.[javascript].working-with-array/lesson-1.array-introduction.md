# JAVASCRIPT ARRAY

## Khởi tạo mãng (Array Initialization)
- Một mãng trong javascript có thể được định nghĩa và khởi tạo bằng 2 cách: array literal và Array constructor syntax.

## Array literal.
- Array literal là cú pháp đơn giản.
- Nó nhận một danh sách giá trị được ngăn cách bởi dấu "," và được đặt trong dấu ngoặc vuông.
```bash
var <array-name> = [element0, element1, element2,... elementN];
```

Example: Một vài cách định nghĩa và khởi tạo array.
```bash
var stringArray = ["one", "two", "three"];

var numericArray = [1, 2, 3, 4];

var decimalArray = [1.1, 1.2, 1.3];

var booleanArray = [true, false, false, true];

var mixedArray = [1, "two", "three", 4]
```
- Javascript có thể lưu nhiều element với nhiều kiểu dữ liệu khác nhau. Nó không yêu cầu phải lưu trữ những element cùng kiểu dữ liệu.

## Array constructor.
- Bạn có thể khởi tạo một array với cú pháp Array constructor sử dụng từ khóa ***new**.
- Khởi tạo bằng cú pháp Array constructor có 3 dạng sau.
```bash
var arrayName = new Array();

var arrayName = new Array(Number length);

var arrayName = new Array(element1, element2, element3,... elementN);
```
- Như bạn đã thấy cú pháp ở trên. Cách khởi tạo của một Array constructor giống với cách khởi tạo Object constructor của Object.

Example: Array Constructor Syntax.
```bash
var stringArray = new Array();
stringArray[0] = "one";
stringArray[1] = "two";
stringArray[2] = "three";
stringArray[3] = "four";

var numericArray = new Array(3);
numericArray[0] = 1;
numericArray[1] = 2;
numericArray[2] = 3;

var mixedArray = new Array(1, "two", 3, "four");
```
**Note**
- Index(Key) của một array chỉ có thể là một số, nó không được phép là một kiểu dữ liệu khác.

Example: Incorrect Array Index
```bash
var stringArray = new Array();

stringArray["one"] = "one";
stringArray["two"] = "two";
stringArray["three"] = "three";
stringArray["four"] = "four";
```

## Truy cập phần tử của Array (Accessing Array elements).
- Element của array có thể được truy cập bằng cách sử dụng index(key). Chỉ định một index trong dấu ngoặc vuông với tên của array để truy cập element tại index cụ thể.

**Note**
- Index của một array luôn bắt đầu từ 0.
Example: Access array element.
```bash
var stringArray = new Array("one", "two", "three", "four");

stringArray[0]; // returns "one"
stringArray[1]; // returns "two"
stringArray[2]; // returns "three"
stringArray[3]; // returns "four"

var numericArray = [1, 2, 3, 4];
numericArray[0]; // returns 1
numericArray[1]; // returns 2
numericArray[2]; // returns 3
numericArray[3]; // returns 4
```

## Array Properties.
- Array bao gồm "length" property, nó trả về số lượng elements trong một array.
- Xử dụng **for** loop để access tất cả elements của một array sử dụng "length" property.

Example: Access Array using for Loop
```bash
var stringArray = new Array("one", "two", "three", "four");

for (var i = 0; i < stringArray.length ; i++)
{
    stringArray[i];
}
```
