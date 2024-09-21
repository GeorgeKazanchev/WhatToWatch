import { describe, it, expect } from '@jest/globals';
import { getRatingLevel } from './helpers';

describe('Get rating level', () => {
    it('Should return the lowest level', () => {
        expect(getRatingLevel(0)).toEqual('Bad');
    });

    it('Should return the highest level', () => {
        expect(getRatingLevel(10)).toEqual('Awesome');
    });

    it('Should throw error when too large value was passed', () => {
        expect(() => { getRatingLevel(11) }).toThrowError(RangeError);
    });

    it('Should throw error when a negative value was passed', () => {
        expect(() => { getRatingLevel(-1) }).toThrowError(RangeError);
    });
});
