import { activeElement } from '../../utils/activeElement';

export function selectCanvasClick(currentStage) {
    document.querySelector('.control-block-wrapper').addEventListener('click', (event) => {
        if (!event.target.classList.contains('control-block-wrapper')) {
            const { framesArray, currentFrame } = currentStage;
            activeElement(currentStage.canvasSizeElement, event.target, 'active-btn');
            currentStage.canvasSizeElement = event.target;
            currentStage.canvasSize = parseInt(event.target.id, 10);
            currentStage.mainCanvas.width = currentStage.canvasSize;
            currentStage.mainCanvas.height = currentStage.canvasSize;
            currentStage.ctx = currentStage.mainCanvas.getContext('2d');
            currentStage.ctx.fillStyle = '#fff8dc';
            currentStage.ctx.fillRect(0, 0, currentStage.canvasSize, currentStage.canvasSize);

            const pict = new Image();

            pict.crossOrigin = 'Anonymous';
            pict.src = framesArray[currentFrame];
            pict.onload = function () {
                currentStage.ctx.drawImage(pict, 0, 0);
            };
        }
    });
}
