import { frames } from '../../components/frames';
import { drawImageToFrame } from '../../utils/drawImageToFrame';

export function dropFrame(currentStage) {
    const { framesArray } = currentStage;
    let { currentFrame } = currentStage;
    let draggedFrame;
    let draggedFrameIndex;
    let draggedFrameUrl;
    document.querySelector('.frame-wrapper').addEventListener('dragstart', (event) => {
        draggedFrame = event.target;
        draggedFrameIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
        draggedFrameUrl = framesArray[draggedFrameIndex];
        if (event.target.className !== 'frame-canvas') {
            event.preventDefault();
        }
        event.target.style.opacity = 0.5;
    }, false);
    document.querySelector('.frame-wrapper').addEventListener('dragover', (event) => {
        event.preventDefault();
    }, false);
    document.querySelector('.frame-wrapper').addEventListener('dragend', (event) => {
        event.target.style.opacity = '';
    }, false);
    document.addEventListener('dragenter', (event) => {
        if (event.target.className === 'frame-canvas') {
            event.target.style.opacity = 0.5;
            event.target.parentElement.style.backgroundColor = '#fdd700';
        }
    }, false);
    document.addEventListener('dragleave', (event) => {
        if (event.target.className === 'frame-canvas') {
            event.target.style.opacity = '';
            event.target.parentElement.style.backgroundColor = '';
        }
    }, false);
    document.querySelector('.frame-wrapper').addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.className === 'frame-canvas' & event.target !== draggedFrame) {
            const replacedFrameIndex = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
            const replacedFrameUrl = framesArray[replacedFrameIndex];
            framesArray.splice(draggedFrameIndex, 1, replacedFrameUrl);
            framesArray.splice(replacedFrameIndex, 1, draggedFrameUrl);
            frames.renderFrameCanvas(framesArray[draggedFrameIndex], draggedFrameIndex);
            frames.renderFrameCanvas(framesArray[replacedFrameIndex], replacedFrameIndex);
            console.log(currentFrame, document.querySelector(`#frame-canvas${currentFrame}`));
            document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.remove('frame-active');
            currentFrame = replacedFrameIndex;
            document.querySelectorAll('.number-wrapper').forEach((elem, index) => {
                elem.textContent = index + 1;
            });
            document.querySelectorAll('.frame-canvas').forEach((elem, index) => {
                elem.id = `frame-canvas${index}`;
            });
            document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.add('frame-active');
            currentStage.currentFrame = currentFrame;
            drawImageToFrame(framesArray[currentFrame], currentStage.ctx);
            event.target.style.opacity = '';
            event.target.parentElement.style.backgroundColor = '';
        }
    }, false);
}
