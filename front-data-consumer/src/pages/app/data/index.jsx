import { Box, Dialog, DialogActions, DialogTitle, IconButton, Paper, Stack } from "@material-ui/core"
import { DataGrid } from '@mui/x-data-grid';
import { Plus } from "mdi-material-ui";
import React, { useState } from 'react'
import ValidateButton from "../../../Components/button/ValidateButton"
import CancelButton from "../../../Components/button/CancelButton"
import useDialog from "../../../Components/hooks/useDialog";
import DeleteForm from "./Delete";
import Form from "./Form";
import { useLocalStorage } from "react-use"
import useFetch from 'use-http'
import { useNavigate } from "react-router-dom"
import { useMemo } from "react";
import PutForm from "./PutForm";

const columns = [
    {
        field: 'Country',
        headerName: 'Nationalité',
        flex: 0.75
    },
    {
        field: 'Type',
        headerName: 'Accusation',
        flex: 1.5
    },
    {
        field: 'VIOLATED_ARTICLES',
        headerName: 'Article violé',
        flex: 0.5
    },
    {
        field: 'Amount',
        headerName: 'Montant amende',
        flex: 0.5
    },
    {
        headerName: 'Modification',
        field: "modif",
        renderCell: (params) => {
          return (
              <PutForm {...params} />
          )
        }
    },
    {
        headerName: 'Suppresion',
        field: "delete",
        renderCell: (params) => {
          return (
              <DeleteForm {...params} />
          )
        }
    }
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
    // const [data, setData] = useState(null)
    const [dataAdd, setDataAdd] = useState(null)
    const dialog = useDialog(false)
    const navigate = useNavigate()

    const { get, data, response } = useFetch('https://ws-data-consuming.herokuapp.com/api/v1/fines', { headers: { Authorization: `Bearer ${token}` }})

    useMemo(() => {
        get()  
    }, [response])

    if (response.data === "Forbidden") navigate('/login')

    const reformatedData = (data) => {
        const rest = data?.results?.map((x, idx) => {
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
    val1: false,
    val2: false,
    val5: false,
    val6: false,
    val7: false,
    val8: false,
    val9: false,
    val10: false,
    val11: false,
    val12: false,
    val13: false,
    val14: false,
    val15: false,
    val16: false,
    val17: false,
    val18: false,
    val19: false,
    val20: false,
    val21: false,
    val22: false,
    val23: false,
    val24: false,
    val25: false,
    val26: false,
    val27: false,
    val28: false,
    val29: false,
    val30: false,
    val31: false,
    val32: false,
    val33: false,
    val34: false,
    val35: false,
    val36: false,
    val37: false,
    val38: false,
    val44: false,
    val46: false,
    val48: false,
    val58: false,
    val82: false,
    val88: false,
    val113: false,
    val114: false,
    val130: false,
    val157: false,
    val166: false,
    val321: false,
    val345: false,
    val16759: false,
    val32506: false,
    val113471: false
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
                             <Stack spacing={2} align='center' style={{ padding: '15px' }}>
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
                            </Stack> 
                             <DialogActions>
                                 <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose } title='Annuler' />
                                    <ValidateButton id={`add-form`} onClick={handleOnSubmit} title='Valider' />
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
             <DataGrid
              columns={columns}
              rows={newData || []}
             />   
        </Paper>
    </>
    )
}

export default Home