function changeImage(fileName, dotElement) {
    // 1. تغيير مصدر الصورة الأساسية
    document.getElementById('mainImg').src = fileName;

    // 2. إزالة كلاس active من جميع النقاط
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));

    // 3. إضافة كلاس active للنقطة التي تم الضغط عليها حالياً
    dotElement.classList.add('active');
}