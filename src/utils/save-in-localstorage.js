export function saveInLocalStorage(currentStage) {
    window.onbeforeunload = function () {
        localStorage.setItem('currentStageApp', JSON.stringify(currentStage));
    };
}
