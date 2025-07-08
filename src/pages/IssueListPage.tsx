import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from '../store'
import { fetchIssuesForProject } from '../features/issues/issueSlice'

export default function IssueListPage({ projectId }: { projectId: string }) {
  const dispatch = useDispatch<AppDispatch>()
  const { issues, loading, error } = useSelector((state: RootState) => state.issue)

  useEffect(() => {
    dispatch(fetchIssuesForProject(projectId))
  }, [dispatch, projectId])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Issues</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="list-disc pl-5">
        {Array.isArray(issues) && issues.map((issue) => (
          <li key={issue._id}>
            {issue.title} - <span className="italic">{issue.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
