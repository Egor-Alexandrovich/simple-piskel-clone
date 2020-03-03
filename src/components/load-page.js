import { currentStage } from '../utils/current-stage';
import { container } from './container';
import { header } from './header';
import { main } from './main';
import { barColor } from './bar-color';
import { barTools } from './bar-tools';
import { barPenSize } from './bar-pen-size';
import { frames } from './frames';
import { canvas } from './canvas';
import { preview } from './preview';

const { currentPenSize, currentTool, currentPrimaryColor, currentSecondColor, canvasSize } = currentStage;

export function loadPage() {
    container.run();
    main.run();
    header.run();
    barColor.run(currentPrimaryColor, currentSecondColor);
    barTools.run(currentTool);
    barPenSize.run(currentPenSize);
    frames.run();
    canvas.run(canvasSize);
    preview.run();
    currentStage.primaryColorElement = document.getElementById('primary-color');
    currentStage.secondColorElement = document.getElementById('second-color');
    currentStage.primaryColorElementBg = document.getElementById('primary-color-bg');
    currentStage.secondColorElementBg = document.getElementById('second-color-bg');
    currentStage.currentPenSizeElement = document.getElementById(currentPenSize);
    currentStage.currentToolElement = document.getElementById(currentTool);
    currentStage.canvasSizeElement = document.getElementById(canvasSize);
    currentStage.mainCanvas = document.getElementById('main-canvas');
    currentStage.ctx = currentStage.mainCanvas.getContext('2d');
    currentStage.ctx.fillStyle = '#fff8dc';
    currentStage.ctx.fillRect(0, 0, currentStage.canvasSize, currentStage.canvasSize);
    currentStage.framesArray[0] = currentStage.mainCanvas.toDataURL();
    currentStage.currentFrame = 0;
    frames.renderFrameCanvas(currentStage.framesArray[0], currentStage.currentFrame);
}
