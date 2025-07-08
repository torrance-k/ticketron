import { createSlice, type PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../store'

// ----------- Types -----------

export interface Issue {
  _id: string
  title: string
  description?: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  tags: string[]
  project: string
  assignee?: string
  createdBy: string
}

interface IssueState {
  issues: Issue[]
  loading: boolean
  error: string | null
}

const initialState: IssueState = {
  issues: [],
  loading: false,
  error: null,
}

// ----------- Thunks -----------

// Fetch issues for a project
export const fetchIssuesForProject = createAsyncThunk<Issue[], string, { state: RootState }>(
  'issue/fetchIssuesForProject',
  async (projectId, thunkAPI) => {
    try {
      const state = thunkAPI.getState()
      const res = await axios.get(`/api/issues/project/${projectId}`, {
        headers: { Authorization: `Bearer ${state.auth.token}` },
      })
      return res.data
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch issues')
    }
  },
)

const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    clearIssues: (state) => {
      state.issues = []
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssuesForProject.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchIssuesForProject.fulfilled, (state, action: PayloadAction<Issue[]>) => {
        state.loading = false
        state.issues = action.payload
      })
      .addCase(fetchIssuesForProject.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearIssues } = issueSlice.actions
export default issueSlice.reducer
