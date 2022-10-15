# Bài tập

## BT1. Đếm số ký tự trong chuỗi
```bash
var txt = "freetuts.net";
var sln = txt.length; //
```

## BT2. Tìm kiếm chuỗi trong chuỗi
```bash
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); //
```

```bash
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate"); //
```

```bash
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
```

## BT3. Có báo lỗi không, tại sao?
```bash
var domain = 'freetuts.net - 'web học lập trình'';
```

## BT4. Nỗi chuỗi
```bash
var message = "chào mừng bạn" + "đến với freetuts.net";
console.log(message); //
```

```bash
var message1 = "chào mừng bạn";
var message2 = "đến với freetuts.net";

var message = message1 + message2;
console.log(message); //
```

## BT5. Xử lý string trên nhiều dòng trong Javascript
- Cái nào đúng, cái nào sai?
```bash
//
var message = "Chào mừng bạn đến với"
              + "freetuts.net";

//
var message = "Chào mừng bạn đến với
               freetuts.net";

//
var message = "Chào mừng bạn đến với \
            freetuts.net";

//
var message = `Chào mừng bạn đến với
            freetuts.net`;
```

## BT6. Ép chuỗi string trong javascript
```bash
var number = 12;
console.log(typeof number);

number = number.toString();
console.log(typeof number);
```
