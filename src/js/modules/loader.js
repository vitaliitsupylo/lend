module.exports = (arrImg, header) => {
    const line = header.querySelector('.loader_move');
    const arrLoad = document.querySelectorAll('.load');
    const hiddenScroll = require('./function/hiddenScroll');

    let lineWidth = 0;
    let count = arrImg.length;
    let part = 100 / count;
    let timeStop = null;


    function setMoveLine(boll) {
        lineWidth += part;
        line.style.width = `${lineWidth}%`;
        if (boll) {
            line.style.width = `100%`;
        }
    }

    for (let i = 0; i < count; i++) {
        arrImg[i].addEventListener('load', (e) => {
            setMoveLine();
        });
    }

    function goMove() {
        setMoveLine(true);
        setTimeout(() => {

            header.classList.add('move');
            setTimeout(() => {
                arrLoad.forEach((elem) => {
                    elem.classList.add('move');
                });
                /*показываем scroll*/
                hiddenScroll(false);
                header.classList.remove('load_fixed');
            }, 1000);
        }, 400);
    }

    timeStop = setTimeout(() => {
        goMove()
    }, 6000);

    window.addEventListener('load', () => {
        clearTimeout(timeStop);
        goMove();
    });

    // arrLoad.forEach((elem) => {
    //     elem.classList.add('move');
    // });

};