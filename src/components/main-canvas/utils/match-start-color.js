export function matchStartColor(pixelPos, colorLayer, startColorRGB) {
    const r = colorLayer.data[pixelPos];
    const g = colorLayer.data[pixelPos + 1];
    const b = colorLayer.data[pixelPos + 2];
    return (r === startColorRGB[0] && g === startColorRGB[1] && b === startColorRGB[2]);
}
