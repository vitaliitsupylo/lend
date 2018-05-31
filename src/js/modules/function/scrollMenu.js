module.exports = function (header) {
    let yak = 1;
    if (window.pageYOffset > 200) {
        header.classList.add('active');
        if (yak) {
            setTimeout(() => {
                header.classList.add('top_head');
                yak = 0;
            }, 100)
        }
    } else {
        header.classList.remove('active', 'top_head');
        yak = 1;
    }
};
