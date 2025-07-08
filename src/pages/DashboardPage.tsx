import { useDispatch, useSelector } from "react-redux"
import type { RootState } from '../store'
import { login, logout } from '../features/auth/authSlice'

export default function DashboardPage() {
    const auth = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

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
        </div>
    )
}