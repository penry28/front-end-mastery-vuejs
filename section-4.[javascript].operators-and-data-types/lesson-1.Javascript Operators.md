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

- Ex:
```bash
var x = 5, y = 10;

var z = x + y; //performs addition and returns 15

z = y - x; //performs subtraction and returns 5

z = x * y; //performs multiplication and returns 50

z = y / x; //performs division and returns 2

z = x % 2; //returns division remainder 1
```

### 1.1. Toán tử `++` và `--` là toán tử một ngôi
- Nó chỉ hoạt động với toán hạng bên trái hoặc bên phải
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
