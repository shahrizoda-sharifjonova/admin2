const popupClose = document.querySelectorAll('.popup-close');
const popup = document.querySelectorAll('.popup');

popupClose.forEach(popupClose => {
    popupClose.addEventListener('click', (e)=>{
        popupClose.parentElement.classList.remove('active')
    })
});