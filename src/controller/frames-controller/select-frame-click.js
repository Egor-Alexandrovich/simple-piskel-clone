import { drawImageToFrame } from '../../utils/drawImageToFrame';
import { frames } from '../../components/frames';

export function selectFrameClick(event, currentStage) {
    const { framesArray } = currentStage;
    let { currentFrame } = currentStage;
    document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.remove('frame-active');
    event.target.parentElement.parentElement.classList.add('frame-active');
    currentFrame = event.target.parentElement.parentElement.firstElementChild.textContent - 1;
    currentStage.currentFrame = currentFrame;
    drawImageToFrame(framesArray[currentFrame], currentStage.ctx);
    frames.renderFrameCanvas(framesArray[currentFrame], currentFrame);
}
