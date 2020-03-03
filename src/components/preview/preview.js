export const preview = {
    html: '',
    run() {
        document.querySelector('.preview-wrapper').insertAdjacentHTML('afterbegin', this.html);
    },
};
