import { frames } from '../../frames/index';

export function eraser(event, currentStage) {
    const CssCanvasSize = 512;
    const { currentPenSize } = currentStage;
    const startOffsetX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    const startOffsetY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    currentStage.mainCanvas.onmousemove = (eventMove) => {
        currentStage.ctx.fillStyle = '#fff8dc';
        const moveOffsetX = Math.floor(eventMove.offsetX / (CssCanvasSize / currentStage.canvasSize));
        const moveOffsetY = Math.floor(eventMove.offsetY / (CssCanvasSize / currentStage.canvasSize));
        currentStage.ctx.fillRect(moveOffsetX, moveOffsetY, currentPenSize, currentPenSize);
    };
    currentStage.mainCanvas.onmouseup = () => {
        currentStage.mainCanvas.onmousemove = null;
        if (currentStage.currentTool === 'pencil') {
            currentStage.ctx.fillStyle = '#fff8dc';
            currentStage.ctx.fillRect(startOffsetX, startOffsetY, currentPenSize, currentPenSize);
        }
        currentStage.urlSave = currentStage.mainCanvas.toDataURL();
        frames.renderFrameCanvas(currentStage.urlSave, currentStage.currentFrame);
        currentStage.framesArray[currentStage.currentFrame] = currentStage.urlSave;
        // localStorage.setItem('dataUrl', urlSave);
    };
}
