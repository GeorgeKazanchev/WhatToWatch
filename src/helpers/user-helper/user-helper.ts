import { AuthInfo } from '../../types/auth-info';

export const checkIsAuthorized = (authInfo: AuthInfo | null) => {
    return authInfo ? true : false;
}
