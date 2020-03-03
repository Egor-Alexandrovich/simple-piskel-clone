import { frames } from '../../components/frames';

export function addNewFrameClick(currentStage) {
    document.querySelector('.add-frame').addEventListener('click', () => {
        const { framesArray } = currentStage;
        let { currentFrame } = currentStage;
        const ElementToInsert = document.querySelector('.frame-wrapper');
        const position = 'beforeend';
        document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.remove('frame-active');
        framesArray.push('');
        currentFrame = framesArray.length - 1;
        frames.addFrame(ElementToInsert, position, currentFrame);
        document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.add('frame-active');
        currentStage.ctx.fillStyle = '#fff8dc';
        currentStage.ctx.fillRect(0, 0, currentStage.canvasSize, currentStage.canvasSize);
        framesArray[currentFrame] = currentStage.mainCanvas.toDataURL();
        currentStage.framesArray = framesArray;
        currentStage.currentFrame = currentFrame;
    });
}
