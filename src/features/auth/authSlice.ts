import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    token: string | null
    user: { username: string; email: string } | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    token: null,
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{token: string; user: { username: string; email: string } }>) => {
            state.token = action.payload.token
            state.user = action.payload.user
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.token = null
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer