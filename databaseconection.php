<?php
$server = "localhost";
$username = "اسم_المستخدم";
$password = "كلمة_المرور";
$database = "اسم_قاعدة_البيانات";

// إنشاء اتصال
$conn = new mysqli($server, $username, $password, $database);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// استخدام الاتصال لتنفيذ الاستعلامات والعمليات الأخرى

// إغلاق الاتصال عند الانتهاء
$conn->close();
?>