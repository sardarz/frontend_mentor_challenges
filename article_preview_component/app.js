const userBtn = document.querySelector('.user_btn');
const shareBtn = document.querySelector('.share_btn');
const share_section = document.querySelector('.share')
function clickHandler(evt) {
    share_section.classList.toggle("visible")
}

shareBtn.addEventListener('click', clickHandler)
userBtn.addEventListener('click', clickHandler)