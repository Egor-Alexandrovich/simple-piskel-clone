import { activeElement } from '../utils/activeElement';
import { codKeyMap } from './cod-key-map';
import { addNewFrameBtn } from './frames-controller/addNewFrameBtn';
import { deleteFrame } from './frames-controller/deleteFrame';
import { copyFrame } from './frames-controller/copyFrame';
import { exportApng } from '../utils/exportApng';
import { exportGIF } from '../utils/exportGIF';

export function keyboardListener(currentStage) {
    document.addEventListener('keyup', (event) => {
        const { primaryColorElementBg, secondColorElementBg } = currentStage;
        if ([event.code] in codKeyMap.tools) {
            const nextElement = document.getElementById(codKeyMap.tools[event.code]);
            activeElement(currentStage.currentToolElement, nextElement, 'active');
            currentStage.currentToolElement = nextElement;
            currentStage.currentTool = codKeyMap.tools[event.code];
        }
        if ([event.code] in codKeyMap.colorSelect) {
            const tempColor = currentStage.currentPrimaryColor;
            currentStage.currentPrimaryColor = currentStage.currentSecondColor;
            primaryColorElementBg.style.backgroundColor = currentStage.currentPrimaryColor;
            currentStage.currentSecondColor = tempColor;
            secondColorElementBg.style.backgroundColor = tempColor;
        }
        if ([event.code] in codKeyMap.frameTools) {
            if (codKeyMap.frameTools[event.code] === 'add') {
                addNewFrameBtn(currentStage);
            }
            if (codKeyMap.frameTools[event.code] === 'delete') {
                deleteFrame(event, currentStage);
            }
            if (codKeyMap.frameTools[event.code] === 'copy') {
                copyFrame(event, currentStage);
            }
        }
        if ([event.code] in codKeyMap.export) {
            if (codKeyMap.export[event.code] === 'gif') {
                exportGIF(currentStage);
            }
            if (codKeyMap.export[event.code] === 'apng') {
                exportApng(currentStage);
            }
        }
    });
}
