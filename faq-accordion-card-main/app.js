const acc_titles = document.querySelectorAll('.accardion__visible > p');
const arrows = document.querySelectorAll('.arrow');
const pop_ups = document.querySelectorAll('.accardion__pop');

acc_titles.forEach(x => {
    x.addEventListener('click', e => {
        let parentSibling = e.target.parentElement.nextElementSibling;
        let sibling = e.target.nextElementSibling;

        acc_titles.forEach((x, i) => {
            arrows[i].classList.remove("arrow-up");
            pop_ups[i].style.maxHeight = 0;
        })

        parentSibling.style.maxHeight = parentSibling.scrollHeight + "px";
        sibling.classList.add('arrow-up');
    })
})