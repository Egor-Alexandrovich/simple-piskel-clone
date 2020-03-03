export const canvas = {
    html: '',
    run(canvasSize) {
        document.querySelector('.flex-wrapper').insertAdjacentHTML('afterbegin', this.html);
        document.getElementById(canvasSize).classList.add('active-btn');
    },
};
