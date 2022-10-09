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

<img src="https://images.viblo.asia/full/58ec3b4a-3caf-40ee-a589-173b395a1c6e.png" alt="vue">

```md
DNS (Domain Name System)** sẽ dịch domain tintuc.vn -> địa chỉ IP(85.100.100.120) và trình duyệt sẽ tìm đến cái server có địa chỉ IP đó và trả về trang web cho chúng ta.
```

<!-- **

**A. Đối với hệ thống nhỏ**
Ví dụ: Tin tức, ứng dụng đồ án,các dự án chỉ truyền tải nội dung....

<img src="https://images.viblo.asia/a0b3ccbe-a123-42d4-bf68-7141c11e523f.png" alt="vue">

- Với hệ thống nhỏ thì tất cả sẽ làm trong 1 máy chủ (webserver, database server) tức là server chúng ta sẽ chứa và đảm nhiệm cũng như xử lý hết các công việc từ trình duyệt yêu cầu.

**A. Đối với hệ thống trung bình**
Ví dụ: dự án công ty, web bán hàng,.....

<img src="https://images.viblo.asia/37a16ad6-54f9-48d5-a391-40f1d783ba92.png" alt="vue">

- Server sẽ được tách ra làm 2
    - -->
