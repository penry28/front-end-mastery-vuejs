# 1. Chưa login

User -> http://127.0.0.1:5500
  b1: check user đăng nhập chưa
    -> đăng nhập rồi -> chuyển hướng người người dùng đến trang home
    -> chưa đăng nhập -> tự động chuyển hướng người dùng đến trang đăng nhập
         và xử lý không cho phép vào trang home.


LocalStorage
    nơi chứa dữ liệu của trang web

# 2. Đã login rồi
User -> home
    vẫn ở trang home.
User -> login
    đá nó về trang home.

# 3. Logout
b1: Xóa username_logged trong localStorage.
b2: Tự động chuyển hướng sang trang login.
