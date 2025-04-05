document.addEventListener("DOMContentLoaded", function () {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    
    const openLoginBtn = document.getElementById("openLogin");
    const openRegisterBtn = document.getElementById("openRegister");
    
    const closeLoginBtn = loginModal.querySelector(".close");
    const closeRegisterBtn = registerModal.querySelector(".close");
    
    const registerLink = loginModal.querySelector("a[href='#']");
    const loginLink = registerModal.querySelector("a[href='#']");
    
    // Mở modal đăng nhập
    if (openLoginBtn) {
        openLoginBtn.addEventListener("click", function (event) {
            event.preventDefault();
            loginModal.style.display = "flex";
        });
    }
    
    // Mở modal đăng ký
    if (openRegisterBtn) {
        openRegisterBtn.addEventListener("click", function (event) {
            event.preventDefault();
            registerModal.style.display = "block";
        });
    }
    
    // Đóng modal đăng nhập
    closeLoginBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });
    
    // Đóng modal đăng ký
    closeRegisterBtn.addEventListener("click", function () {
        registerModal.style.display = "none";
    });
    
    // Đóng modal khi click ra ngoài
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        } else if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
    
    // Chuyển từ đăng nhập sang đăng ký
    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    });
    
    // Chuyển từ đăng ký sang đăng nhập
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        registerModal.style.display = "none";
        loginModal.style.display = "flex";
    });
});