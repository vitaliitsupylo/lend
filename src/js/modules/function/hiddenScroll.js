module.exports = (boll) => {

    const header = document.querySelector('.header_main');

    if (boll) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.cssText = `overflow:hidden; padding-right:${scrollWidth}px`;
        header.style.width = `${header.clientWidth - scrollWidth}px`;
    } else {
        document.body.removeAttribute('style');
        header.style.width = `100%`;
    }
};