;
(() => {
    'use strict';

    /*
    *Variables****************************************************************
    * */
    /*load*/
    const arrImg = document.querySelectorAll('img');
    /*header*/
    const header = document.querySelector('.header_main');
    /*animation*/
    const arrAnimation = document.querySelectorAll('.animation');
    /*scroll all*/
    const scrollAnimation = document.querySelectorAll('.scroll_animation');
    let heightWindow = window.innerHeight;
    const hiddenScroll = require('./modules/function/hiddenScroll');
    /*nav*/
    const btnNav = document.querySelector('.header_main .menu');
    const navList = document.querySelector('.navigation');
    /*calc*/
    const calcWrap = document.querySelector('.calc');
    // const numericField = document.querySelectorAll('.numeric_field');


    /*
    * Implementation****************************************************************
    * */

    /*load*/
    if (arrImg.length > 0) {
        hiddenScroll(true);
        (require('./modules/loader'))(arrImg, header);
    }

    /*scroll header*/
    let scrollHeader = null;
    if (header !== null) {
        scrollHeader = require('./modules/function/scrollMenu');
        scrollHeader(header);
    }
    /*animation*/
    let addAnimation = null;
    if (arrAnimation.length > 0) {
        addAnimation = require('./modules/function/animation');
        addAnimation(arrAnimation);
    }


    /*scroll all*/
    let scrollFunc = null;
    if (scrollAnimation.length > 0) {
        scrollFunc = require('./modules/scrollAnimation');
        for (let i = 0; i < scrollAnimation.length; i++) {
            scrollFunc(scrollAnimation, heightWindow);
        }
    }

    /*nav open*/
    btnNav.addEventListener('click', function () {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        hiddenScroll(this.classList.contains('active'));

    });
    /*calc*/
    if (calcWrap !== null) {
        (require('./modules/calc'))(calcWrap);
    }
    /*video js*/
    const videoJs = require('video.js');
    const videoJsYoutube = require('videojs-youtube');


    window.addEventListener('scroll', () => {
        /*animation*/
        if (addAnimation !== null) {
            addAnimation(arrAnimation);
        }
        /*scroll header*/
        scrollHeader(header);

        /*scroll quarters content*/
        if (scrollAnimation.length > 0) {
            for (let i = 0; i < scrollAnimation.length; i++) {
                scrollFunc(scrollAnimation, heightWindow);
            }
        }
    });

    /*Set map*/

    if (document.querySelector('#map') !== null) {
        const localScript = document.createElement('script');
        const serverScript = document.createElement('script');

        localScript.setAttribute('defer', 'defer');
        serverScript.setAttribute('defer', 'defer');

        localScript.setAttribute('src', 'dist/js/map-google.js');
        serverScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDzrDLaTqQRrY8xss7UUDtLQxJ7S2fajj4&callback=initMap');
        document.body.appendChild(serverScript);
        document.body.appendChild(localScript);
    }


})();
