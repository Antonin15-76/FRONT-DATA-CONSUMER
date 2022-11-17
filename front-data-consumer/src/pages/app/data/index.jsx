import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Paper, SpeedDial, SpeedDialAction, Stack, Toolbar } from "@material-ui/core"
import { SpeedDialIcon } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from "mdi-material-ui";
import React, { useEffect, useState } from 'react'
import ValidateButton from "../../../Components/button/ValidateButton"
import CancelButton from "../../../Components/button/CancelButton"
import useDialog from "../../../Components/hooks/useDialog";
import ActionsCell from "./ActionsCell";
import DeleteForm from "./Delete";
import Form from "./Form";
import { useLocalStorage } from "react-use"
import useFetch from 'use-http'

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
        headerName: 'Suppresion',
        renderCell: (params) => {
          return (
              <DeleteForm {...params} />
          )
        }
      },
    // {
    //     headerName: 'Actions',
    //     renderCell: (params) => {
    //       return (
    //           <ActionsCell {...params} />
    //       )
    //     }
    //   }
]

const Home = () => {
    const [token, setToken] = useLocalStorage('accessToken')

    const [data, setData] = useState(null)
    const dialog = useDialog(false)

    useEffect(() => {
        fetch("https://ws-data-consuming.herokuapp.com/api/v1/fines", token)
        .then(response => response.json())
        .then(data => console.log(data))
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
        <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <IconButton
                        onClick={dialog.handleOnClick} 
                        // color='red'
                        title='Ajouter'
                        sx={{ position: 'absolute', bottom: 16, right: 16 }} 
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
                                 <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose } title='Annuler' />
                                    {/* <ValidateButton form={`${id}-add-form`} title='Valider' /> */}
                                </Stack>
                            </DialogActions>
                        </Dialog>            
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
             {/* <DataGrid
              columns={columns}
              rows={newData || []}
             />    */}
        </Paper>
    </>
    )
}

export default Home