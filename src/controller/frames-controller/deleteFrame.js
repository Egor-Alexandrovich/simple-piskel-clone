import { drawImageToFrame } from '../../utils/drawImageToFrame';

export function deleteFrame(event, currentStage) {
    const { framesArray } = currentStage;
    let { currentFrame } = currentStage;
    if (framesArray.length !== 1) {
        let deleteElementIndex;
        let deleteElement;
        if (event.type === 'keyup') {
            deleteElementIndex = currentFrame;
            deleteElement = document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement;
        } else {
            deleteElementIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
            deleteElement = event.target.parentElement.parentElement;
        }
        if ((currentFrame >= deleteElementIndex) && (currentFrame !== 0)) {
            currentFrame -= 1;
        }
        framesArray.splice(deleteElementIndex, 1);
        deleteElement.remove();
        document.querySelectorAll('.number-wrapper').forEach((elem, index) => {
            elem.textContent = index + 1;
        });
        document.querySelectorAll('.frame-canvas').forEach((elem, index) => {
            elem.id = `frame-canvas${index}`;
        });
    }
    document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.add('frame-active');
    currentStage.currentFrame = currentFrame;
    drawImageToFrame(framesArray[currentFrame], currentStage.ctx);
}
