import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from '@/api/axiosClient';

export const handleLogin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await axiosClient.post('auth/login', user);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
export const handleRegister = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        const response = await axiosClient.post('auth/signup', user);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});

const initialState = {
    user: null,
    token: null,
    error: null,
    pending: null,
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.user = {
                name: 'Lâm Thành Tiến',
            };
        },
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.pending, (state) => {
            state.pending = true;
            state.error = false;
        });
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.token = action.payload.accessToken;
            state.pending = false;
            state.error = false;
        });
        builder.addCase(handleLogin.rejected, (state, action) => {
            state.error = action.payload.msg;
            state.user = null;
            state.token = null;
            state.pending = false;
        });
        // Register
        builder.addCase(handleRegister.pending, (state) => {
            state.pending = true;
            state.error = false;
        });
        builder.addCase(handleRegister.fulfilled, (state, action) => {
            state.token = action.payload.accessToken;
            state.pending = false;
            state.error = false;
        });
        builder.addCase(handleRegister.rejected, (state, action) => {
            state.error = action.payload.msg;
            state.user = null;
            state.token = null;
            state.pending = false;
        });
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
