import { describe, it, expect } from '@jest/globals';
import { getDateAttributeString } from './helpers';

describe('Get date attribute string', () => {
    it('Should return correct Unix epoch string', () => {
        expect(getDateAttributeString(new Date(0))).toEqual('1970-01-01');
    });

    it('Should return correct date with 2-sign day number', () => {
        const date = new Date(2024, 0, 11);
        const utcMonth = date.getUTCMonth() + 1;
        const utcDate = date.getUTCDate();
        expect(getDateAttributeString(date)).toEqual(`2024-0${utcMonth}-${utcDate}`);
    });

    it('Should return correct date with 2-sign month number', () => {
        const date = new Date(2024, 10, 2);
        const utcMonth = date.getUTCMonth() + 1;
        const utcDate = date.getUTCDate();
        expect(getDateAttributeString(date)).toEqual(`2024-${utcMonth}-0${utcDate}`);
    });
});
