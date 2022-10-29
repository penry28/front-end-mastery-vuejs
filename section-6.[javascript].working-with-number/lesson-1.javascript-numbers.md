# JavaScript Numbers: Integer, Float, Binary, Exponential, Hexadecimal, Octal.

Số là kiểu dữ liệu nguyên thủy được sử dụng cho các giá trị số nguyên dương hoặc âm, số thực, số nhị phân, số bát phân, hệ thập lục phân và số mũ trong JavaScript.

```bash
var num1 = 100; // integer
var num2 = -100; //negative integer

var num3 = 10.52; // float
var num4 = -10.52; //negative float

var num5 = 0xfff; // hexadecimal
var num6 = 256e-5; // exponential
var num7 = 030; // octal
var num8 = 0b0010001; // binary
```

## 1. Số nguyên
- Giá trị số nguyên sẽ chính xác lên đến 15 chữ số trong JavaScript.
- Các số nguyên có 16 chữ số trở đi sẽ được thay đổi và làm tròn lên hoặc xuống.

```bash
//16 digit integer
var int1 = 1234567890123456; //accurate

//17 digit integer
var int2 = 12345678901234569; //will be 12345678901234568

//16 digit integer
var int3 = 9999999999999998; //will be 9999999999999998

//16 digit integer, last digit 9
var int4 = 9999999999999999; //will be 10000000000000000
```

## 2. Số thực
```bash
var f1 = 1.22;

var f2 = -1.12;
```
