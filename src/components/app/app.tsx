import React from 'react';
import { UserBlock } from '../user-block/user-block';
import { authInfo } from '../../mocks/auth-info';

export const App = () => {
    return (
        <UserBlock
            isAuthorized={true}
            avatarUrl={authInfo.avatarUrl} />
    );
};
