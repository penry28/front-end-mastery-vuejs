// console.log('Home page ran!');

/**
 * khi nào isLogin là true
 *
 * lấy giá trị username_logged trong localStorage ra
 *  - nếu có: chứng tỏ mình đã login rồi
 *  - nếu không: chứng tỏ mình chưa login
 */
let isLogin = false;
const usernameLoggedStoraged = localStorage.getItem('username_logged');

if (usernameLoggedStoraged != null) {
    isLogin = true;
}

if (isLogin === true) {
    console.log('Đã login');
} else {
    console.log('Chưa login');
    window.location.href = '/login.html';
}


// Xử lý logout
const buttonLogoutEl = document.getElementById('btn-logout');
buttonLogoutEl.addEventListener('click', function() {
    const confirmation = confirm('Bạn có thực sự muốn đăng xuất không?');
    if (confirmation === true) {
        console.log('Xử lý logout');
        localStorage.removeItem('username_logged');
        window.location.href = '/login.html';
    }
});
