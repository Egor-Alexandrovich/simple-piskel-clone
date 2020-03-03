/* eslint-disable no-undef */
import { matchStartColor } from '../components/main-canvas/utils/match-start-color';

const colorLayer = {
    data: [255, 255, 255],
};

test('hex to RGB converter', () => {
    expect(matchStartColor(0, colorLayer, [255, 255, 255])).toStrictEqual(true);
    colorLayer.data = [155, 155, 155];
    expect(matchStartColor(0, colorLayer, [255, 255, 255])).toStrictEqual(false);
});
