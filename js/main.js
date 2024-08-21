// Hàm để chuyển đổi trạng thái của menu dọc
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}

// Hàm để ẩn menu khi màn hình lớn hơn 931px
function handleResize() {
    var mobileMenu = document.getElementById('mobileMenu');
    var hamburgerMenu = document.getElementById('hamburgerMenu');
    if (window.innerWidth > 931) {
        mobileMenu.style.display = 'none'; // Ẩn menu khi màn hình lớn
        hamburgerMenu.style.display = 'none'; // Ẩn hamburger menu khi màn hình lớn
    } else {
        hamburgerMenu.style.display = 'block'; // Hiển thị hamburger menu khi màn hình nhỏ
    }
}

// Đăng ký sự kiện click cho hamburger menu
document.getElementById('hamburgerMenu').addEventListener('click', toggleMenu);

// Đăng ký sự kiện resize để xử lý khi kích thước cửa sổ thay đổi
window.addEventListener('resize', handleResize);

// Xử lý ngay khi tải trang để đảm bảo trạng thái đúng
handleResize();

