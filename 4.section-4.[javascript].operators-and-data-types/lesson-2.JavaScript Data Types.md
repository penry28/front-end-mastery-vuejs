# JAVASCIPRT DATA TYPES

## 1. Overview
- JavaScript bao gồm các kiểu dữ liệu tương tự như các ngôn ngữ lập trình khác như Java hoặc C #.
- JavaScript là ngôn ngữ động và được lỏng lẻo trong việc khai báo kiểu dữ liệu. Có nghĩa là nó không yêu cầu chỉ định kiểu dữ liệu cho biến khai báo.
- Một biến trong JavaScript có thể được gán bất kỳ loại giá trị nào.

```bash
var myvariable = 1;  // numeric value

myvariable = 'one'; // string value

myvariable = 1.1; // decimal value

myvariable = true; // Boolean value

myvariable = null; // null value
```

## 2. Primitive Data Types
Các kiểu dữ liệu nguyên thủy là cấp thấp nhất của giá trị dữ liệu trong JavaScript.
Toán tử `typeof` có thể được sử dụng với các kiểu dữ liệu nguyên thủy để biết kiểu của một giá trị.

Sau đây là các kiểu dữ liệu nguyên thủy trong JavaScript:

| #Data Type | #Description                                             |
| :--------: | :------------------------------------------------------- |
| String     |Chuỗi là một nội dung văn bản được bao bọc bên trong ***''*** hoặc ***""*** hoặc ***``*** (dấu tích) <br />**Ví dụ:** 'Hello World!', "This is a string", etc.|
| Number     | Number là một giá trị số. <br />**Ví dụ:** 100, 4521983, v.v.|
| BigInt     |BigInt is a numeric value in the arbitrary precision format. <br />**Ví dụ:** 453889879865131n, 200n, etc.|
| Boolean    |Boolean là một kiểu dữ liệu logic chỉ có hai giá trị, đúng hoặc sai.|
| Null       |Giá trị null biểu thị sự vắng mặt của giá trị. <br />**Ví dụ:** `var str = null;`|
| Undefined  |undefined là giá trị mặc định của một biến chưa được gán bất kỳ giá trị nào.<br />**Ví dụ:** Trong khai báo biến, `var str ;`, không có giá trị nào được gán cho str. Vì vậy, loại `str` có thể được kiểm tra bằng cách sử dụng `typeof (str)` sẽ trả về `undefined`.|

## 2. Structural Data Types
Các kiểu cấu trúc dữ liệu chứa một số kiểu cấu trúc dữ liệu nguyên thủy.

| #Data Type | #Description                                             |
| :--------: | :------------------------------------------------------- |
| Object     | Một đối tượng chứa nhiều giá trị về thuộc tính và phương thức. <br />**Ví dụ:** <br /><code>var person = { firstName: "James", lastName: "Bond", age: 15 };</code>|
| Date       | Đối tượng Date đại diện cho ngày và giờ bao gồm ngày, tháng, năm, giờ, phút, giây và mili giây. <br />**Ví dụ:** <br /><code>var today = new Date("25 July 2021");</code>|
| Array      | An array stores multiple values using special syntax. <br />**Ví dụ:** <br /><code>var nums = [1, 2, 3, 4];</code>|