import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Paper, Toolbar } from "@material-ui/core"
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from "mdi-material-ui";
import React, { useEffect, useState } from 'react'
import useDialog from "../Components/hooks/useDialog";
import ActionsCell from "./ActionsCell";
import Form from "./Form";

const columns = [
    {
        field: 'Country',
        headerName: 'Nationalité',
        flex: 1
    },
    {
        field: 'Type',
        headerName: 'Accusation',
        flex: 1
    },
    {
        field: 'VIOLATED_ARTICLES',
        headerName: 'Article violé',
        flex: 1
    },
    {
        field: 'Amount',
        headerName: 'Montant amende',
        flex: 1
    },
    {
        headerName: 'Actions',
        renderCell: (params) => {
          return (
              <ActionsCell {...params} />
          )
        }
      }
]

const Home = () => {

    const [data, setData] = useState(null)
    const dialog = useDialog(false)

    useEffect(() => {
        fetch("https://ws-data-consuming.herokuapp.com/api/v1/fines")
        .then(response => response.json())
        .then(data => setData(data.message))
      },[])

      console.log(data)
    const reformatedData = (data) => {
        const rest = data?.map((x, idx) => {
            return {
                ...x,
                id: idx
            }
        })
        return rest
    }

    const newData = reformatedData(data)

    return (
        <>
             <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <typographyClasses
                        variant="h6"
                        // noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                        
                    </typographyClasses>
                    <Box sx={{ flexGrow: 1 }} />
                          <IconButton
                        onClick={dialog.handleOnClick} 
                        // color='red'
                        title='Ajouter'
                    >
                         <Plus fontSize='inherit' />
                    </IconButton>
                        <Dialog
                            id='add'
                            type='Add'
                            title='Ajouter'
                            open={dialog.open}
                            onClose={dialog.handleOnClose}
                        >
                            <DialogTitle id='draggable-dialog-title'>
                            Ajouter
                            </DialogTitle>
                             {/* <Stack spacing={2} align='center' style={{ padding: '15px' }}> */}
                            <Form formId={'add-form'} />
                            {/* {!mutateRes.loading && <ValidateButton form={`${id}-add-form`} title='gk' />} */}
                            {/* {mutateRes.loading && <CircularProgress sizePreset='md' />} */}
                            {/* </Stack>  */}
                            <DialogActions>
                                {/* <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose} title='Annuler'  />
                                    <ValidateButton form={`${id}-add-form`} title='Valider' />
                                </Stack> */}
                            </DialogActions>
                        </Dialog>            
                    </Toolbar>
                </AppBar>
            </Box>
        <Paper
                style={{ 
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    height: '700px'
                }} 
            >
             <DataGrid
              columns={columns}
              rows={newData || []}
             />   
        </Paper>
    </>
    )
}

export default Home