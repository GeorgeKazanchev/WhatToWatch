import React, { Fragment } from 'react';
import { UserBlock } from '../user-block/user-block';
import { Footer } from '../footer/footer';
import { authInfo } from '../../mocks/auth-info';

export const App = () => {
    return (
        <Fragment>
            <UserBlock
                isAuthorized={true}
                avatarUrl={authInfo.avatarUrl} />
            <Footer
                isMainPage={false} />
        </Fragment>
    );
};
