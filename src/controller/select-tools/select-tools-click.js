import { activeElement } from '../../utils/activeElement';

export function selectToolsClick(currentStage) {
    document.getElementById('tools').addEventListener('click', (event) => {
        if (event.target.parentNode.id !== 'tools') {
            activeElement(currentStage.currentToolElement, event.target.parentNode, 'active');
            currentStage.currentToolElement = event.target.parentNode;
            currentStage.currentTool = event.target.parentNode.id;
            console.log(event.target.parentNode.id);
        }
    });
}
