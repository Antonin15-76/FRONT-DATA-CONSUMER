import { Dialog, DialogActions, DialogTitle, IconButton } from "@material-ui/core"
import { Pencil, Delete } from 'mdi-material-ui'
import useDialog from "../Components/hooks/useDialog"
import ValidateButton from '../Components/button/ValidateButton'

const DeleteForm = (props) => {
    const dialog = useDialog(false)

    return (
        <>
            <IconButton
                        onClick={dialog.handleOnClick} 
                        // color='red'
                        title='Ajouter'
                    >
                         <Delete fontSize='inherit' />
                    </IconButton>
                        <Dialog
                            id='delete'
                            type='delete'
                            title='Ajouter'
                            open={dialog.open}
                            onClose={dialog.handleOnClose}
                        >
                            <DialogTitle id='draggable-dialog-title'>
                            Voulez vous supprimer définitivement?
                            </DialogTitle>
                             {/* <Stack spacing={2} align='center' style={{ padding: '15px' }}> */}
                            {/* <FormDelete formId={'add-form'} /> */}
                            <ValidateButton form={`delete-form`} title='Supprimer' />
                            {/* {mutateRes.loading && <CircularProgress sizePreset='md' />} */}
                            {/* </Stack>  */}
                            <DialogActions>
                                {/* <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose} title='Annuler'  />
                                    <ValidateButton form={`${id}-add-form`} title='Valider' />
                                </Stack> */}
                            </DialogActions>
                        </Dialog> 
            </>
    )
}

export default DeleteForm
