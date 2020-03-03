
import { frames } from '../../frames/index.js';

export function pencil(event, currentStage, fillColor) {
    const CssCanvasSize = 512;
    const { currentPenSize } = currentStage;
    let startOffsetX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    let startOffsetY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    currentStage.mainCanvas.onmousemove = (eventMove) => {
        currentStage.ctx.fillStyle = fillColor;
        const moveOffsetX = Math.floor(eventMove.offsetX / (CssCanvasSize / currentStage.canvasSize));
        const moveOffsetY = Math.floor(eventMove.offsetY / (CssCanvasSize / currentStage.canvasSize));
        const deltaX = Math.abs(moveOffsetX - startOffsetX);
        const deltaY = Math.abs(moveOffsetY - startOffsetY);
        const signX = startOffsetX < moveOffsetX ? 1 : -1;
        const signY = startOffsetY < moveOffsetY ? 1 : -1;
        let difference = deltaX - deltaY;
        while (startOffsetX !== moveOffsetX || startOffsetY !== moveOffsetY) {
            currentStage.ctx.fillStyle = fillColor;
            currentStage.ctx.fillRect(startOffsetX, startOffsetY, currentPenSize, currentPenSize);
            if (startOffsetX === moveOffsetX && startOffsetY === moveOffsetY) break;
            const differenceX2 = difference * 2;
            if (differenceX2 > -deltaY) {
                difference -= deltaY;
                startOffsetX += signX;
            }
            if (differenceX2 < deltaX) {
                difference += deltaX;
                startOffsetY += signY;
            }
        }
    };
    currentStage.mainCanvas.onmouseup = () => {
        currentStage.mainCanvas.onmousemove = null;
        if (currentStage.currentTool === 'pencil') {
            currentStage.ctx.fillStyle = fillColor;
            currentStage.ctx.fillRect(startOffsetX, startOffsetY, currentPenSize, currentPenSize);
        }
        currentStage.urlSave = currentStage.mainCanvas.toDataURL();
        frames.renderFrameCanvas(currentStage.urlSave, currentStage.currentFrame);
        currentStage.framesArray[currentStage.currentFrame] = currentStage.urlSave;
        // localStorage.setItem('dataUrl', urlSave);
    };
}
