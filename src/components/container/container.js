export const container = {
    html: '',
    run() {
        document.body.insertAdjacentHTML('afterbegin', this.html);
    },
};
