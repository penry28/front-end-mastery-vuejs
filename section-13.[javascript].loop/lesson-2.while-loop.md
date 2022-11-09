# JAVASCRIPT - WHILE LOOP

- Javascript cũng bao gồm while-loop để thực thi đoạn code nhiều lần khi nó thỏa mãn một điều kiện cụ thể.
- Không giống vs for-loop, while-loop nó chỉ yêu cầu condition expression.

Syntax:
```bash
while(condition expression)
{
    /* code to be executed
    till the specified condition is true */
}
```

Example: while loop
```bash
var i =0;

while(i < 5)
{
    console.log(i);
    i++;
}

# Output: 0 1 2 3 4
```

- Như đã thấy ở vd trên, while-loop sẽ thực thi đoạn code trong block cho đến khi **i < 5** trả về false. Initialization statement cho counter sẽ phải được khởi tạo trước khi while-loop thực thi và counter phải được tăng bên trong white-loop block.

