const allPhotos = document.querySelector('.all-photos');
const body = document.querySelector('body');
const modal = document.querySelector('.modal');




if (allPhotos){
allPhotos.addEventListener('click', (e) => {
    if (e.target.src){
    
        modalImage = document.querySelector('.modal-image');
        if (body.clientWidth > 700) {

        
            if (modalImage) {
                modalImage.parentNode.removeChild(modalImage);
            }
            // let imageAngle;
            // if (modalImage.width > modalImage.height) {
            //     imageAngle = 'landscape';
            // }

            // else {
            //     imageAngle = 'portrait';
            // }

            modal.insertAdjacentHTML( 'beforeend', `<img src=${e.target.src} class="modal-image"></img>` );
            modal.classList.toggle('modal-open');
        }
    }
})
}

if (modal){
modal.addEventListener('click', () => {
    modal.classList.toggle('modal-open');
    
    
})
}
