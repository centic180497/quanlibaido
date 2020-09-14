import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '@material-ui/core'

function Login() {
    const { register } = useForm()
    return (
        <div>
            <form>
                <TextField inputRef={register} variant="outlined" name="username" label="Tên đăng nhập" />
                <TextField inputRef={register} variant="outlined" name="password" label="Mật khẩu" />
            </form>
        </div>
    )
}

export default Login
