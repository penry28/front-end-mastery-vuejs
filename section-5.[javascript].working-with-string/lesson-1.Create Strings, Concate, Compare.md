# CHUỖI TRONG JAVASCRIPT.

## Overview
- Chuỗi là một **primitive data type**(kiểu dữ liệu nguyên thủy) trong JavaScript.
- Một chuỗi là nội dung văn bản.
- Nó phải được đặt trong dấu ngoặc kép đơn hoặc kép.

```bash
"Hello World"

'Hello World'
```

- Giá trị chuỗi có thể được gán cho một biến bằng cách sử dụng toán tử bằng (=).
```bash
var str1 = "Hello World";

var str2 = 'Hello World';
```

- Một chuỗi cũng có thể được coi như array(mảng) ký tự dựa trên `index`.
```bash
var str = 'Hello World';

str[0] // H
str[1] // e
str[2] // l
str[3] // l
str[4] // o

str.length //  11
```

- Chuỗi cũng là chỉ số ký tự, nó có thể được truy cập bằng cách sử dụng vòng lặp for và vòng lặp for-of.
```bash
var str = 'Hello World';

for(var i =0; i< str.length; i++)
  console.log(str[i]);

for(var ch of str)
    console.log(ch);
```

## 2. Cộng chuỗi (Concatenation)
Strong Javascript kiểu dữ liệu String là bất biến, nó có thể được kết hợp lại với nhau bằng cách sử dụng (+) operator.
```bash
var str = 'I ' + "am " + 'a ' + 'Developer ';
```

## 3. Bao gồm cả dấu ngoạc kép(or ngoặc đơn) bên trong chuỗi.
- Sử dụng dấu ngoặc kép bên trong giá trị chuỗi không khớp với dấu ngoặc kép xung quanh giá trị chuỗi.
- Ví dụ: sử dụng dấu ngoặc kép đơn nếu toàn bộ chuỗi được đặt trong dấu ngoặc kép và ngược lại.

```bash
var str1 = "This is 'simple' string";

var str2 = 'This is "simple" string';
```

- Nếu muốn bao gồm các dấu ngoặc kép trong một giá trị chuỗi giống như các dấu ngoặc kép xung quanh thì hãy sử dụng dấu gạch chéo ngược (\) trước dấu ngoặc kép bên trong giá trị chuỗi.

```bash
var str1 = "This is \"simple\" string";

var str2 = 'This is \'simple\' string';
```

## 4. String object
Như ở trên, chúng ta đã gán một chuỗi cho một biến. Javascript cũng cho phép chúng ta tạo một Object là String bằng cách sử dụng từ khóa `new`.

```bash
var str1 = new String();
str1 = 'Hello World';

// or

var str2 = new String('Hello World');
```
- Đối với ví dụ trên. Javascript sẽ trả về String Object thay thế cho primitive string type.
- Khuyến kích sử dụng primitive string thay vì String Object.

**Caution:**
Cẩn thận khi làm việc với String Object bởi vì khi so sách 2 String Object sử dụng (==) operator thì nó sẽ so sánh 2 Object chứ ko phải 2 giá trị.
```bash
var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true
str1 === str4; // true

typeof(str1); // object
typeof(str3); //string
```

## 5. Methods & Properties
Chuỗi JavaScript (Primitive hoặc String Object) bao gồm các properties(thuộc tính) và method(phương thức) mặc định mà bạn có thể sử dụng cho các mục đích khác nhau.

### 5.1. String Properties
| #Property | #Description                                             |
| :-------- | :------------------------------------------------------- |
| length    | Trả về độ dài của chuỗi                                  |

### 5.2. String Methods
| #Method                              | #Description                                             |
| :----------------------------------- | :------------------------------------------------------- |
| charAt(position)                     | Trả về ký tự ở vị trí đã chỉ định (in Number).|
| charCodeAt(position)                 | Trả về một số cho biết giá trị Unicode của ký tự tại vị trí đã cho (in Number).|
| concat([string,,])                   | Nối các giá trị ký tự của chuỗi được chỉ định (chỉ định nhiều chuỗi được phân tách bằng dấu phẩy) và trả về một chuỗi mới.|
| indexOf(SearchString, Position)      | Trả về chỉ số của lần xuất hiện đầu tiên của Chuỗi được chỉ định bắt đầu từ chỉ mục số đã chỉ định. Trả về -1 nếu không tìm thấy.|
| lastIndexOf(SearchString, Position)  | Trả về chỉ mục xuất hiện cuối cùng của Chuỗi tìm kiếm được chỉ định, bắt đầu từ vị trí đã chỉ định. Trả về -1 nếu không tìm thấy.|
| replace(searchValue, replaceValue)   | Tìm kiếm giá trị chuỗi đã chỉ định và thay thế bằng chuỗi Giá trị thay thế đã chỉ định và trả về chuỗi mới. Biểu thức chính quy cũng có thể được sử dụng làm searchValue.|
| search(RegExp)                       | Tìm kiếm 'đối sánh' dựa trên biểu thức chính quy được chỉ định.|
| slice(startNumber, endNumber)        | Trích xuất một phần của chuỗi dựa trên chỉ mục bắt đầu và kết thúc được chỉ định và trả về một chuỗi mới.|
| split(separatorString, limitNumber)  | Tách một chuỗi thành một mảng chuỗi bằng cách tách chuỗi thành các chuỗi con dựa trên dấu phân tách được chỉ định. Biểu thức chính quy cũng có thể được sử dụng làm dấu phân tách.|
| substr(start, length)                | Trả về các ký tự trong một chuỗi từ vị trí bắt đầu được chỉ định thông qua số ký tự được chỉ định (length).|
| toLowerCase()                        | Trả về giá trị chuỗi chữ thường.|
| toString()                           | Trả về giá trị của đối tượng String.|
| toUpperCase()                        | Trả về giá trị chuỗi chữ hoa.|
