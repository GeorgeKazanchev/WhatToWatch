import { describe, it, expect } from '@jest/globals';
import { getRuntimeString } from './helpers';

describe('Get runtime string', () => {
    it('Should return 0', () => {
        expect(getRuntimeString(0)).toEqual('0');
    });

    it('Should return minutes only', () => {
        expect(getRuntimeString(30)).toEqual('30m');
    });

    it('Should return hours and minutes', () => {
        expect(getRuntimeString(150)).toEqual('2h 30m');
    });

    it('Should throw error when a negative value was passed', () => {
        expect(() => { getRuntimeString(-1) }).toThrowError(RangeError);
    });
});
