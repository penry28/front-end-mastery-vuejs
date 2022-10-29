# JavaScript if else Condition.

## 1. If condition (Câu lệnh điều kiện)
Sử dụng cầu lệnh điều kiện nếu bạn muốn thực thi điều gì đó dựa trên điều kiện nào đó.

Syntax:
```bash
# condition expression: Biểu thức điều kiện.
if (condition expression) {
    // Đoạn code được thực thi nếu biển thức điều kiện là đúng.
}
```

Example 1:
```bash
if (1 > 0) {
    alert("1 is greater than 0");
}

if (1 < 0) {
    alert("1 is less than 0");
}
```

Example 2:
```bash
var variable_1 = 1000;
var variable_2 = 500;

if (variable_1 > variable_2) {
    alert("Variable 1 is greater than variable 2");
}
```

## 2. Cẩu thận khi xử dụng biển thức so sánh == và ===.
Xem xét biển thức bên dưới hãy cho biết kết quả và tại sao bạn là nghĩ như vậy.
```bash
if (1 == "1") {
    alert("== operator does not consider types of operands");
}

if (1 === "1") {
    alert("=== operator considers types of operands");
}
```

### 3. Else condition.
Xử dụng câu lệnh **else** khi bạn muốn thực thi đoạn code mỗi khi biểu thức điều kiện **if** là **false**

Syntax:
```bash
if (condition expression) {
    //Execute this code..
}
else {
    //Execute this code..
}
```

Example 1:
```bash
var variable_1 = 500;
var variable_2 = 1000;

if (variable_1 > variable_2) {
    alert("Variable 1 is greater than variable 2");
}
else {
    alert("Variable 1 is less than or equal to variable 2");
}
```

## 4. Else if condition
Xử dụng "if else" khi bạn muốn thêm một điều kiện thứ 2 ngay sau thực thi "if"

Syntax:
```bash
if (condition expression) {
    //Execute this code block
}
else if (condition expression){
    //Execute this code block
} else {
    //Execute this code block
}
```

Example:
```bash
var variable_1 = 500;
var variable_2 = 1000;

if (variable_1 > variable_2) {
    alert("Variable 1 is greater than variable 2");
}
else if (variable_1 === variable_2) {
    alert("Variable 1 is equal variable 2");
} else {
    alert("Variable 1 is less than or equal to variable 2");
}
```

## 5 Ternary operator (Biểu thức 3 ngôi)

Syntax:
```bash
condition ? <executed if true> : <executed if false>
```