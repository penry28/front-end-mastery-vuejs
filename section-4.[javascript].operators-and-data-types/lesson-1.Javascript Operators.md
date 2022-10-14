# JAVASCIPRT OPERATORS

- Javascript cùng với những ngôn ngữ khác đó đề có Operators.
- Một `operator` sẽ biển diễn một vài `operation` trên một hoặc nhiều `operands` (data value) để cho ra `result`.

vd
```md
a + b = c;
- a, b: operands
- +: operator
- c: result
```

## 1. Toán tử số học (Arithmetic Operators)
| #Operator | #Description                                             |
| :-------: | :------------------------------------------------------- |
| +         | Toán tử cộng                                             |
| -         | Toán tử trừ                                              |
| *         | Toán tử nhân                                             |
| /         | Toán tử chia lấy phần nguyên                             |
| %         | Toán tử chia lấy phần dư                                 |
| ++        | Toán tử tăng dần. Tăng giá trị toán hạng lên một.        |
| --        | Toán tử giảm dần. Giảm giá trị một.                      |

```bash
var x = 5, y = 10;

var z = x + y; //performs addition and returns 15

z = y - x; //performs subtraction and returns 5

z = x * y; //performs multiplication and returns 50

z = y / x; //performs division and returns 2

z = x % 2; //returns division remainder 1
```

### 1.1. Toán tử `++` và `--`
- Là toán tử một ngôi.
- Nó chỉ hoạt động với toán hạng bên trái hoặc bên phải.
- `x++`: sẽ tăng giá trị của x lên một đơn vị khi chương trình thực hiện câu lệnh tiếp theo.
- `x--`: sẽ giảm giá trị của x xuống một đơn vị khi chương trình thực hiện câu lệnh tiếp theo.
- `++x`: sẽ trăng giá trị của x lên một đơn vị ngay khi chương trình thực thi câu lệnh đó.
- `--x`: sẽ giảm giá trị của x xuống một đơn vị ngay khi chương trình thực thi câu lệnh đó.
```bash
var x = 5;

x++; //post-increment, x will be 5 here and 6 in the next line

++x; //pre-increment, x will be 7 here

x--; //post-decrement, x will be 7 here and 6 in the next line

--x; //pre-decrement, x will be 5 here
```

## Nối chuỗi (String Concatenation)
Sử dụng toán tử `+` để nối chuỗi hoặc các ký tự lại với nhau.

```bash
var a = 5, b = "Hello ", c = "World!", d = 10;

a + b; //returns "5Hello "

b + c; //returns "Hello World!"

a + d; //returns 15

b + true; //returns "Hello true"

c - b; //returns NaN; - operator can only used with numbers
```

## Toán tử so sánh (Comparison Operators)
Javascript cung cấp những toán tử so sánh hai operands(toán hạng) và trả về giá trị `true` hoặc `false`.

| #Operator | #Description                                                                                  |
| :-------: | :-------------------------------------------------------------------------------------------- |
| ==        | So sánh sự bằng nhau của 2 toán hạng nhưng không xem xét đến kiểu dữ liệu                     |
| ===       | So sánh sự bằng nhau của 2 toán hạng và có xem xét đến kiểu dữ liệu                           |
| !=        | So sánh sự khác nhau của 2 toán hạng nhưng không xem xét đến kiểu dữ liệu                     |
| !==       | So sánh sự khác nhau của 2 toán hạng và có xem xét đến kiểu dữ liệu                           |
| >         | Trả về true nếu giá trị bên trái lớn hơn giá trị bên phải; nếu không, trả về false            |
| <         | Trả về true nếu giá trị bên phải lơn hơn giá trị bên trái; nếu không, trả về false            |
| >=        | Trả về true nếu trái trị bên trái lơn hơn hoặc bằng giá trị bên phải; nếu không trả về false  |
| <=        | Trả về true nếu trái trị bên phải lơn hơn hoặc bằng giá trị bên trái; nếu không trả về false  |

```bash
var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true
```

## Toán tử Logic (Logical Operators)
Trong Javascript, Logical Operators được dùng để kết hợp vs hai hoặc nhiều điều kiện lại với nhau.

| #Operator | #Description                                                                                  |
| :-------: | :-------------------------------------------------------------------------------------------- |
| `&&`      | `&&` được gọi là toán tử AND. Nó kiểm tra xem hai toán hạng có khác 0 hay không (0, false, undefined, null hoặc "" được coi là 0). Nó trả về 1 nếu chúng khác 0; nếu không, trả về 0.|
| **/||**    | **||** được gọi là toán tử OR. Nó kiểm tra xem bất kỳ một trong hai toán hạng có khác 0 hay không (0, false, undefined, null hoặc "" được coi là 0). Nó trả về 1 nếu bất kỳ một trong số chúng khác 0; nếu không, trả về 0.|
| `!`       |! được gọi là toán tử NOT. Nó đảo ngược kết quả boolean của toán hạng (hoặc điều kiện). `!false` trả về `true` và `!true` trả về `false`|

```bash
var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true
```
