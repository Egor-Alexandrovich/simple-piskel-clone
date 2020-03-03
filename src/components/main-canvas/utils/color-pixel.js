export function colorPixel(pixelPos, fillColor, colorLayer) {
    colorLayer.data[pixelPos] = fillColor[0];
    colorLayer.data[pixelPos + 1] = fillColor[1];
    colorLayer.data[pixelPos + 2] = fillColor[2];
    colorLayer.data[pixelPos + 3] = 255;
}
