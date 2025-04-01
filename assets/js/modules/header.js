export function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      const switcher = this.parentElement;
      
      switcher.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b === this);
      });
      
      switcher.classList.toggle('en-active', lang === 'en');
      console.log('Язык изменен на:', lang);
      
      // Можно добавить сохранение в localStorage
      localStorage.setItem('preferredLang', lang);
    });
  });
  
  // Восстановление выбранного языка при загрузке
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    const switcher = document.querySelector('.language-switcher');
    const btn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (btn) btn.click();
  }
}