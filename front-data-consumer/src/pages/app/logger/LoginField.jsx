import { Stack, TextField } from "@material-ui/core"

const LoginField = (props) => {
  const { username, disabled, password, setPassword, setUsername } = props

  const handleOnchangeUserName = e => {
    setUsername(e.target.value)
  }
  const handleOnchangePassword = e => {
    setPassword(e.target.value)
  }
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        id='pseudo'
        name='pseudo'
        label='pseudo'
        onChange={handleOnchangeUserName}
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
        onChange={handleOnchangePassword}
        disabled={disabled}
        fullWidth
      />
    </Stack>
  )
}

export default LoginField
