# BIẾN VÀ CÁCH ĐẶT TÊN BIẾN TRONG JAVASCRIPT

## 1. Cách đặt tên biến, hàm

Trong Javascript, định danh (identifiers) được sử dụng để đặt tên biến, từ khóa, hàm và labels.

Việc định danh nói chung là theo quy tắc sau:

- Ký tự đầu tiên của định danh phải là chữ cái (a-z, A-Z) hoặc ký tự $ hoặc dấu gạch dưới (_)
- Không được sử dụng chữ số làm ký tự đầu tiên của định danh.

Nói tóm lại, việc đặt tên biến, hàm… phải tuân theo quy tắc trên.

```bash
var person; // Đúng
var _person; // Đúng
var __person; // Đúng
var person1; // Đúng

var 10persion; // Sai
```

```md
# ⚠️ Lưu ý: Không được sử dụng chữ số làm ký tự đầu tiên khi đặt tên biến, hàm…
```

Ngoài ra, các định danh có phân biệt chữ hoa với chữ thường nhé.

```bash
// Đây là 2 biến hoàn toàn khác nhau.
var Name = "Joe";
var name = "John";
```

Về quy tắc đặc tên các đinh danh, thì có nhiều trường phái khác nhau. Điển hình có 2 loại:
- Dùng dấu gạch dưới. Ví dụ: first_name
- Và trường phái camel case, tức là viết chữ in hoa với mỗi từ đơn. Ví dụ: FirstName

**Camel case** là trường phái được sử dụng phổ biến nhất, không chỉ Javascript mà cả các ngôn ngữ khác nữa. Và nhớ rằng, trong Javascript thì định danh thường bắt đầu với chữ thường (Ví dụ: firstName)

## 2. Cách khai báo biến
Javascript hỗ trợ 3 cách để khai báo một biến, đó là sử dụng các từ khóa: let, var và const

Trong đó:

- Const: được dùng để khai báo hằng số, giá trị của nó không thay đổi trong suốt chương trình. Nó giống với từ khóa final của Java vậy.
- var: biến được khai báo với từ khóa var sẽ được truy cập ở bất kể đâu trong chương trình.
- let: từ khóa này giúp cho biến chỉ có thể được truy xuất bên trong phạm vi block quanh nó (block được định nghĩa bởi dấu ngoặc nhọn {} ).

## 3. Kiểu dữ liệu của biến
Khi bạn đọc đến phần khai báo biến, bạn sẽ thấy ngạc nhiên rằng: Không thấy định nghĩa kiểu dữ liệu của biến khi khai báo, vậy sao biết biến đó có kiểu dữ liệu là gì? Về vấn đề này thì Javascript không có chặt chẽ như Java.

Với Javascript, kiểu dữ liệu sẽ được xác định một cách tự động khi chương trình thực thi. Điều này có nghĩa là một biến có thể có nhiều kiểu dữ liệu ở những thời điểm khác nhau.

```bash
var myTest = 123 ; // myTest là một số
var myTest = "Xin chào các bạn tôi là một DEVELOPER"; //myTest là một string/text
var myTest = false;  // myTest là một boolean
```

Theo tiêu chuẩn **[ES7](https://en.wikipedia.org/wiki/ECMAScript)**, có 7 kiểu dữ liệu:

```bash
Kiểu boolean
Kiểu null
Kiểu undefined
Kiểu số (int)
Kiểu chuỗi (String)
Kiểu Symbol (mới trong ECMAScript 6)
Kiểu đối tượng (Object)
```

## 4. Toán tử trong Javascript
Ví dụ

```bash
// Ta có phép tính như sau:
const a = 5
const b = 6
var c = a + b
console.log("c = " + c) //màn hình console sẽ in ra: c = 11
```

Trong ví dụ trên, ta thấy phép tính a + b, thì phép tính cộng ấy được gọi là toán tử (operator).

Javascript hỗ trợ đầy đủ các loại toán tử tính toán và kết hợp.

Dưới đây là bảng tất cả các toán tử được hỗ trợ:

<img src="https://vntalking.com/wp-content/uploads/2019/08/cu-phap-javascript-co-ban-1.png" alt="vue">
