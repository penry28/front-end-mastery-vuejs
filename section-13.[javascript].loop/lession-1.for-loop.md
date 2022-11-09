# JAVASCRIPT FOR LOOP

- Sử dụng vòng lập for để thực thi đoạn code nhiều lần.
- For-loop yêu cầu phải có 3 phần sau.
```md
Initializer: Khởi tạo biến đềm bắt đầu từ bao nhiều.
Condition: Chỉ định một điều kiện và phải trả về **true** để lập lại phần tiếp theo.
Iteration: Tăng hoặc giảm biến đếm đã được khởi tạo ở phần **Initializer**
```
Example: for loop
```bash
for (var i = 0; i < 5; i++)
{
    console.log(i);
}

# Output: 0 1 2 3 4
```
- Ở ví dụ trên, var **i = 0** là một câu lệnh khởi tạo nơi định nghĩa một biến i với giá trị 0. Ở phần thứ 2, **i < 5** là một điều kiện nơi để kiểm tra liệu nó có nhỏ hơn 5 hay không. Ở phần thứ 3 là câu lệnh lặp lại nơi sử dụng ++ để tăng giá trị của i lên 1 đơn vị. Và 3 phần này được ngăn cách với nhau bởi dấu ";"

- For loop nó cũng có thể sử dụng để lấy value của một array
Example: for loop get value from array
```bash
var arr = [10, 11, 12, 13, 14];

for (var i = 0; i < 5; i++)
{
    console.log(arr[i]);
}

# Output: 10 11 12 13 14
```

- Lưu ý: trong for-loop không yêu cầu phải chỉ định initializer, condition, biểu thức tăng dần trong dấu ngoặc. Có thể chỉ định initializer trước khi bắt đầu vòng lặp. Condition và increment increments có thể được chỉ định bên trong block của for-loop.

Example: for loop
```bash
var arr = [10, 11, 12, 13, 14];
var i = 0;

for (; ;) {

    if (i >= 5)
    break;

    console.log(arr[i]);

    i++;
}

# Output: 10 11 12 13 14
```
