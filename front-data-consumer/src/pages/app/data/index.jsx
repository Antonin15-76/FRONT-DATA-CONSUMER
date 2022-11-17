import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, IconButton, Paper, SpeedDial, SpeedDialAction, Stack, Toolbar } from "@material-ui/core"
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from "mdi-material-ui";
import React, { useEffect, useState } from 'react'
import ValidateButton from "../../../Components/button/ValidateButton"
import CancelButton from "../../../Components/button/CancelButton"
import useDialog from "../../../Components/hooks/useDialog";
import DeleteForm from "./Delete";
import Form from "./Form";
import { useLocalStorage } from "react-use"
import useFetch from 'use-http'
import { useNavigate } from "react-router-dom"

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
    const [token] = useLocalStorage('accessToken')
    const [data, setData] = useState(null)
    const [dataAdd, setDataAdd] = useState(null)
    const dialog = useDialog(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://ws-data-consuming.herokuapp.com/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})
        .then(response => {
            if (response.status === 403) {
                console.log('here')
                navigate('/login')
            }
            response.json()
        })
        .then(data => setData(data.results))
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

    const { post: postAdd , response: responseAdd , loading: loadingAdd , error: errorAdd } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})

    const [state, setState] = useState({
    1: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false,
    33: false,
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    44: false,
    46: false,
    48: false,
    58: false,
    82: false,
    88: false,
    113: false,
    114: false,
    130: false,
    157: false,
    166: false,
    321: false,
    345: false,
    16759: false,
    32506: false,
    113471: false
  });

  const [violationType, setViolation] = useState()
  const [country, setCountry] = useState()
  const [montant, setMontant] = useState()

  const handleOnSubmit = () => {
    postAdd({
        Type: violationType,
        Country: country,
        Amount: montant,
        ...state
    })
}
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
                              <Form 
                              id={'add-form'} 
                              country={country} 
                              setCountry={setCountry} 
                              violationType={violationType} 
                              setViolation={setViolation}
                              montant={montant}
                              setMontant={setMontant}
                              state={state}
                              setState={setState}
                              />
                            {/* {!mutateRes.loading && <ValidateButton form={`${id}-add-form`} title='gk' />} */}
                            {/* {mutateRes.loading && <CircularProgress sizePreset='md' />} */}
                            {/* </Stack>  */}
                             <DialogActions>
                                 <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose } title='Annuler' />
                                    <ValidateButton id={`add-form`} onClick={handleOnSubmit} title='Valider' />
                                </Stack>
                            </DialogActions>
                        </Dialog>            
        </Box>
             {/* 
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
                            {/* <Form formId={'add-form'}>
                            {/* {!mutateRes.loading && <ValidateButton form={`${id}-add-form`} title='gk' />} */}
                            {/* {mutateRes.loading && <CircularProgress sizePreset='md' />} */}
                            {/* </Stack>  */}
                            {/* <DialogActions>
                                {/* <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose} title='Annuler'  />
                                    <ValidateButton form={`${id}-add-form`} title='Valider' />
                                </Stack> */}
                            {/* </DialogActions>
                        </Dialog>            
                    */}
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