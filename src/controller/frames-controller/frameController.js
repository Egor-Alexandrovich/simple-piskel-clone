import { deleteFrame } from './deleteFrame';
import { selectFrameClick } from './select-frame-click';
import { copyFrame } from './copyFrame';

export function frameController(currentStage) {
    document.querySelector('.frame-wrapper').addEventListener('click', (event) => {
        if (event.target.classList.contains('frame-canvas')) {
            selectFrameClick(event, currentStage);
        }
        if (event.target.classList.contains('delete')) {
            deleteFrame(event, currentStage);
        }
        if (event.target.classList.contains('copy')) {
            copyFrame(event, currentStage);
        }
    });
}
