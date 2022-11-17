import { Dialog, DialogActions, DialogTitle, IconButton } from "@material-ui/core"
import { Pencil, Delete } from 'mdi-material-ui'
import useDialog from "../../../Components/hooks/useDialog"
import ValidateButton from '../../../Components/button/ValidateButton'
import { useLocalStorage } from "react-use"
import useFetch from 'use-http'
import { useEffect } from "react"

const DeleteForm = (props) => {
    const { row } = props
    const [token] = useLocalStorage('accessToken')
    // const { post, response, loading, error } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/fines/', { method: "DELETE",  headers: { Authorization: `Bearer ${token}` }})
    const dialog = useDialog(false)
        // DELETE request using fetch with async/await
         function deletePost() {
             fetch(`https://ws-data-consuming.herokuapp.com/api/v1/fines/${row._id}`, { method: "DELETE",  headers: { Authorization: `Bearer ${token}` }});
            // setStatus('Delete successful');
        }
    
    const handleOnSubmit = () => {
        deletePost();
    }

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
                            <form id={'add-form'}/>
                            <ValidateButton id={'add-form'} form={`delete-form`} onClick={handleOnSubmit} title='Supprimer' />
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
