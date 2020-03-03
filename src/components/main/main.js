export const main = {
    html: '',
    run() {
        document.querySelector('.container').insertAdjacentHTML('afterbegin', this.html);
    },
};
