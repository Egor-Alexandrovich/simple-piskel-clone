import { pencil } from './pencil/pencil';
import { eraser } from './eraser/eraser';
import { colorPicker } from './color-picker/color-picker';
import { paintBucket } from './paint-bucket/paint-bucket';
import { stroke } from './stroke/stroke';
import { paintAllPixels } from './paint-all-pixels/paint-all-pixels';

export function mainCanvas(currentStage) {
    currentStage.mainCanvas.width = currentStage.canvasSize;
    currentStage.mainCanvas.height = currentStage.canvasSize;
    currentStage.ctx.fillStyle = '#fff8dc';
    currentStage.ctx.fillRect(0, 0, currentStage.canvasSize, currentStage.canvasSize);
    currentStage.mainCanvas.oncontextmenu = (e) => {
        e.preventDefault();
    };
    currentStage.mainCanvas.onmousedown = (event) => {
        let fillColor = currentStage.currentPrimaryColor;
        if (event.which === 3) {
            fillColor = currentStage.currentSecondColor;
        }
        if (currentStage.currentTool === 'pencil') {
            pencil(event, currentStage, fillColor);
        } else if (currentStage.currentTool === 'eraser') {
            eraser(event, currentStage);
        } else if (currentStage.currentTool === 'color') {
            colorPicker(event, currentStage);
        } else if (currentStage.currentTool === 'bucket') {
            paintBucket(event, currentStage, fillColor);
        } else if (currentStage.currentTool === 'stroke') {
            stroke(event, currentStage, fillColor);
        } else if (currentStage.currentTool === 'paint-all') {
            paintAllPixels(event, currentStage, fillColor);
        }
    };
}
