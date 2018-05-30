;
(() => {
    'use strict';

    /*
    *Variables****************************************************************
    * */
    /*input*/
    const arrInput = document.querySelectorAll('.input');
    /*menu*/
    const menu = document.getElementById('menu_wrap');
    /*menu user*/
    const menuUser = document.querySelector('.header_right');
    /*search*/
    const arrSearch = document.querySelectorAll('.search');
    /*table*/
    const arrTable = document.querySelectorAll('.table_site');
    /*calendar*/
    const flatpickr = require("flatpickr");
    /*services*/
    const servicesElem = document.querySelectorAll('.services_elem');
    /*text editor*/
    const editorWrap = document.querySelectorAll('.editor_wrap');
    /*translit*/
    const translitSet = document.querySelectorAll('.translitSet');
    const translitResult = document.querySelectorAll('.translitResult');
    /*add photo*/
    const imagesAdd = document.querySelectorAll('.images_add_elem');
    /*popup info*/
    const popupInfo = document.querySelectorAll('.popup_info');
    /*number mask*/
    const inputNumber = document.querySelectorAll('.input_number');
    /*cropper img*/
    const cropperWrap = document.querySelector('.cropper_wrap');
    /*readonly*/
    const arrReadonly = document.querySelectorAll('.readonly');
    /*cropper get*/
    const cropperWrapGet = document.querySelectorAll('.cropperWrapGet');
    /*slider*/
    const slider = document.querySelector('.slider_edit_wrap');

    /*
    * Implementation****************************************************************
    * */

    /*input*/
    if (arrInput.length > 0) {
        (require('./modules/input'))(arrInput);
    }

    /*menu*/
    if (menu !== null) {
        (require('./modules/menu'))(menu,);
    }
    /*menu user*/
    if (menuUser !== null) {
        (require('./modules/menuUser'))(menuUser);
    }

    /*search*/
    if (arrSearch.length > 0) {
        (require('./modules/search'))(arrSearch);
    }

    /*table*/
    if (arrTable.length > 0) {
        (require('./modules/table'))(arrTable);
    }

    /*services*/
    if (servicesElem.length > 0) {
        (require('./modules/services'))(servicesElem);
    }

    /*text editor*/
    if (editorWrap.length > 0) {
        (require('./modules/editor'))(editorWrap);
    }

    /*calendar*/
    const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;
    flatpickr('.calendar', {
        dateFormat: "d.m.Y",
        locale: Russian
    });

    flatpickr('.calendar_time', {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minDate: "09:00",
        maxDate: "22:00",
        locale: Russian
    });

    /*translit*/
    if (translitSet.length > 0) {
        (require('./modules/translitSet'))(translitSet, translitResult);
    }

    /*add photo*/
    if (imagesAdd.length > 0) {
        (require('./modules/addPhoto'))(imagesAdd);
    }

    /*popup info*/
    if (popupInfo.length > 0) {
        (require('./modules/popupInfo'))(popupInfo);
    }


    /*phone mask*/
    if (inputNumber.length > 0) {
        let vanillaTextMask = require('vanilla-text-mask');

        let numberMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

        for (let i = 0; i < inputNumber.length; i++) {
            vanillaTextMask.maskInput({
                inputElement: inputNumber[i],
                mask: numberMask,
                keepCharPositions: true,
                guide: false
            });
        }
    }
    /*readonly*/
    if (arrReadonly.length > 0) {
        (require('./modules/readonly'))(arrReadonly);
    }

    /*cropper Wrap Get*/
    if (cropperWrapGet.length > 0) {
        (require('./modules/cropperWrapGet'))(cropperWrapGet);
    }

    /*slider*/
    if (slider !== null) {
        (require('./modules/slider'))(slider);
    }


})();
