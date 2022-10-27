import { AppBar, Box, IconButton, Paper, Toolbar } from "@material-ui/core"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns = [
    {
        field: 'test',
        headerName: 'Pseudo',
        // valueGetter: (params) => {
        //     console.log(params)
        // },
        flex: 1
    },
    {
        field: 'value',
        headerName: 'Nationalité',
        flex: 1
    }
]

const Home = () => {
    const array = [
        {
            id: 0,
            test: "1",
            value: 35
        },
        {
            id: 1,
            test: "2",
            value: 856
        },
        {
            id: 2,
            test: "1",
            value: 56
        },
        {
            id: 3,
            test: "1",
            value: 745
        }
    ]
    console.log(array)

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
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        </IconButton>
                    </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        <Paper
                style={{ 
                    marginLeft: '100px',
                    marginRight: '100px',
                    marginTop: '10px',
                    marginBottom: '10px',
                    height: '2000px'
                }} 
            >
             <DataGrid
              columns={columns}
              rows={array || []}
             />   
        </Paper>
    </>
    )
}

export default Home