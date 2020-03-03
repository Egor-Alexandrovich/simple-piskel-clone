export const barPenSize = {
    html: '',
    run(size) {
        document.querySelector('.bar-wrapper').insertAdjacentHTML('afterbegin', this.html);
        document.getElementById(size).classList.add('active');
    },
};
