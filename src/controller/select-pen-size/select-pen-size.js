import { activeElement } from '../../utils/activeElement';

export function selectPenSize(currentStage) {
    document.querySelector('.pen-size').addEventListener('click', (event) => {
        if (event.target.classList.contains('pen-size__item')) {
            activeElement(currentStage.currentPenSizeElement, event.target, 'active');
            currentStage.currentPenSizeElement = event.target;
            currentStage.currentPenSize = parseInt(event.target.id, 10);
            console.log(currentStage.currentPenSize);
        }
    });
}
