import { TextField } from "@material-ui/core"
import { Grid } from "mdi-material-ui"

const Form = (props) => {
    const { id, defaultValues, onSubmit } = props

    const handleOnSubmit = () => {

    }
    return (
        <form id submit={handleOnSubmit} >
            <Grid item xs={6}>
                <TextField
                 title=""
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    title=""
                    />
                </Grid>
            <Grid item xs={6}>
            <TextField
                 title=""
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
                 title=""
                />
            </Grid>
            <Grid item xs={6}>
            <TextField
                 title=""
                />
            </Grid>
            <Grid item xs={6}>

            </Grid>
        </form>
    )
}

export default Form
