import { initLanguageSwitcher } from './modules/header.js';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  // Другие инициализации...
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('callback-modal');
    const openBtn = document.querySelector('.header__callback');
    const closeBtn = document.querySelector('.modal-close');
    
    // Открытие модального окна
    openBtn.addEventListener('click', function() {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Закрытие при клике вне окна
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Маска для телефона (если нужно)
    const phoneInput = document.querySelector('.phone-input');
    if (phoneInput) {
      phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? '+7 (' + x[1] : '+7 (' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
      });
    }
  });

