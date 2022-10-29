# CÁC VAI TRONG MỘT DỰ ÁN PHẦN MỀM

## 1. Các vị trí trong công ty phần mềm

### Developer (Dev)
```md
- Hầu hết các bạn học liên quan đến phần mềm đều xuất phát từ vị trí này. Dù các bạn có theo các hướng các nhau như Web, Mobile, Xử lý ảnh, Trí tuệ nhân tạo,... thì bạn cũng làm chung một việc là viết code.
- Làm dev có một đặc quyền đó là được phép làm sai, Vì sai đã có tester báo lỗi, nhưng đừng sai nhiều quá, kẻo bị trừ lương.
```

### Tester/Quality Control (QC)
```md
- Tester/Quality Control (QC), công việc là viết test cases, thực thi test cases và viết báo cáo.
- Kiến thức cho vị trí này có thể học được qua môn Kiểm thử phần mềm ở bộ môn Công nghệ phần mềm.
- Nếu không được học trên trường, có thể tự học trên Google bằng từ khoá "Software Testing".
```

### Quality Assurance (QA)
```md
QA là người chịu trách nhiệm đảm bảo chất lượng sản phẩm thông qua việc đưa ra quy trình làm việc giữa các bên liên quan.
Công việc chủ yếu là đề xuất, giám sát và cải thiện quy trình làm việc;
đưa ra tài liệu hướng dẫn để đảm bảo chất lượng cho nhóm phát triển.
Tuy nhiên, một số công ty lại cho QA kiêm luôn việc của QC.
```

### Business Analyst (BA)
```md
Vai trò như cầu nối giữa khách hàng và nhóm phát triển.
Khi gặp khách hàng, BA sẽ lắng nghe mô tả dự án và biến nó thành yêu cầu,
đề xuất giải pháp về mặt chức năng.
Sau đó về truyền lại cho nhóm phát triển, phối hợp với PM để chốt danh sách chức năng.
```

### Project Manager (PM)
```md
- Công việc là lập kế hoạch, theo dõi tiến độ, động viên tâm sinh lý, giải quyết mâu thuẫn, viết báo cáo.
- PM sẽ giám sát kết quả theo từng giai đoạn để điều chỉnh kế hoạch khi cần.
```

### Designer
```md
- Thiết kế UI/UX cho sản phẩm theo yêu cầu của khách hàng
- Lên kế hoặc cho người dùng sử dụng sản phẩm
```

## 2. Quy trình phát triển phầm mềm

```md
- Phân tích và lên kế hoạch
- Phân tích yêu cầu
- Thiết kế
- Phát triển sản phẩm
- Kiểm thử
- Triển khai
- Bảo trì
```

### 2.1. Phân tích và lên kế hoạch

```md
Ở bước này, chúng ta sẽ tìm hiểu và phân mục đích, giới hạn, thời gian thực hiện cần thiết, tài chính, nhân sự và rủi ro cho dự án. Về cơ bản, chúng ta phải xác định được cần làm gì, cần những gì, làm thế nào, khi nào hoàn thành. Do đó, ta cần các vai trò tham gia vào bước này gồm:

- Business Analyst (BA) - Nhận yêu cầu từ khách hàng, đề xuất giải pháp.
- Project Manager (PM) - Lên kế hoạch dự án gồm các công việc cần làm, các vấn đề kỹ thuật, nhân sự, lịch làm việc, rủi ro,...
- Technical Architect (TA) - Lựa chọn công cụ, giải pháp kỹ thuật trước khi phát triển sản phẩm.
```

### 2.2. Phân tích yêu cầu

```md
Chúng ta sẽ tìm hiểu và phân tích các ràng buộc trong quy trình nghiệp vụ, đối tượng của dự án, tầm nhìn dự án, các chức năng cần có. Các vai trò tham gia gồm:

- Business Analyst (BA) - Phân tích lại với nhóm phát triển về yêu cầu của khách hàng, phát hiện và đề xuất giải pháp cho các yêu cầu phát sinh thêm.
- Project Manager (PM) - Làm việc chung với BA và nhóm phát triển để thống nhất yêu cầu từ khách hàng và chốt danh sách các chức năng cần làm.
```

