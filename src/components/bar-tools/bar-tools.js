export const barTools = {
    html: '',
    run(tool) {
        document.querySelector('.bar-wrapper').insertAdjacentHTML('afterbegin', this.html);
        document.getElementById(tool).classList.add('active');
    },
};
