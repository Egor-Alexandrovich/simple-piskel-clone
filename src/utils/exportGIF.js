export function exportGIF(currentStage) {
    const { FPS, framesArray } = currentStage;
    // eslint-disable-next-line no-undef
    const encoder = new GIFEncoder();
    encoder.setRepeat(0);
    encoder.setDelay(1000 / FPS);
    encoder.start();
    framesArray.forEach((element, index) => {
        const frameCanvasElement = document.querySelector(`#frame-canvas${index}`);
        const ctx = frameCanvasElement.getContext('2d');
        encoder.addFrame(ctx);
    });
    encoder.finish();
    encoder.download('saved_frames.gif');
}