### 2.3. Thiết kế

#### 2.3.1. UI/UX
```md
Sau khi chúng ta chốt được danh sách chức năng với khách hàng, bước này sẽ lên khung sườn cho dự án gồm khung về giao diện và kiến trúc hệ thống.

Về phần giao diện người dùng, chúng ta cần giao diện hoàn chỉnh và prototype nếu cần (giao diện hoàn chỉnh, có thể giả lập thao tác để chuyển màn hình). Ở bước này, nên có một bộ quy tắc về giao diện để thống nhất cho toàn sản phẩm. Tham gia gồm:

- Designer - Gồm UX/UI Designer, Graphic Designer,... họ sẽ thiết kế giao diện người dùng cho sản phẩm dựa trên danh sách chức năng.
- Project Manager (PM) - Kiểm tra giao diện có thể hiện được yêu cầu của khách hàng hay không. Nếu có những thao tác hoặc nghiệp vụ chưa rõ sẽ bàn lại để bổ sung.
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/human-interface-guidelines.png" alt="vue">

#### 2.3.2. Technical
```md
Về phần kỹ thuật, chúng ta quyết định kiến trúc và cấu hình môi trường phát triển, cách triển khai, công nghệ sử dụng là gì, có cần sử dụng các bên thứ ba hay không? Ngoài ra, ta sẽ phân tích cần truy xuất và lưu trữ đữ liệu như thế nào.
- Technical Architect (TA) - Thiết kế kiến trúc hệ thống.
- Developer (Dev) - Phân tích và thiết kế từng module.
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/backend-spotify-architect.png" alt="vue">

### 2.4. Phát triển sản phẩm

```md
Sau khi đã có danh sách chức năng và thiết kế, chúng ta sẽ xây dựng sản phẩm theo tiến độ đã đề ra. Tham gia gồm:

- Developer (Dev) - Dev ở đây nói chung, gồm web developer (front-end/back-end/full-stack), mobile developer (Android/iOS),...
Nếu dự án quá phức tạp, ta cần thêm một số chuyên gia trong lĩnh vực khoa học máy tính, hệ thống thông tin,... để hỗ trợ.
- Project Manager (PM) - Quản lý tiến độ, theo dõi tâm sinh lý của dev để động viên đúng lúc.
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/gantt-chart.jpg" alt="vue">

### 2.5. Kiểm thử

```md
Giai đoạn này sẽ kiểm tra tính chính xác của từng chức năng, có hoạt động đúng với đặc tả và sửa lỗi. Tham gia gồm:

- Tester/Quality Control (QC) - Thực thi việc kiểm thử và báo cáo lỗi.
- Developer (Dev) - Sửa lỗi.
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/developer-vs-tester.png" alt="vue">

### 2.6. Triển khai

```md
Sau khi sửa lỗi xong, chúng ta sẽ đóng gói phần mềm và triển khai lên server của khách hàng
hoặc công bố trên App Store/Google Play. Tham gia gồm:

- Developer (Dev) - Chịu trách nhiệm chính.
- DevOps - Vị trí này thì tuỳ công ty.
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/deployment.jpg" alt="vue">

### 2.7. Bảo trì

```md
Trong quá trình đưa vào sử dụng, khách hàng sẽ yêu cầu sửa một số lỗi, thêm chức năng hoặc sửa một chức năng hiện tại thì chúng ta sẽ thực hiện bước này. Tham gia gồm nhóm phát triển (Dev, Tester, PM).

- Developer (Dev)
- Tester
- Project Manager (PM)
```
<img src="https://vhnam.github.io/tutorials/cac-vai-tro-trong-phat-trien-phan-mem/img/maintenance.jpeg" alt="vue">
