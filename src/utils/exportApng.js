const UPNG = require('upng-js');
const download = require('downloadjs');

export function exportApng(currentStage) {
    const CssFrameSize = 96;
    const { FPS, framesArray } = currentStage;
    const arrBuffer = [];
    const arrFrameDelay = new Array(framesArray.length).fill(1000 / FPS);
    framesArray.forEach((element, index) => {
        const frameCanvasElement = document.querySelector(`#frame-canvas${index}`);
        const ctx = frameCanvasElement.getContext('2d');
        const myImageData = ctx.getImageData(0, 0, CssFrameSize, CssFrameSize);
        const buffer = myImageData.data.buffer;
        arrBuffer.push(buffer);
    });
    const unpgFile = UPNG.encode(arrBuffer, CssFrameSize, CssFrameSize, 0, arrFrameDelay);
    download(unpgFile, 'saved_frames.apng', 'apng');
}
