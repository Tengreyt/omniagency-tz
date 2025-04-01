export function initModal() {
    const modal = document.getElementById('callback-modal');
    const openBtn = document.querySelector('.header__callback');
    const closeBtn = document.querySelector('.modal-close');
  
    if (!modal || !openBtn || !closeBtn) return;
  
    function openModal() {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  
    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  
    return {
      openModal,
      closeModal
    };
  }