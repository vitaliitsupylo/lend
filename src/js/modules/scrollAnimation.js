module.exports = (arr, heightWindow) => {

    for (let i = 0; i < arr.length; i++) {
        let top = arr[i].getBoundingClientRect().top - heightWindow;
        let percent = -top * 100 / arr[i].clientHeight;
        if (top < 100 && percent < 220) {
            arr[i].style.transform = `translate3d(0,${percent / 12}%,0)`;
        }
    }
};