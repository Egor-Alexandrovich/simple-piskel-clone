import { currentStage } from './utils/current-stage';
import { loadPage } from './components/load-page';
import { controller } from './controller/controller';
import { mainCanvas } from './components/main-canvas/mainCanvas';
import { saveInLocalStorage } from './utils/save-in-localstorage';
import { loadPageApp } from './components/load-page-app';

export function app() {
    if (localStorage.getItem('currentStageApp')) {
        const currentStageApp = JSON.parse(localStorage.getItem('currentStageApp'));
        loadPageApp(currentStageApp);
    } else { loadPage(); }
    controller(currentStage);
    mainCanvas(currentStage);
    saveInLocalStorage(currentStage);
}
