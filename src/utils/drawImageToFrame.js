export function drawImageToFrame(url, ctx) {
    const pict = new Image();
    pict.crossOrigin = 'Anonymous';
    pict.src = url;
    pict.onload = function () {
        ctx.drawImage(pict, 0, 0);
    };
}
