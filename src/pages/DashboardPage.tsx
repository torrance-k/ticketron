import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch } from '../store'
import type { RootState } from '../store'
import { login, logout } from '../features/auth/authSlice'
import { useEffect } from "react"
import { fetchProjects } from "../features/project/projectSlice"

export default function DashboardPage() {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    const { projects, loading, error } = useSelector((state: RootState) => state.project)

    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            {auth.isAuthenticated ? (
                <div>
                    <p>Welcome, {auth.user?.username}!</p>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </div>
            ) : (
                <button
                    onClick={() =>
                        dispatch(
                            login({
                                token: 'fake-token',
                                user: { username: 'tori', email: 'tori@example.com' },
                            }),
                        )
                    }
                >
                    Login
                </button>
            )}
            <h1 className="text-xl font-bold mb-4">Projects</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul className="list-disc pl-5">
                {Array.isArray(projects) && projects.map((project) => (
                    <li key={project._id}>{project.name}</li>
                ))}
            </ul>
        </div>
    )
}