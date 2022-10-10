# SYNTAX TRONG JAVASCRIPT

## 1. Javascript là gì? Javascript dùng để làm gì?
JavaScript (viết tắt là JS) là một ngôn ngữ chương trình thông dịch. Javascript được hỗ trợ bởi hầu hết các trình duyệt web như Chrome, Firefox, IE, Opera.v.v… Kể cả các trình duyệt trên điện thoại thì giờ cũng đã hỗ trợ đầy đủ Javascript.

Thuở khai sinh, Javascript được sử dụng để phát triển front end, xây dựng các ứng dụng trên trình duyệt web. Nhưng nay, với sự ra đời của NodeJS, Javascript có thể sử dụng để xây dựng cả các ứng dụng phía back-end nữa.

Có thể nói rằng, Javascript là ngôn ngữ lập trình có phổ biến nhất hiện nay. Với lập trình viên Javascript, giờ đây có thể xây dựng được ứng dụng từ client tới server. Hay nói cách khác là Full stack enginer với chỉ một ngôn ngữ.

## 2. Những cách viết code trong javascript?

### A. Viết trực tiếp trong file HTML
```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<script>
    console.log('hello world!');
</script>
</body>
</html>
```

### B. Tạo ra một file riêng và viết Javascript trong đó
Ta có một cấu trúc thư mục như sau:

```bash
domain.com
    - public
        - js
            - app.js
        - css
    - index.html
```

Để có thể viết javascript trong một file khác thì chúng ta cần link đường dẫn của file đó vào

```bash
# Trong file index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>domain.com</h1>
    <script src="./public/js/app.jss"></script>
</body>
</html>

# Trong file app.js
console.log('hello world!');
```
