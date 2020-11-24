const allPhotos = document.querySelector('.all-photos');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');





allPhotos.addEventListener('click', (e) => {
    console.log(e.target);
    modalImage = document.querySelector('.modal-image');
    if (modalImage) {
        modalImage.parentNode.removeChild(modalImage);
    }
    let imageAngle;
    if (window.width > window.height) {
        imageAngle = 'landscape';
    }

    else {
        imageAngle = 'portrait';
    }

    modal.insertAdjacentHTML( 'beforeend', `<img src=${e.target.src} class="modal-image ${imageAngle}"></img>` );
    modal.classList.toggle('modal-open');
})

modal.addEventListener('click', () => {
    modal.classList.toggle('modal-open');
    
    
})

