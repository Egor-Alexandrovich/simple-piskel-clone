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
import { drawImageToFrame } from '../utils/drawImageToFrame';


export function loadPageApp(currentStageApp) {
    const { currentPenSize, currentTool, currentPrimaryColor, currentSecondColor, canvasSize, urlSave, framesArray, currentFrame } = currentStageApp;
    container.run();
    main.run();
    header.run();
    barColor.run(currentPrimaryColor, currentSecondColor);
    barTools.run(currentTool);
    barPenSize.run(currentPenSize);
    frames.run();
    canvas.run(canvasSize);
    preview.run();
    currentStage.currentPenSize = currentPenSize;
    currentStage.currentTool = currentTool;
    currentStage.currentPrimaryColor = currentPrimaryColor;
    currentStage.currentSecondColor = currentSecondColor;
    currentStage.canvasSize = canvasSize;
    currentStage.primaryColorElement = document.getElementById('primary-color');
    currentStage.secondColorElement = document.getElementById('second-color');
    currentStage.primaryColorElementBg = document.getElementById('primary-color-bg');
    currentStage.secondColorElementBg = document.getElementById('second-color-bg');
    currentStage.currentPenSizeElement = document.getElementById(currentPenSize);
    currentStage.currentToolElement = document.getElementById(currentTool);
    currentStage.canvasSizeElement = document.getElementById(canvasSize);
    currentStage.mainCanvas = document.getElementById('main-canvas');
    currentStage.ctx = currentStage.mainCanvas.getContext('2d');
    currentStage.mainCanvas.width = canvasSize;
    currentStage.mainCanvas.height = canvasSize;
    currentStage.urlSave = urlSave;
    drawImageToFrame(urlSave, currentStage.ctx);
    framesArray.forEach((element) => {
        currentStage.framesArray.push(element);
    });
    currentStage.currentFrame = currentFrame;
    const frameWrapperElement = document.querySelector('.frame-wrapper');
    framesArray.forEach((element, index) => {
        if (index !== 0) {
            frames.addFrame(frameWrapperElement, 'beforeend', index);
        }
        frames.renderFrameCanvas(element, index);
    });
    document.querySelector('.frame-active').classList.remove('frame-active');
    document.querySelector(`#frame-canvas${currentFrame}`).parentElement.parentElement.classList.add('frame-active');
}
