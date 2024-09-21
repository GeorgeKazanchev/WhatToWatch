import type { AuthInfo } from '../../../shared/types';

export const checkIsAuthorized = (authInfo: AuthInfo | null) => {
    return authInfo ? true : false;
}
