import { drawBresenhamLine } from '../utils/draw-bresenham-line';
import { frames } from '../../frames/index.js';

export function stroke(event, currentStage, fillColor) {
    const CssCanvasSize = 512;
    const { currentPenSize } = currentStage;
    const startOffsetX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    const startOffsetY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    let prewX;
    let prewY;
    currentStage.mainCanvas.onmousemove = (eventMove) => {
        const moveOffsetX = Math.floor(eventMove.offsetX / (CssCanvasSize / currentStage.canvasSize));
        const moveOffsetY = Math.floor(eventMove.offsetY / (CssCanvasSize / currentStage.canvasSize));
        const backgroundColor = '#fff8dc';
        if (prewX && prewY) {
            drawBresenhamLine(startOffsetX, startOffsetY, prewX, prewY, currentStage, backgroundColor);
        }
        drawBresenhamLine(startOffsetX, startOffsetY, moveOffsetX, moveOffsetY, currentStage, fillColor);
        prewX = moveOffsetX;
        prewY = moveOffsetY;
    };
    currentStage.mainCanvas.onmouseup = (eventStop) => {
        const moveOffsetX = Math.floor(eventStop.offsetX / (CssCanvasSize / currentStage.canvasSize));
        const moveOffsetY = Math.floor(eventStop.offsetY / (CssCanvasSize / currentStage.canvasSize));
        currentStage.mainCanvas.onmousemove = null;
        if (currentStage.currentTool === 'stroke') {
            currentStage.ctx.fillStyle = fillColor;
            currentStage.ctx.fillRect(startOffsetX, startOffsetY, currentPenSize, currentPenSize);
            currentStage.ctx.fillRect(moveOffsetX, moveOffsetY, currentPenSize, currentPenSize);
        }
        currentStage.urlSave = currentStage.mainCanvas.toDataURL();
        frames.renderFrameCanvas(currentStage.urlSave, currentStage.currentFrame);
        currentStage.framesArray[currentStage.currentFrame] = currentStage.urlSave;
        // localStorage.setItem('dataUrl', urlSave);
    };
}
