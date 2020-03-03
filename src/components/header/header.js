export const header = {
    html: '',
    run() {
        document.querySelector('.container').insertAdjacentHTML('afterbegin', this.html);
    },
};
