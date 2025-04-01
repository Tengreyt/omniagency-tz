import { initLanguageSwitcher } from './modules/header.js';
import { initModal } from './modules/modal.js';
import { initPhoneMask } from './modules/phone-mask.js';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initModal();
  initPhoneMask();
  
  // Другие инициализации...
});