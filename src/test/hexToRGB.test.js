/* eslint-disable no-undef */
import { hexToRGB } from '../components/main-canvas/utils/hex-to-rgb';

test('hex to RGB converter', () => {
    expect(hexToRGB('#000000')).toStrictEqual([0, 0, 0]);
    expect(hexToRGB('#FFFFFF')).toStrictEqual([255, 255, 255]);
});
