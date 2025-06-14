
# Jalali Gregorian Date Converter - WordPress Plugin

## توضیحات

این افزونه یک مبدل ساده تاریخ شمسی (جلالی) و میلادی برای وردپرس است که امکان وارد کردن تاریخ به صورت جداگانه (سال، ماه، روز) و تبدیل آن بین دو تقویم را فراهم می‌کند.  
با استفاده از این افزونه می‌توانید در نوشته‌ها یا برگه‌های وردپرس خود، با استفاده از شورت‌کد `[jalali_gregorian_converter]`، فرم تبدیل تاریخ را نمایش دهید.

---

## ویژگی‌ها

- تبدیل تاریخ از شمسی به میلادی و بالعکس  
- ورودی جداگانه برای سال، ماه و روز  
- نمایش نتیجه به صورت داینامیک بدون نیاز به رفرش صفحه  
- طراحی واکنش‌گرا و ساده  
- بدون نیاز به افزونه‌های جانبی  

---

## نصب و راه‌اندازی

1. فولدر افزونه را با نام `jalali-gregorian-converter` ایجاد کنید.  
2. سه فایل زیر را در این فولدر قرار دهید:  
   - `jalali-gregorian-converter.php` (کد اصلی افزونه)  
   - `jalali-converter-style.css` (فایل استایل)  
   - `jalali-converter-script.js` (کد JavaScript)  
3. فولدر را زیپ کنید یا مستقیماً در مسیر `wp-content/plugins/` وردپرس خود آپلود کنید.  
4. از بخش افزونه‌های وردپرس، افزونه را فعال کنید.  
5. در هر صفحه یا نوشته‌ای که خواستید، شورت‌کد زیر را قرار دهید:  
   ```
   [jalali_gregorian_converter]
   ```  
6. فرم تبدیل تاریخ نمایش داده خواهد شد.

---

## استفاده

- تاریخ مورد نظر خود را در سه فیلد سال، ماه و روز وارد کنید.  
- نوع تاریخ ورودی را انتخاب کنید (شمسی یا میلادی).  
- روی دکمه تبدیل کلیک کنید.  
- تاریخ تبدیل‌شده در همان صفحه نمایش داده می‌شود.

---

## ساختار فایل‌ها

- `jalali-gregorian-converter.php` - فایل اصلی افزونه و تعریف شورت‌کد  
- `jalali-converter-style.css` - استایل‌های مربوط به فرم  
- `jalali-converter-script.js` - اسکریپت جاوااسکریپت برای تبدیل تاریخ  

---

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.  
شما می‌توانید به صورت آزادانه از این افزونه استفاده و آن را ویرایش کنید.

---

## نویسنده

hessam zare
ایمیل: zaremahmoodih@gmail.com  
وب‌سایت: https://web-coffee.ir

---

## پشتیبانی

اگر سوال یا پیشنهادی داشتید، لطفاً از بخش Issues در همین مخزن GitHub استفاده کنید.

---

## منابع

- [jalaali-js](https://github.com/jalaali/jalaali-js) - کتابخانه تبدیل تاریخ جلالی و میلادی
