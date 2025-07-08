import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import projectReducer from './features/project/projectSlice'
import issueReducer from './features/issues/issueSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        project: projectReducer,
        issue: issueReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch