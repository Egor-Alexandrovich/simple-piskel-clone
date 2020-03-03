export function drawBresenhamLine(starX, startY, endX, endY, currentStage, color) {
    const { currentPenSize } = currentStage;
    const deltaX = Math.abs(endX - starX);
    const deltaY = Math.abs(endY - startY);
    const signX = starX < endX ? 1 : -1;
    const signY = startY < endY ? 1 : -1;
    let difference = deltaX - deltaY;
    while (starX !== endX || startY !== endY) {
        currentStage.ctx.fillStyle = color;
        currentStage.ctx.fillRect(starX, startY, currentPenSize, currentPenSize);
        if (starX === endX && startY === endY) break;
        const differenceX2 = difference * 2;
        if (differenceX2 > -deltaY) {
            difference -= deltaY;
            starX += signX;
        }
        if (differenceX2 < deltaX) {
            difference += deltaX;
            startY += signY;
        }
    }
}
