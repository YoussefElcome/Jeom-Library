-- إنشاء قاعدة البيانات
CREATE DATABASE library_website;

-- التبديل إلى قاعدة البيانات الجديدة
USE library_website;

-- إنشاء جدول الكتب
CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  cover_image VARCHAR(255),
  description TEXT
);

-- إنشاء جدول الخدمات
CREATE TABLE services (
  service_id INT PRIMARY KEY,
  title VARCHAR(255),
  icon VARCHAR(255),
  description TEXT
);
-- إضافة بيانات الكتب
INSERT INTO books (book_id, title, author, cover_image, description)
VALUES
  (1, 'رحلتي من الشك إلى الإيمان', 'د. مصطفى محمود', 'path_to_image_1.jpg', 'وصف الكتاب ومحتواه وتقييمات القراء ومعلومات أخرى'),
  (2, 'اينشتين والنسبية', 'د. مصطفى محمود', 'path_to_image_2.jpg', 'وصف الكتاب ومحتواه وتقييمات القراء ومعلومات أخرى');

-- إضافة بيانات الخدمات
INSERT INTO services (service_id, title, icon, description)
VALUES
  (1, 'Advanced Search', 'path_to_icon_1.png', 'البحث المتقدم للعثور على الكتب والمواد بسرعة'),
  (2, 'Digital Library', 'path_to_icon_2.png', 'وصول إلى المكتبة الرقمية والموارد عبر الإنترنت'),
  (3, 'Monthly Backups', 'path_to_icon_3.png', 'نسخ احتياطية شهرية للحفاظ على البيانات الأمنة');
