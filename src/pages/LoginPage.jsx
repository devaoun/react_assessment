import '../index.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzE1MTQwNzUxLCJleHAiOjE3MTUyMjcxNTF9.KGdj_6400sPvKqyFV3fLBwEs1lbf7WkP6HRw0BrvorY",

// id: 7

function LoginPage() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUserName(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const loginData = async () => {
        try {
            const response = await axios.post('https://cc17-assessment-api.onrender.com/auth/login', {
                "email": userName,
                "password": password
            })
            console.log(response)
            if (response.data.status === 'success') {
                navigate('/home')
            }

        } catch (error) {
            alert('Username or password is wrong!!')
            console.log(error)

        }
    }

    const clickLogin = (event) => {
        event.preventDefault();
        loginData();
    }

    return (
        <>
            <div className="loginPage">
                <form className='loginPage_active'>
                    <h1>Welcome</h1>
                    <label>emailOrMobile</label>
                    <input onChange={handleUsername} value={userName} />
                    <label>password</label>
                    <input type='password' onChange={handlePassword} value={password} />
                    <button onClick={clickLogin}>LOG IN</button>
                </form>
            </div>
        </>
    )
}

export default LoginPage