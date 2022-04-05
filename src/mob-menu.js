(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open__btn"),
    closeMenuBtn: document.querySelector(".menu-close__btn"),
    menu: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle("is-hidden");
    document.getElementById('burger-btn').classList.toggle('is-hidden');
    document.getElementById('main-modal').classList.toggle('is-hidden');    
  }
  
})();