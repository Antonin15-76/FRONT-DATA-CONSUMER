import { Dialog, DialogActions, DialogTitle, IconButton, Stack } from "@material-ui/core"
import { Pencil } from "mdi-material-ui"
import { useMemo } from "react"
import { useLocalStorage } from "react-use"
import useFetch from "use-http"
import CancelButton from "../../../Components/button/CancelButton"
import ValidateButton from "../../../Components/button/ValidateButton"
import useDialog from "../../../Components/hooks/useDialog"
import FormUpdate from "./FormUpdate"

const PutForm = (props) => {
    const { row } = props
    const [token] = useLocalStorage('accessToken')
    const { get, data, response } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/fines/' + row._id, { headers: { Authorization: `Bearer ${token}` }})
    const dialog = useDialog(false)

    useMemo(() => {
        get() 
    }, [response, row])

    console.log(data)

    const handleOnSubmit = () => {
    }

    return (
        <>
            <IconButton
                        onClick={dialog.handleOnClick} 
                        // color='red'
                        title='Modifier'
                    >
                         <Pencil fontSize='inherit' />
                    </IconButton>
                        <Dialog
                            id='puy'
                            type='delete'
                            title='Ajouter'
                            open={dialog.open}
                            onClose={dialog.handleOnClose}
                        >
                            <DialogTitle id='draggable-dialog-title'>
                            Modifier
                            </DialogTitle>
                             <Stack spacing={2} align='center' style={{ padding: '15px' }}>
                                <FormUpdate id='put_form' defaultValue={data?.results} />
                            {/* {mutateRes.loading && <CircularProgress sizePreset='md' />} */}
                             </Stack> 
                            <DialogActions>
                                <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose} title='Annuler'  />
                                    <ValidateButton form={`put-form`} title='Valider' onClick={handleOnSubmit} />
                                </Stack>
                            </DialogActions>
                        </Dialog> 
            </>
    )
}

export default PutForm
