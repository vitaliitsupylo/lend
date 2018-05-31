module.exports = (wrap) => {
    const topProgress = wrap.querySelectorAll('.calc_top_progress .calc_top_progress_elem');
    const calcType = wrap.querySelectorAll('.calc_type_wrap');
    const left = wrap.querySelector('.calc_control .type_left');
    const right = wrap.querySelector('.calc_control .type_right');
    const reset = wrap.querySelector('.calc_control .calc_reset');

    const progressIcon = wrap.querySelector('.calc_top_progress .top_progress_icon');
    const progressPriceSet = wrap.querySelector('.progress_line_price');
    const priceSet = progressPriceSet.querySelector('.price_set_init');
    const progressPriceWrap = wrap.querySelector('.progress_line_wrap');
    const [...arrProgressPrice] = progressPriceWrap.querySelectorAll('.progress_line_elem');
    const arrControlSystem = wrap.querySelectorAll('.control_system_elem');
    const selectAll = wrap.querySelectorAll('select');
    const valueAll = wrap.querySelectorAll('input[type=text]');

    const modulesListAll = wrap.querySelector('.calc_modules_all_wrap');
    const modulesAllSelect = modulesListAll.querySelectorAll('select');

    const range = wrap.querySelector('.range_wrap input');
    const arrTextWeek = wrap.querySelector('.range_wrap .range_text').getAttribute('data-price').split(' ');
    const arrRangePrice = range.getAttribute('data-price').split(' ');
    const rangeText = wrap.querySelector('.range_wrap .range_text span');

    const arrNumericCalc = wrap.querySelectorAll('.numeric_field');

    let yak = 0;
    let price = 0;
    let controlSystemValue = 0;
    let leftElem = progressPriceSet.getBoundingClientRect().x;
    let yakPriceScroll = true;

    arrProgressPrice.push(progressPriceSet);

    /*
    * Function
    * */

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : int;
        } else {
            return (arr[int - 1]) ? int - 1 : 0;
        }
    }

    function changePrice(elem, boll, beforeElem) {
        if (boll) {
            price -= +elem.getAttribute('data-price');
        } else {
            price -= (beforeElem) ? beforeElem.getAttribute('data-price') : 0;
            price += +elem.getAttribute('data-price');
        }
        priceSet.innerHTML = `${price}`;
    }

    function setEndActive(arr) {
        let lastElem = null;
        let stopFor = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].querySelector('.calc_type_elem.active') !== null) {
                lastElem = arr[i];
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (lastElem !== null) {
                if (stopFor) {
                    let elemPrice = arr[i].querySelector('.calc_type_elem.active');
                    let setPrice = (elemPrice !== null) ? elemPrice.getAttribute('data-price') : 0;

                    topProgress[i].classList.add('choice');
                    arrProgressPrice[i].classList.add('active');
                    arrProgressPrice[i].querySelector('.line_elem_price>span').innerHTML = setPrice;
                } else {
                    topProgress[i].classList.remove('choice');
                    arrProgressPrice[i].classList.remove('active');
                }
                if (arr[i] === lastElem) {
                    stopFor = false;
                }
            } else {
                topProgress[i].classList.remove('choice');
                arrProgressPrice[i].classList.remove('active');
            }
        }
    }

    function scrollPrice(elem) {
        if (progressPriceWrap.getBoundingClientRect().top < 0 && wrap.getBoundingClientRect().bottom > wrap.clientHeight * 0.17) {
            elem.style.top = `0`;
            elem.style.position = 'fixed';
            elem.style.left = `${leftElem}px`;
            elem.classList.add('move');
            yakPriceScroll = true;
        } else if (wrap.getBoundingClientRect().bottom < wrap.clientHeight * 0.17 && yakPriceScroll) {
            yakPriceScroll = false;
            elem.removeAttribute('style');
            elem.classList.remove('move');
            elem.style.top = `${-progressPriceWrap.getBoundingClientRect().top}px`;
        }
        else if (progressPriceWrap.getBoundingClientRect().top >= 0) {
            elem.removeAttribute('style');
            elem.classList.remove('move');
        }
    }

    function moveProgress(boll) {
        for (let i = 0; i < calcType.length; i++) {
            calcType[i].classList.remove('active');
        }
        yak = lastElem(calcType, yak, boll);
        calcType[yak].classList.add('active');
        progressIcon.style.left = `${(yak * 20) + 10}%`;
    }


    left.addEventListener('click', () => {
        moveProgress(false);
    });

    right.addEventListener('click', () => {
        moveProgress(true);
    });


    for (let i = 0; i < calcType.length; i++) {
        let arrElem = calcType[i].querySelectorAll('.calc_type_elem');
        for (let e = 0; e < arrElem.length; e++) {
            arrElem[e].addEventListener('click', function () {
                if (this.classList.contains('active')) {
                    this.classList.toggle('active');
                    changePrice(this, true);
                } else {
                    changePrice(this, false, calcType[i].querySelector('.calc_type_elem.active'));
                    for (let k = 0; k < arrElem.length; k++) {
                        arrElem[k].classList.remove('active');
                    }
                    this.classList.add('active');
                    moveProgress(true);
                }

                setEndActive(calcType);
            });
        }
    }


    modulesListAll.addEventListener('click', function (even) {
        if (even.target.getAttribute('type') === 'checkbox') {
            if (even.target.checked) {
                price += +even.target.getAttribute('data-price');
            } else {
                price -= +even.target.getAttribute('data-price');
            }
            priceSet.innerHTML = `${price}`;
        }
    });


    for (let i = 0; i < modulesAllSelect.length; i++) {
        (() => {
            let selectValue = 0;
            modulesAllSelect[i].addEventListener('click', function () {
                selectValue = +this.value;
            });
            modulesAllSelect[i].addEventListener('change', function () {
                price -= selectValue;
                price += +this.value;
                priceSet.innerHTML = `${price}`;
            });
        })();
    }

    for (let i = 0; i < arrControlSystem.length; i++) {
        arrControlSystem[i].addEventListener('click', function () {
            if (this.classList.contains('active')) {
                price -= +this.getAttribute('data-price');
                priceSet.innerHTML = `${price}`;
                controlSystemValue = 0;

                this.classList.remove('active');
            } else {
                for (let o = 0; o < arrControlSystem.length; o++) {
                    arrControlSystem[o].classList.remove('active')
                }

                price -= controlSystemValue;
                price += +this.getAttribute('data-price');
                priceSet.innerHTML = `${price}`;

                this.classList.add('active');
                controlSystemValue = +this.getAttribute('data-price');

            }
        });

    }


    arrRangePrice.unshift(0);
    let rangeLength = 100 / (arrRangePrice.length - 1);
    let rangeTemporarily = +arrRangePrice[0];

    range.addEventListener('input', function () {
        let count = Math.round(this.value / rangeLength);

        if (arrRangePrice[count] > rangeTemporarily || arrRangePrice[count] < rangeTemporarily) {
            price -= +rangeTemporarily;
            rangeTemporarily = arrRangePrice[count];
            price += +rangeTemporarily;
            priceSet.innerHTML = `${price}`;
            rangeText.innerHTML = arrTextWeek[count];
        }
        rangeText.parentElement.style.left = `${this.value}%`;
    });


    for (let i = 0; i < arrNumericCalc.length; i++) {

        let count = arrNumericCalc[i].getAttribute('data-price');
        let countTemporary = 0;
        arrNumericCalc[i].addEventListener('input', function () {
            if (this.value !== '') {
                price -= countTemporary;
                price += count * this.value;
                priceSet.innerHTML = `${price}`;
                countTemporary = count * this.value;
            } else {
                price -= countTemporary;
                priceSet.innerHTML = `${price}`;
                countTemporary = count * this.value;
            }
        });
    }

    reset.addEventListener('click', () => {
        price = 0;
        priceSet.innerHTML = `${price}`;
        let checkedAll = wrap.querySelectorAll('input[type=checkbox]');


        /*reset type service*/
        arrProgressPrice.forEach((elem, int) => {
            try {
                elem.classList.remove('active');
                elem.querySelector('.line_elem_price>span').innerHTML = '0';
                topProgress[int].classList.remove('choice');
            } catch (err) {

            }
        });

        let [...arrTypeRemove] = wrap.querySelectorAll('.calc_type .calc_type_elem.active');
        arrTypeRemove.forEach((elem) => {
            elem.classList.remove('active');
        });


        let maxLength = Math.max(checkedAll.length, selectAll.length, valueAll.length, arrControlSystem.length);


        for (let i = 0; i < maxLength; i++) {
            /*очищаем value*/
            try {
                selectAll[i].value = '0';
            } catch (err) {
            }
            /*очищаем value*/
            try {
                valueAll[i].value = '';
            } catch (err) {
            }
            /*очищаем checked*/
            try {
                checkedAll[i].checked = false;
            } catch (err) {
            }
            try {
                arrControlSystem[i].classList.remove('active');
            } catch (err) {
            }
        }

        /*reset move arrow*/
        yak = 0;
        progressIcon.style.left = `${(yak * 20) + 10}%`;

        /**/

    });


    scrollPrice(progressPriceSet);
    window.addEventListener('scroll', () => {
        scrollPrice(progressPriceSet);
    });

};