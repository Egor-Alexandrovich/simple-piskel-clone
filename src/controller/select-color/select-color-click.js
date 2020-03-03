export function selectColorClick(currentStage) {
    const { primaryColorElement, secondColorElement, primaryColorElementBg, secondColorElementBg } = currentStage;
    primaryColorElement.addEventListener('change', (event) => {
        currentStage.currentPrimaryColor = event.target.value;
        primaryColorElementBg.style.backgroundColor = event.target.value;
    });
    secondColorElement.addEventListener('change', (event) => {
        currentStage.currentSecondColor = event.target.value;
        secondColorElementBg.style.backgroundColor = event.target.value;
    });
    document.querySelector('.swap').addEventListener('click', () => {
        const tempColor = currentStage.currentPrimaryColor;
        currentStage.currentPrimaryColor = currentStage.currentSecondColor;
        primaryColorElementBg.style.backgroundColor = currentStage.currentPrimaryColor;
        currentStage.currentSecondColor = tempColor;
        secondColorElementBg.style.backgroundColor = tempColor;
    });
}
