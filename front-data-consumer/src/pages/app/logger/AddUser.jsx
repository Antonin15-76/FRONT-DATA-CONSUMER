import { Stack, TextField } from "@material-ui/core"
import useFetch from 'use-http'
import useInput from "../../../Components/hooks/useInput"

const AddUser = (props) => {
    const { disabled } = props
  
    const username = useInput('')
    const password = useInput('')

  return (
    <form id='registerId' style={{ width: '500px', padding: '16px' }}>
        <Stack direction="row" spacing={2}>
        <TextField
            id='pseudo'
            name='pseudo'
            label='pseudo'
            onChange={username.onChange}
            defaultValue={username.value}
            disabled={disabled}
            fullWidth
        />
        <TextField
            id='password'
            name='password'
            type='password'
            label='password'
            defaultValue={password.value}
            onChange={password.onChange}
            disabled={disabled}
            fullWidth
        />
        </Stack>
    </form>
  )
}

export default AddUser
