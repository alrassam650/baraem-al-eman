/**
 * ==================================================================
 * التنقل بين الصفحات (بدون إعادة تحميل)
 * ==================================================================
 */
function navigateTo(pageName) {
  // إخفاء جميع الأقسام
  var sections = document.querySelectorAll('.page-section');
  sections.forEach(function (section) {
    section.classList.remove('active');
  });

  // إظهار القسم المطلوب
  var target = document.getElementById('page-' + pageName);
  if (target) {
    target.classList.add('active');
  }

  // تحديث حالة أزرار التنقل العلوية
  var navLinks = document.querySelectorAll('.nav .nav-link');
  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active');
    }
  });

  // تحديث حالة أزرار التنقل السفلية
  var bottomBtns = document.querySelectorAll('.bottom-nav-btn');
  bottomBtns.forEach(function (btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-page') === pageName) {
      btn.classList.add('active');
    }
  });

  // التمرير لأعلى الصفحة
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * ==================================================================
 * الاشتراك في عرض عبر واتساب
 * ==================================================================
 * [✏️] غيّر phoneNumber إلى رقم واتساب الخاص بك
 */
function subscribeToOffer(button) {
  // الرقم بصيغة دولية بدون + أو أصفار زائدة
  var phoneNumber = '201068893929';

  // نصل إلى بطاقة العرض
  var card = button.closest('.offer-card');
  // نجلب اسم العرض
  var offerName = card.getAttribute('data-offer-name');
  // نص الرسالة
  var message = '' + offerName;
  // تحويل النص إلى تنسيق URL
  var encodedMessage = encodeURIComponent(message);
  // رابط واتساب
  var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
  // فتح في نافذة جديدة
  window.open(whatsappUrl, '_blank');
}

/**
 * ==================================================================
 * تشغيل الفيديوهات المحلية (MP4)
 * ==================================================================
 */
document.addEventListener('DOMContentLoaded', function () {
  var videoItems = document.querySelectorAll('.video-item');

  videoItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var src = item.getAttribute('data-src');
      var thumbnail = item.querySelector('.video-thumbnail');

      // لا تنشئ الفيديو أكثر من مرة
      if (thumbnail.querySelector('video')) return;

      thumbnail.innerHTML = `
        <video controls autoplay style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
          <source src="${src}" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      `;
    });
  });
});