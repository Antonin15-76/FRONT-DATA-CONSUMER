import { IconButton, Paper, Stack, TextField } from "@material-ui/core"
import { Copyright, Eye } from "mdi-material-ui"
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
                    label='token'
                    value={token}
                    disabled
                    fullWidth
                />
                <IconButton
                onClick={ () => {
                    setIsPassword(!isPassword)
                }}
                title='Show Token'
                >
                    <Eye fontSize='inherit' />                    
                </IconButton> 
                <IconButton
                onClick={() => {navigator.clipboard.writeText(token)}}
                title='Copy'
                >
                    <Copyright fontSize='inherit' />                      
                </IconButton> 
            </Stack>  
        </Paper>
    )
}

export default Infos
