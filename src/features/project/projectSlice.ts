import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type RootState } from '../../store'

export interface Project {
  _id: string
  name: string
  owner: string
  members: string[]
}

interface ProjectState {
  projects: Project[]
  loading: boolean
  error: string | null
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
}

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk<Project[], void, { state: RootState }>(
  'project/fetchProjects',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState()
      const res = await axios.get('/api/projects', {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      })
      return res.data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch projects')
    }
  },
)

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    clearProjects: (state) => {
      state.projects = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.loading = false
        state.projects = action.payload
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearProjects } = projectSlice.actions

export default projectSlice.reducer
