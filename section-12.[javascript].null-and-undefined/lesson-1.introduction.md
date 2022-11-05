# NULL AND UNDEFINED IN JAVASCRIPT

- Javascript bao gồm thêm 2 loại primitive type values - null and undefined.

## null
- Gán null cho một biến để chứng tỏ hiện tại biến đó không có bất kỳ giá trị nào, nhưng về sau nó sẽ có.
- Giá trị null nghĩa là không có giá trị.

Example: Assign Null to variable.
```bash
var myVar = null;

alert(myVar); // null
```
- Ở ví dụ trên, giá trị null được gán cho biến myVar. Có nghĩa là chúng ta đã định nghĩa một biến nhưng nó không được gán cho một giá trị nào.
- Nếu bạn thử tìm DOM element sử dụng **document.getElelementByID** như vd, và nếu DOM không được tìm thấy nó sẽ trả về null. Vì thế chúng ta nên kiểm tra để chắc chắn nó có giá trị trước khi thực hiện hành động với DOM hiện tại.

Example: Check null before handle with DOM.
```bash
var saveButton = document.getElementById("save");

if (saveButton !== null)
        saveButton.submit();
```

- Giá trị null sẽ được coi là **false** trong biểu thức điều kiện. Vì vậy bạn đừng xử dụng kiểu so sánh === or !== để check null cho giá trị.

Example: null in conditional expression
```bash
var myVar = null;

if (myVar)
    alert("myVar is not null');
else
    alert("myVar is null" );
```

## undefined
- Undefined cũng thuộc primitive type trong javascript.
- Một biến hoặc một object có giá trị undefined khi nó không được gán trị nào trước khi nó được xử dụng.
- Chúng là có thể gọi một biến hoặc một object với giá trị undefined bằng "lack of value" or "unknown value"

Example: Undefined
```bash
var myVar;

alert(myVar); // undefined
```

- Ở vd trên chúng ta không gán bất kỳ giá trị nào cho biến myVar.
- Called. variable "myVar" lacks a value.
- Chúng ta sẽ nhận giá trị undefined khi gọi một property không tồn tại (non-existent) of method of an object.

Example: undefined
```bash
function Sum(val1, val2)
{
    var result = val1 + val2;
}

var result = Sum(5, 5);
alert(result);// undefined
```
- Ở ví dụ trên, func Sum không trả về bất kỳ giá trị nào, nhưng chúng ta vẫn cố gắn gán giá trị trả về của func đó cho một biến. Vì thế trong trường hợp đó giá trị trả về sẽ là undefined.
- Trong trường hợp nếu chúng ta truyền thiếu tham số cho func, thì param thiếu đó sẽ là undefined.

Example: function less params.
```bash
function Sum(val1, val2)
{
    return val1 + val2;  // val2 is undefined
}

Sum(5);
```

- Giá trị undefined sẽ được xác định là false khi xử dụng trong biển thức điều kiện (condition expression).

Example: undefined in Conditional Expression.
```bash
var myVar;

if (myVar)
    alert("myVar evaluates to true");
else
    alert("myVar evaluates to false");
```

**Một số điều quan trọng của null và undefined dẫn tới lỗi runtime**
- null và undefined là một trong những lí do chính tạo ra lỗi runtime trong javascript application.
- Lỗi này xảy ra khi chúng ta không kiểm tra giá trị là không xác định trước khi xử dụng chúng.
- Nếu chúng ta không chắc chắn biến đó sẽ luôn luôn có giá trị, thì giải pháp tốt nhất là kiểm tra giá trị của biến có phải là null or undefined hay không trước khi sử dụng chúng.