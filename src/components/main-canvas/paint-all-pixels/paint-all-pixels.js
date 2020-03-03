import { hexToRGB } from '../utils/hex-to-rgb';
import { colorPixel } from '../utils/color-pixel';
import { matchStartColor } from '../utils/match-start-color';

import { frames } from '../../frames/index';

export function paintAllPixels(event, currentStage, fillColor) {
    const CssCanvasSize = 512;
    const startOffsetX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    const startOffsetY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    const startColorRGB = currentStage.ctx.getImageData(startOffsetX, startOffsetY, 1, 1).data;
    const fillColorRGB = hexToRGB(fillColor);
    const colorLayer = currentStage.ctx.getImageData(0, 0, currentStage.canvasSize, currentStage.canvasSize);
    let pixelPos = 0;
    while (pixelPos < colorLayer.data.length) {
        if (matchStartColor(pixelPos, colorLayer, startColorRGB)) {
            colorPixel(pixelPos, fillColorRGB, colorLayer);
        }
        pixelPos += 4;
    }
    currentStage.ctx.putImageData(colorLayer, 0, 0);
    currentStage.urlSave = currentStage.mainCanvas.toDataURL();
    frames.renderFrameCanvas(currentStage.urlSave, currentStage.currentFrame);
    currentStage.framesArray[currentStage.currentFrame] = currentStage.urlSave;
}
