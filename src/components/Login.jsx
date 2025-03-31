// pages/login.jsx
import { useState } from 'react';
import Swal from 'sweetalert2';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'test' && password === 'password') {
            Swal.fire('Success', 'Login successful!', 'success');
        } else {
            Swal.fire('Error', 'Invalid username or password', 'error');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!username || !password}>
                    Login
                </button>
            </form>
        </div>
    );
}
