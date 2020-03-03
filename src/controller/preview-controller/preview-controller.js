import { exportApng } from '../../utils/exportApng';
import { exportGIF } from '../../utils/exportGIF';

export function previewController(currentStage) {
    const { framesArray } = currentStage;
    const inputRangFPS = document.querySelector('.range-fps');
    const displayFPS = document.querySelector('.display-fps');
    const displayFrame = document.querySelector('.preview__item');
    const fullScreenBtn = document.querySelector('.full-screen-btn');
    let displayFrameAnimation;
    inputRangFPS.addEventListener('input', (event) => {
        clearInterval(displayFrameAnimation);
        displayFPS.textContent = `${event.target.value} FPS`;
        currentStage.FPS = event.target.value;
        if (event.target.value > 0) {
            let count = 0;
            displayFrameAnimation = setInterval(() => {
                displayFrame.style.backgroundImage = `url(${framesArray[count]})`;
                if (count !== framesArray.length - 1) {
                    count += 1;
                } else { count = 0; }
            }, Math.floor(1000 / event.target.value));
        }
    });
    fullScreenBtn.addEventListener('click', () => {
        displayFrame.requestFullscreen();
    });
    document.querySelector('#export-apng').addEventListener('click', () => {
        exportApng(currentStage);
    });
    document.querySelector('#export-gif').addEventListener('click', () => {
        exportGIF(currentStage);
    });
}
