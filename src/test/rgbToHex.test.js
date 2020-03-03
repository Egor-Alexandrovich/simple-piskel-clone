/* eslint-disable no-undef */
import { rgbToHex } from '../components/main-canvas/utils/grb-to-hex';

test('hex to RGB converter', () => {
    expect(rgbToHex(0, 0, 0)).toStrictEqual('#000000');
    expect(rgbToHex(255, 255, 255)).toStrictEqual('#ffffff');
});
