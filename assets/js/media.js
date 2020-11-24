const allPhotos = document.querySelector('.all-photos');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');





allPhotos.addEventListener('click', (e) => {
    console.log(e.target.src);
    modalImage = document.querySelector('.modal-image');
    if (modalImage) {
        modalImage.parentNode.removeChild(modalImage);
    }
    modal.insertAdjacentHTML( 'beforeend', `<img src=${e.target.src} class="modal-image"></img>` );
    modal.classList.toggle('modal-open');
})

modal.addEventListener('click', () => {
    modal.classList.toggle('modal-open');
    
    
})

