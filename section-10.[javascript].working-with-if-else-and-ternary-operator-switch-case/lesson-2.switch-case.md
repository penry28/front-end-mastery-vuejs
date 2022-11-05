# JavaScript switch.
- **Switch** là một câu lệnh điều điền giống với câu lệnh **if**
- Switch sẽ hữu ích khi bạn muốn thực thị một hoặc nhiều khối code (code blocks)
dựa trên giá trị trả về của một biểu thức xác định.

```md
Tại sao có if-else rồi mà tạo switch-case để làm gì nữa
- Những vẫn đề nào if-else làm được thì switch-case cũng làm được
- Những vẫn đề nào switch-case làm được thì if-else cũng làm được
- Điều qua trọng là gì
--- Những vẫn đề nào if-else làm được thì switch-case sẽ làm tốt hơn, gọn hơn, nhanh hơn, nhìn vào dễ hiểu hơn.
--- Những vẫn đề nào switch-case làm được thì if-else sẽ làm tốt hơn, gọn hơn, nhanh hơn, nhìn vào dễ hiểu hơn.
```

Syntax:
```bash
switch (expression or literal value) {
    case 1:
        //code to be executed
      break;
    case 2:
        //code to be executed
        break;
    case n:
        //code to be executed
        break;
    default:
        //default code to be executed
        //if none of the above case executed
}
```

Example 1: Switch Statement
```bash
var a = 3;

switch (a) {
    case 1:
        alert('case 1 executed');
        break;
    case 2:
        alert("case 2 executed");
        break;
   case 3:
        alert("case 3 executed");
        break;
    case 4:
        alert("case 4 executed");
        break;
    default:
        alert("default case executed");
}
```

Example 2: Switch Statement
```bash
var a = 3;

switch (a/3) {
    case 1:
        alert("case 1 executed");
        break;
    case 2:
        alert("case 2 executed");
        break;
    case 3:
        alert("case 3 executed");
        break;
    case 4:
        alert("case 4 executed");
        break;
    default:
        alert("default case executed");
}
```

Example 3: Switch with String Type Case
```bash
var str = "bill";

switch (str) {
    case "steve":
        alert("This is Steve");
    case "bill":
        alert("This is Bill");
        break;
    case "john":
        alert("This is John");
        break;
    default:
        alert("Unknown Person");
        break;
}
```

Exampele 4: Combined switch Cases
```bash
var a = 2;

switch (a) {
    case 1:
    case 2:
    case 3:
        alert("case 1, 2, 3 executed");
        break;
    case 4:
        alert("case 4 executed");
        break;
    default:
        alert("default case executed");
}
```
