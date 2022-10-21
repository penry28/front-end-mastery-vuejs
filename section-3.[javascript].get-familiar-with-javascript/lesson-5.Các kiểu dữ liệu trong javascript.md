# CÁC KIỂU DỮ LIỆU TRONG JAVASCRIPT

## 1. Data types
Trong JS có 6 kiểu dữ liệu cơ bản:

* Number
* Boolean
* String
* Null
* Undefined
* Object

<img src="https://images.viblo.asia/3b500a63-bb8b-4ee5-b0bb-619419a7e177.png" alt="vue">

Mặc dù JS là ngôn ngữ weak type, không có nghĩa là nó không có khái niệm kiểu dữ liệu. JS chỉ không phải chỉ định rõ ràng kiểu và có khả năng ép kiểu linh hoạt, nên nó được gọi là weak typing (kiểu yếu).

### 1.1. Primitive types
Trong 6 kiểu trên, 5 kiểu đầu còn được gọi là primitive types (kiểu nguyên thủy), và kiểu object là non-primitive. Kiểu nguyên thủy chỉ thuần chứa dữ liệu, ví dụ

```bash
let x = 10;
let s = "Hello";
let z = true;
```

Và các kiểu primitive cũng có thể có method và property như object, nhưng thực sự không phải. Đó là trick của JS, khi chúng ta dùng tới bất kì property hoặc method nào, JS sẽ biến đối tượng primitive thành một wrapper. Wrapper là kiểu primitive, được gói thành một object và sử dụng như object, do đó nó có thuộc tính và phương thức.

```bash
let x = new Number(10);
let s = new String("Hello");
let z = new Boolean(true);
```

Tuy nhiên, không nên sử dụng dạng như trên. Nó vừa gây rối code, vừa dài dòng không cần thiết, lại vừa sinh ra một số vấn đề khác. Ví dụ như phép so sánh hai kiểu wrapper sẽ luôn trả về false, vì JS không so sánh value chứa bên trong.

Và đối với wrapper, có thể dùng method valueOf() để lấy ra nội dung primitive được gói bên trong.

```bash
let x = new Number(10);
let value = x.valueOf(); # 10
```

### 1.2. Object types
Kiểu dữ liệu còn lại là object, có thể chứa thuộc tính (property) và phương thức (method). Object phải được khởi tạo bằng từ khóa new và Object constructor.

```bash
let obj = new Object();
```

Các phiên bản JS mới hơn cho phép sử dụng cú pháp dấu ngoặc {} để tạo object gọn gàng hơn.

```bash
let obj = {
    ...
}
```

***Từ kiểu object, có thể phát sinh thêm nhiều kiểu object khác, như mảng (array) cũng là object, function cũng là object (mặc dù tên kiểu là function), Date cũng là object,..***
