(() => {
    const refs = {
    openModalBtn: document.querySelector('.btn__fran'),
    closeModalBtn: document.querySelector('.franchise__close-btn'),
    modal: document.querySelector('.window'),
    };
    
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    }
    })();