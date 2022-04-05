(() => {
    const refs = {
    openModalBtn: document.querySelector('.btn__loc'),
    closeModalBtn: document.querySelector('.location-close-btn'),
    modal: document.querySelector('.ground'),
    };
    
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    }
    })();