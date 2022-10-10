# CÁCH VIẾT COMMENT CHUẨN TRONG JAVASCRIPT

## 1. Comment trong Javascript

<img src="https://vntalking.com/wp-content/uploads/2019/08/cu-phap-javascript-co-ban-2.png" alt="vue">

Trong bất kể ngôn ngữ thì comment là một phần không thể thiếu. Comment không chỉ giúp cho người đọc mã nguồn nhanh chóng hiểu được ý nghĩa của hàm, biến đó làm gì. Comment còn giúp bạn xuất ra tài liệu hướng dẫn, mô tả về code (thường áp dụng cho các thư viện muốn làm tài liệu mô tả APIs).

Comment không được thực thi bởi trình duyệt. vì vậy, bạn thoải mái mà viết chú thích mà không sợ code bị lỗi hay in ra màn hình.

Javascript hỗ trợ 2 kiểu comment:
- Single Line Comments (comment một dòng)
- Multi-line Comments (comment nhiều dòng).

Bạn có thể xem minh họa bên dưới để hiểu rõ hơn.

```bash
var x = 5;      // Khai báo biến x và cung cấp giá trị cho nó là 5
// Khai báo biến y và cung cấp giá trị cho nó là x+ 2
var y = x + 2;

/* Đây là ví dụ về comment trên nhiều dòng trong JavaScript
  code  */
document.getElementById("test_el").innerHTML = "Some text";
document.getElementById("test_el2").innerHTML = "More text";
```

## 2. Một vài lời khuyên về comment:
- Nên Comment để giải thích “Tại sao” lại viết code đó thay vì đoạn code làm như thế nào. Vì người đọc code là đủ hiểu code làm như nào thế nào rồi.
- Không comment những đoạn code mà đọc code đó đã quá rõ ràng rồi.
- Không comment để lấp liếm vấn đề của đoạn code. Tức là người code sau cần phải đọc comment sử dụng đúng đoạn code nếu không sẽ bị lỗi. Thay vì đó, bạn nên viết code lại cho chặt chẽ hơn.
- Xóa ngay comment khi đoạn code đi kèm đã bị xóa để tránh dư thừa comment.
