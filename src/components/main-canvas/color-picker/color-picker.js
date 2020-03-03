import { rgbToHex } from '../utils/grb-to-hex';

export function colorPicker(event, currentStage) {
    const CssCanvasSize = 512;
    const startOffsetX = Math.floor(event.offsetX / (CssCanvasSize / currentStage.canvasSize));
    const startOffsetY = Math.floor(event.offsetY / (CssCanvasSize / currentStage.canvasSize));
    const colorRGB = currentStage.ctx.getImageData(startOffsetX, startOffsetY, 1, 1).data;
    const colorHex = rgbToHex(colorRGB[0], colorRGB[1], colorRGB[2]);
    currentStage.currentPrimaryColor = colorHex;
    currentStage.primaryColorElement.value = colorHex;
    currentStage.primaryColorElementBg.style.backgroundColor = colorHex;
    // document.querySelector('.current-color').style.backgroundColor = currentStage.currentColor;
    // localStorage.setItem('currentStage', JSON.stringify(currentStage));

}
