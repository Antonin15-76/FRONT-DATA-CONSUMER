import { CircularProgress, Dialog, DialogTitle, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import useFetch from 'use-http'
import useSnackbar from "../../../Components/hooks/useSnackbar"
import ValidateButton from "../../../Components/button/ValidateButton"
import LoginField from "./LoginField"
import AddUser from "./AddUser"
import useDialog from "../../../Components/hooks/useDialog"

const useStyles = makeStyles((theme) => ({
  forgotpasswordLink: {
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  background: {
    // backgroundImage: `url(${BasGauche}), url(${Haut}), url(${HautGaucheMilieu}), url(${HautGauche}), url(${Droite})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left bottom, 200px top, left top, left top, right 40px'
  }
}))

const LogIn = () => {
  const classes = useStyles()
  return (
    <div className={classes.background} style={{ height: '100%' }}>
      <FormLogin />
    </div>
  )
}

const FormLogin = () => {
  const { post, response, loading, error } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/login')
  // console.log(post)
  const { post: postAdd , response: responseAdd , loading: loadingAdd , error: errorAdd } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/fines')

  const [username, setUsername ] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles()
  const snackbar = useSnackbar()
  const dialogAdd = useDialog(false)
  // const needToChangePasswordDialog = useState(false)

  const navigate = useNavigate()
  const [, setToken] = useLocalStorage('accessToken')

  const handleOnSubmit = async () => {
    await post({
        username: username,
        password: password
    })
    
    if (response.ok) {
      console.log('Connexion réussie')
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      setToken(jsonResponse.access_token)
      // snackbar.showSuccess('Connexion réussie')
      navigate('/app/infos')
    } else {
      switch (response.data.code) {
        case 'PASSWORD_NEED_TO_CHANGE': {
          snackbar.showError('Le mot de passe doit être créé')
          // dialog.onClose()
          // needToChangePasswordDialog.onClick()
          break
        }
        default: {
          break
        }
      }
    }
  }

  const handleOnSubmitAdd = async () => {
    await postAdd({
        body: {
            username: username,
            password: password
        }
    })

    if (responseAdd.ok) {
        console.log('Inscription réussie')
      } else {
        // switch (response.data.code) {
        //   case 'PASSWORD_NEED_TO_CHANGE': {
        //     snackbar.showError('Le mot de passe doit être créé')
        //     // dialog.onClose()
        //     // needToChangePasswordDialog.onClick()
        //     break
        //   }
        //   default: {
        //     break
        //   }
         }
      }

  const forgotPasswordDialog = useState(false)

  const openForgotPasswordDialog = () => {
    dialog.onClose()
    forgotPasswordDialog.onClick()
  }

  const dialog = useState(true)
  return (
    <>
      <Dialog
        open={true}
        maxWidth='xm'
      // title={(
      //   <>
      //     <Typography align='center' textTransform='uppercase' variant='h6' style={{ fontWeight: 600 }}>Bienvenue sur Escient Phénix</Typography>
      //   </>
      // )}
      >
        <DialogTitle><Typography align='center' variant='h6' style={{ fontWeight: 600 }}>Bienvenue</Typography></DialogTitle>
        <form id='loginId' style={{ width: '800px', padding: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LoginField username={username} setUsername={setUsername} setPassword={setPassword} password={password} disabled={loading} required />
            </Grid>
            <Grid item xs={12}>
              {/* <PasswordField onChange={handleOnChangePassword} fullWidth disabled={loading} required /> */}
              <Typography color='primary' align='center' className={classes.forgotpasswordLink} onClick={openForgotPasswordDialog}>Mot de passe oublié</Typography>
            </Grid>
            <Grid item xs={12}>
              
              <Typography color='primary' align='center' className={classes.forgotpasswordLink} onClick={dialogAdd.onClick}>Inscription</Typography>
              <Dialog
                open={dialogAdd.open}
                >
                    <DialogTitle><Typography align='center' variant='h6' style={{ fontWeight: 500 }}>Inscription</Typography></DialogTitle>
                    <AddUser fullWidth disabled={loading} required />
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                    {!loading && <ValidateButton onClick={handleOnSubmitAdd} title='Inscription' id='registerId' />}
                    {loading && <CircularProgress sizePreset='md' />}
                    </Grid>
                </Dialog>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {!loading && <ValidateButton onClick={handleOnSubmit} title='Connexion' id='loginId' />}
              {loading && <CircularProgress sizePreset='md' />}
            </Grid>
            {error && (
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Error response={response} />
              </Grid>
            )}
          </Grid>
        </form>
      </Dialog>
      {/* <ForgotPasswordDialog forgotPasswordDialog={forgotPasswordDialog} usernameValue={username} />
        <NeedToChangePasswordDialog needToChangePasswordDialog={needToChangePasswordDialog} username={username} /> */}

    </>
  )
}

const Error = (props) => {
  const { response } = props
  let text = ''
  switch (response.data.code) {
    case 'UNAUTHENTICATED': { text = 'Utilisateur / mot de passe incorrects.'; break }
    case 'BAD_USER_INPUT': { text = 'Utilisateur / mot de passe incorrects.'; break }
    default: { text = 'Une erreur est survenue.'; break }
  }
  return 'error'
  // return <ErrorText text={text} />
}

export default LogIn
