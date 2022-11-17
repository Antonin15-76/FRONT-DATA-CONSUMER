import { IconButton, Paper, Stack, TextField } from "@material-ui/core"
import { Eye } from "mdi-material-ui"
import { useState } from "react"
import { useLocalStorage } from "react-use"

const Infos = () => {
    const [isPassword, setIsPassword] = useState(true)
    const [token] = useLocalStorage('accessToken')
    return (
        <Paper
                style={{ 
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    height: '700px'
                }} 
            >
                <Stack direction="row" spacing={2}>
                   <TextField
                    id='password'
                    name='password'
                    type={isPassword ? 'password' : 'text'}
                    label='password'
                    value={token}
                    // defaultValue={password.value}
                    // onChange={password.onChange}
                    disabled
                    fullWidth
                />
                <IconButton
                onClick={ () => {
                    setIsPassword(!isPassword)
                }}
                title='show Token'
                >
                    <Eye fontSize='inherit' />
                </IconButton> 
                </Stack>
                
        </Paper>
    )
}

export default Infos
