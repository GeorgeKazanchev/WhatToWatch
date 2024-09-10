import { describe, it, expect } from '@jest/globals';
import { AuthInfo } from '../../types/auth-info';
import { checkIsAuthorized } from './user-helper';

const testAuthInfo: AuthInfo = {
    id: 1,
    email: 'test@google.com',
    name: 'Test.User',
    avatarUrl: './img/avatar.jpg'
};

describe('Check is authorized', () => {
    it('Should return true when authData is obtained', () => {
        expect(checkIsAuthorized(testAuthInfo)).toBe(true);
    });

    it('Should return false when authData is absent', () => {
        expect(checkIsAuthorized(null)).toBe(false);
    });
});
