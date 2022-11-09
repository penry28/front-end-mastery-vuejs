# JAVASCRIPT - DO WHILE

- Javascript cũng có thêm một vòng lập while khác, chính là do-while loop.
- Do-while loop về cơ bản nó tương tự với while-loop, chỉ khác ở một chỗ duy nhất là nó sẽ đi thực thi condition expression sau khi thực thi đoạn code trong while block. Vì thế do-while loop nó sẽ thực thi đoạn code trong block ít nhất một lần.

Syntax:
```bash
do{

    //code to be executed

}while(condition expression)
```

Example: do-while loop
```bash
var i = 0;

do{

    alert(i);
    i++;

} while(i < 5)

# Output: 0 1 2 3 4
```

- Theo dõi vd bên dưới ta thấy do-while sẽ thực thi đoạn code code thập chí nếu condition là false ở ngay lần lặp đầu tiên.

Example: do-while loop
```bash
var i =0;

do{

    alert(i);
    i++;

} while(i > 1)

#Output: 0
```
