import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthInfo } from '../../../shared/types/auth-info';

type UserState = {
    authInfo: AuthInfo | null
};

const initialState: UserState = {
    authInfo: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthInfo: (state: UserState = initialState, action: PayloadAction<AuthInfo | null>) => {
            state.authInfo = action.payload;
        }
    }
});

export default userSlice.reducer;
export const { setAuthInfo } = userSlice.actions;
export type { UserState };
