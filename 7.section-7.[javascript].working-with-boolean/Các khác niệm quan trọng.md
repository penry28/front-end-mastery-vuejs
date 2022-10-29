# Các khái niệm quan trọng.
- Boolean là kiểu dữ liệu nguyên thủy.
- Chỉ có 2 giá trị là true và false

```bash
var _bool = true;
if (_bool == true) {
    console.log('ket qua 1');
} else {
    console.log('ket qua 2');
}

if (_bool) {
    console.log('ket qua 1');
} else {
    console.log('ket qua 2');
}
```

- Tất các những giá trị là `0`, `null`, `undefined`, `false` đều là false.
```bash
if (undefined) {
    console.log('ket qua dung');
} else {
    console.log('ket qua sai');
}
```

- Phủ định
```bash
var _bool = false;

if (!_bool) {
    console.log('ket qua 1');
} else {
    console.log('ket qua 2');
}
```
