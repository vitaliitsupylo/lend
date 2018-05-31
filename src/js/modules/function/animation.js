module.exports = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let min = arr[i].getBoundingClientRect().top - window.innerHeight * .8;
        if (min < 0) {
            arr[i].classList.add('active');
        }
    }
};