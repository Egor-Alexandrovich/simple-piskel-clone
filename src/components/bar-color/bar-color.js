export const barColor = {
    html: '',
    run(primaryColor, secondColor) {
        const barWrapper = document.querySelector('.bar-wrapper');
        barWrapper.insertAdjacentHTML('afterbegin', this.html);
        barWrapper.querySelector('#primary-color').value = primaryColor;
        barWrapper.querySelector('#second-color').value = secondColor;
        barWrapper.querySelector('#primary-color-bg').style.backgroundColor = primaryColor;
        barWrapper.querySelector('#second-color-bg').style.backgroundColor = secondColor;
    },
};
