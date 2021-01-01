const main_box = document.querySelector('.form__radio-wrapper');

function radioLiven(current) {
    if (current.target.nodeName == 'INPUT') {
        if (current.target.getAttribute('checked')) {
            current.target.classList.remove('visible');
            current.target.removeAttribute('checked');
        } else if (!current.target.getAttribute('checked')) {
            current.target.classList.add('visible');
            current.target.setAttribute('checked', 'checked');
        }
    } else return;
}

main_box.addEventListener('click', radioLiven);