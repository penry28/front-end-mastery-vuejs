# KIẾN TRÚC CỦA MỘT HỆ THỐNG PHẦN MỀM

## 1. Tổng quan về kiến trúc hệ thống.

```md
-Một hệ thống bất kì nào đó đều sẽ có 1 kiến trúc vật lý riêng và chúng đều được chia làm 2 phần chính là CLIENT và SERVER
-CLIENT tức là trình duyệt web.
-SERVER (máy chủ) có thể hiểu như là 1 cái máy tính của bạn chứa RAM, CPU, ổ cứng... và các phần mềm phục vụ cho việc phát triển web.
-Máy bình thường cũng có thể trở thành 1 máy chủ nếu nó được cài phần mềm Server Software và kết nối vs internet
```

## 2. Luồng xây dựng kiến trúc hệ thống từ nhỏ tới lớn

### A. Khi gõ facebook.com thì chuyện gì sẽ xảy ra?
```md
DNS (Domain Name System) sẽ dịch domain facebook.com -> địa chỉ IP(157.240.7.35)
và trình duyệt sẽ tìm đến cái server có địa chỉ IP đó và trả về trang web cho chúng ta.
```
<img src="https://images.viblo.asia/full/58ec3b4a-3caf-40ee-a589-173b395a1c6e.png" alt="vue">

### B. Đối với hệ thống nhỏ
```md
Ví dụ: Tin tức, ứng dụng đồ án,các dự án chỉ truyền tải nội dung....

- Với hệ thống nhỏ thì tất cả sẽ làm trong 1 máy chủ (webserver, database server)
tức là server chúng ta sẽ chứa và đảm nhiệm cũng như xử lý hết các công việc từ trình duyệt yêu cầu.
```
<img src="https://images.viblo.asia/a0b3ccbe-a123-42d4-bf68-7141c11e523f.png" alt="vue">

### C. Đối với hệ thống trung bình
```md
Ví dụ: dự án công ty, web bán hàng,.....

- Server sẽ được tách ra làm 2
    - WebServer: Đảm nhiệm xử lý yêu cầu bên server tức là nó sẽ sử dụng một ngôn ngữ (PHP, Java,...) tương thích với nó thường sẽ có 1 framework (Laravel,...) để xử lý nghiệp vụ và logic.
    - Database Server: Dùng để chứa dữ liệu

- Tại sao lại cần phải chia ra làm 2.
    - Toàn vẹn dữ liệu
    - Giảm tải công việc cho máy chủ

- vd (Toàn vẹn dữ liệu):
    - Database là một nơi rất quan trọng dùng để lưu trữ dữ liệu của khách hàng, vd trong trường hợp ta đặt chung webserver
    và database ở chung thì nếu hacker tấn công vào được webserver hoặc webserver dín virut
    và dẫn đến database bị xóa hết dữ liệu thì đó là một việc rất nguy hiểm.
- vd (Giảm tải công việc cho máy chủ)
    - Giống như việc khi một người làm 2 việc cùng lúc thì độ hiệu quả sẽ không cao và chất lượng công việc cũng không tốt
    nhưng nếu ta chia ra mỗi người một việc, ai giỏi việc nào nhất thì chỉ cần làm duy nhất việc đó thì hiệu quả mang lại sẽ rất cao
    nhưng bù lại thì chi phí cần chi trả sẽ cao hơn do chúng ta phải cần tới 2 người thay vì 1 người làm 2 việc.
```
<img src="https://images.viblo.asia/37a16ad6-54f9-48d5-a391-40f1d783ba92.png" alt="vue">

### D. Đối với hệ thống lớn
```md
Ví dụ: Facebook, tiki, các dự án có số người truy cập lớn.
- Chúng ta không thể áp dụng cấu trúc của 2 hệ thống trên vào.
- Sự khác biệt: Cấu hình server của các hệ thống trên chỉ đáp ứng được cho số người dùng nhất định (vd 1000-10000 người)
đối với các trang lớn trên như facebook, tiki số lượng người dùng lên đến hàng triệu hoặc chục triệu người.
- Chúng ta sẽ có nhưng biện pháp khác như
    - Tăng Ram, tăng ổ cứng, thay CPU… (vertical scaling)
    - LoadBalancer (cân bằng tải)
    - ...
```
