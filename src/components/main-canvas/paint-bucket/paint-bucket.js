import { hexToRGB } from '../utils/hex-to-rgb';
import { matchStartColor } from '../utils/match-start-color';
import { colorPixel } from '../utils/color-pixel';
import { rgbToHex } from '../utils/grb-to-hex';
import { frames } from '../../frames/index.js';

export function paintBucket(event, currentStage, fillColor) {
    const CssCanvasSize = 512;
    const startX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    const startY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    const pixelStack = [[startX, startY]];
    const colorLayer = currentStage.ctx.getImageData(0, 0, currentStage.canvasSize, currentStage.canvasSize);
    const startColorRGB = currentStage.ctx.getImageData(startX, startY, 1, 1).data;
    const fillColorRGB = hexToRGB(fillColor);
    if (rgbToHex(startColorRGB[0], startColorRGB[1], startColorRGB[2]) === fillColor) {
        return;
    }
    while (pixelStack.length) {
        let reachLeft = false;
        let reachRight = false;
        const newPos = pixelStack.pop();
        const x = newPos[0];
        let y = newPos[1];
        let pixelPos = (y * currentStage.canvasSize + x) * 4;
        while (y-- >= 0 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
            pixelPos -= currentStage.canvasSize * 4;
        }
        pixelPos += currentStage.canvasSize * 4;
        ++y;
        while (y++ < currentStage.canvasSize - 1 && matchStartColor(pixelPos, colorLayer, startColorRGB)) {
            colorPixel(pixelPos, fillColorRGB, colorLayer);
            if (x > 0) {
                if (matchStartColor(pixelPos - 4, colorLayer, startColorRGB)) {
                    if (!reachLeft) {
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                } else if (reachLeft) {
                    reachLeft = false;
                }
            }
            if (x < currentStage.canvasSize - 1) {
                if (matchStartColor(pixelPos + 4, colorLayer, startColorRGB)) {
                    if (!reachRight) {
                        pixelStack.push([x + 1, y]);
                        reachRight = true;
                    }
                } else if (reachRight) {
                    reachRight = false;
                }
            }
            pixelPos += currentStage.canvasSize * 4;
        }
    }
    currentStage.ctx.putImageData(colorLayer, 0, 0);
    currentStage.urlSave = currentStage.mainCanvas.toDataURL();
    frames.renderFrameCanvas(currentStage.urlSave, currentStage.currentFrame);
    currentStage.framesArray[currentStage.currentFrame] = currentStage.urlSave;
    // document.querySelector('.current-color').style.backgroundColor = currentStage.currentColor;
    // localStorage.setItem('currentStage', JSON.stringify(currentStage));

}
