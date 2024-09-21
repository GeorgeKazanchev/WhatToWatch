import userReducer, { UserState, setAuthInfo } from './user';
import { it, expect } from '@jest/globals';
import { AuthInfo } from '../../../shared/types/auth-info';
import { authInfo } from '../../../shared/mocks';

type UserStateGetter = (authInfo?: AuthInfo | null) => UserState;

const getInitialState: UserStateGetter = (authInfo?: AuthInfo | null) => {
    return {
        authInfo: authInfo ?? null
    };
}

it('Should set an authorization info', () => {
    expect(userReducer(getInitialState(), setAuthInfo(authInfo)))
        .toEqual({
            authInfo: authInfo
        });
});

it('Should switch to non-authorized state', () => {
    const state = getInitialState(authInfo);
    expect(userReducer(state, setAuthInfo(null)))
        .toEqual({
            authInfo: null
        });
});
