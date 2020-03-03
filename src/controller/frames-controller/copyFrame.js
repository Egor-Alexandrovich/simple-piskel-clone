import { drawImageToFrame } from '../../utils/drawImageToFrame';
import { frames } from '../../components/frames';

export function copyFrame(event, currentStage) {
    const { framesArray } = currentStage;
    let { currentFrame } = currentStage;
    let copyElementIndex;
    let copyElement;
    if (event.type === 'keyup') {
        copyElementIndex = currentFrame;
        copyElement = document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement;
    } else {
        copyElementIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
        copyElement = event.target.parentElement.parentElement;
    }
    const position = 'afterend';
    framesArray.splice(copyElementIndex + 1, 0, framesArray[copyElementIndex]);
    frames.addFrame(copyElement, position, copyElementIndex);
    document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.remove('frame-active');
    currentFrame = copyElementIndex + 1;
    document.querySelectorAll('.number-wrapper').forEach((elem, index) => {
        elem.textContent = index + 1;
    });
    document.querySelectorAll('.frame-canvas').forEach((elem, index) => {
        elem.id = `frame-canvas${index}`;
    });
    document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.add('frame-active');
    currentStage.currentFrame = currentFrame;
    drawImageToFrame(framesArray[currentFrame], currentStage.ctx);
    frames.renderFrameCanvas(framesArray[currentFrame], currentFrame);
}
