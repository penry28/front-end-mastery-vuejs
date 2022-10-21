// console.log('Login Page ran!');

const accountChinh = {
    username: 'nguyentienchinh',
    password: '1234567'
};

/**
 * b1: lấy được value ở input
 *      2 values: username, password.
 * b2: so sánh 2 values đã lấy với tài khoảng đã đăng ký trước đó.
 *  (
 *  cho dù ghi thường hay ghi hoa cũng đều đúng và
 *  dù có dư khoảng trắng phía trước và phía sau nó cũng đúng
 * )
 *      đúng:
 *          B1: lưu lại tài khoảng ở localStorage
 *          B2: chuyển hướng về trang home lại.
 *      sai: thông báo "Thông tin đăng nhập không chính xác".
 */
const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const buttonLoginEl = document.getElementById('button-login');

// console.log({usernameEl, passwordEl, buttonLoginEl});
buttonLoginEl.addEventListener('click', function(event) {
    event.preventDefault();
    let usernameValue = usernameEl.value;
    let passwordValue = passwordEl.value;

    // Chuyển thành ghi thường
    usernameValue = usernameValue.toLowerCase();

    // Bỏ khoản trắng trước và sau
    usernameValue = usernameValue.trim();

    if (usernameValue == accountChinh.username && passwordValue == accountChinh.password) {
        console.log('đăng nhập thành công');
        localStorage.setItem('username_logged', accountChinh.username);
        window.location.href = '/index.html';
    } else {
        console.log('đăng nhập thất bại');
    }
});
