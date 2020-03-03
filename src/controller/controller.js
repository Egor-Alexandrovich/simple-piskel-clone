import { selectToolsClick } from './select-tools/select-tools-click';
import { selectColorClick } from './select-color/select-color-click';
import { selectCanvasClick } from './select-canvas-size/select-canvas-click';
import { selectPenSize } from './select-pen-size/select-pen-size';
import { addNewFrameClick } from './frames-controller/addNewFrame';
import { frameController } from './frames-controller/frameController';
import { dropFrame } from './frames-controller/dragFrame';
import { previewController } from './preview-controller/preview-controller';
import { keyboardListener } from './keyboard-listener';


export function controller(currentStage) {
    selectColorClick(currentStage);
    selectToolsClick(currentStage);
    selectPenSize(currentStage);
    selectCanvasClick(currentStage);
    keyboardListener(currentStage);
    addNewFrameClick(currentStage);
    frameController(currentStage);
    dropFrame(currentStage);
    previewController(currentStage);
}
