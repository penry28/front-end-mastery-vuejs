# USE STRICT MODE LÀ GÌ?

- "use strict" là một directive mới trong ES5.
- Dùng để chỉ định code sẽ được chạy ở chế độ "strict mode"

## 1. Khai báo
- Strict mode được khai báo bằng từ khóa "use strict"; ở đầu **một file javascript** hoặc đầu một **function**
- Việc khai báo ở đầu một file stript, để nó có phạm vi `global scope` (Tất cả code trong file này đều được thực thi ở chế độ strict mode)

- Vd khi không có strict mode
```bash
x = 3.14;
console.log(x); // 3.14
```
- Vd khi thêm strict mode
```bash
"use strict";
x = 3.14; // Hiển thị lỗi vì biến x chưa được khai báo.
console.log(x);
```

```bash
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // hiển thị lỗi vì biến y chưa được khai báo.
}
```

- Khai báo trong một function, nó sẽ có phạm vi `local scope` (Chỉ chạy đoạn trong function chỉ định ở chế độ strict mode)

```bash
x = 3.14; // chưa khai báo x nhưng vẫn sẽ thực thi và ko hiển thị lỗi.
console.log(x); // 3.14
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // Hiển thị lỗi do biến y chưa được khai báo.
  console.log(y);
}
```

## Tại sao lại dùng strict mode
- Làm cho code của chúng ta rõ ràng hơn.
- Giúp viết code javascript "an toàn" một cách dễ dàng hơn. (Bởi vì khi mà viết sai không an toàn thì chương trình sẽ không được thực thi và báo lỗi).
- Strict mode nó sẽ thay đổi những "bad syntax" xấu trước đó thành "Real Error".

## Những cú pháp không được phép khi ở chế độ strict mode
- không cho phép sử dụng biến nhưng chưa được khai báo.
```bash
"use strict";
x = 3.14; // Hiển thị lỗi.
```

- Không cho phép sử dụng một object nhưng chưa được khai báo.
```bash
"use strict";
x = {p1:10, p2:20}; // Hiển thị lỗi
```

- Không có phép xóa một biến (hoặc object)
```bash
"use strict";
let x = 3.14;
delete x; // Hiển thị lỗi
```

- Không cho phép xóa một function
```bash
"use strict";
function x(p1, p2) {};
delete x; // Hiển thị lỗi.
```

- Không cho phép duplicate parameter.
```bash
"use strict";
function x(p1, p1) {};   // Hiển thị lỗi.
```

- Không được phép khai báo ký tự số bác phân.
```bash
"use strict";
let x = 010; // Hiển thị lỗi.
```

- Không được phép khai báo các ký tự thoát hệ bác phân.
```bash
"use strict";
let x = "\010"; // Hiển thị lỗi.
```

- Không được phép khi vào những thuộc tính chỉ được phép đọc.
```bash
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14; // Hiển thị lỗi.
```

- Không được phép ghi vào thuộc tính chỉ nhận.
```bash
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14; // Hiển thị lỗi
```

- Không được phép xóa thuộc tính không thể xóa.
```bash
"use strict";
delete Object.prototype; // hiển thị lỗi.
```

- Không được sử dụng những từ khóa của Javascript làm tên biến, tên hàm, ...
* implements
* interface
* let
* package
* private
* protected
* public
* static
* yield
```bash
"use strict";
let public = 1500; // Hiển thị lỗi.
```