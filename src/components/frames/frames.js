export const frames = {
    html: '',
    run() {
        document.querySelector('.frames').insertAdjacentHTML('afterbegin', this.html);
    },
    addFrame(element, position, id) {
        element.insertAdjacentHTML(position, `<div class="frame">
        <div class="number-wrapper">${id + 1}</div>
        <div class="img-wrapper-delete">
            <div class="delete__window">
                delete (D)
            </div>
            <img src="images/delete.png" class="delete" alt="delete">
        </div>
        <div class="img-wrapper-copy">
            <div class="delete__window">
                copy (Y)
            </div>
            <img src="images/copy.png" class="copy" alt="copy">
        </div>
        <div class="frame__item">
            <canvas class="frame-canvas" id="frame-canvas${id}" width="96" height="96" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></canvas>
        </div>
    </div>`);
    },
    renderFrameCanvas(url, currentFrame) {
        const frameCanvasCssSize = 96;
        const frameCanvasElement = document.querySelector(`#frame-canvas${currentFrame}`);
        const contextFrame = frameCanvasElement.getContext('2d');
        const pict = new Image();

        pict.crossOrigin = 'Anonymous';
        pict.src = url;
        pict.onload = function () {
            contextFrame.drawImage(pict, 0, 0, frameCanvasCssSize, frameCanvasCssSize);
        };
    },
};
