module.exports = (elem) => {

    const moveElem = elem.querySelector('.focus');
    const placeholder = elem.querySelector('.placeholder');

    moveElem.addEventListener('focus', function () {
        elem.classList.add('active');
    });
    moveElem.addEventListener('blur', function () {
        if (this.value.length === 0) {
            elem.classList.remove('active')
        }
    });

    placeholder.addEventListener('click', function () {
        elem.parentElement.classList.add('active');
        moveElem.focus();
    });
};