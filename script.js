const loginLink = document.getElementById("login");
const logoutLink = document.getElementById("logout");

// تمثيل حالة تسجيل الدخول (هنا يتم استخدام متغير مؤقت)
let isLoggedIn = false;

loginLink.addEventListener("click", () => {
  if (!isLoggedIn) {
    // تسجيل الدخول
    isLoggedIn = true;
    alert("تم تسجيل الدخول بنجاح!");
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
  } else {
    alert("أنت بالفعل مسجل الدخول!");
  }
});

logoutLink.addEventListener("click", () => {
  if (isLoggedIn) {
    // تسجيل الخروج
    isLoggedIn = false;
    alert("تم تسجيل الخروج بنجاح!");
    logoutLink.style.display = "none";
    loginLink.style.display = "inline";
  } else {
    alert("أنت بالفعل مسجل الخروج!");
  }
});
