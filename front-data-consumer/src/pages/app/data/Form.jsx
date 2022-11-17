import { Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core"
import { useState } from "react";
import useFetch from 'use-http'
import { useLocalStorage } from "react-use"

const Form = (props) => {
    const [token] = useLocalStorage('accessToken')

    const { id, state, setCountry, setMontant, setState, setViolation, country, montant, violationType } = props

    const handleOnChange = (event) => {
        console.log(event)
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
    return (
        <form id={id} style={{ padding: '15px' }}>
            <Grid container>
                <Grid item xs={4}>
                    <TextField
                    title="Type de violation"
                    defaultValue={violationType}
                    onChange={ (e) => {
                        setViolation(e.target.value)
                    }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        title="Pays"
                        defaultValue={country}
                        onChange={ (e) => {
                            setCountry(e.target.value)
                        }}
                        />
                    </Grid>
                <Grid item xs={4}>
                <TextField
                    title="Montant Amende"
                    defaultValue={montant}
                    onChange={ (e) => {
                        setMontant(e.target.value)
                    }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={1} onChange={handleOnChange} />} label="Article 1" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={2} onChange={handleOnChange} />} label="Aticle 2" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={5} onChange={handleOnChange} />} label="Aticle 5" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={6} onChange={handleOnChange} />} label="Aticle 6" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={7} onChange={handleOnChange} />} label="Aticle 7" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={8} onChange={handleOnChange} />} label="Aticle 8" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={9} onChange={handleOnChange} />} label="Aticle 9" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={10} onChange={handleOnChange} />} label="Aticle 10" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={11} onChange={handleOnChange} />} label="Aticle 11" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={12} onChange={handleOnChange} />} label="Aticle 12" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={13} onChange={handleOnChange} />} label="Aticle 13" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={14} onChange={handleOnChange} />} label="Aticle 14" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={15} onChange={handleOnChange} />} label="Aticle 15" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={16} onChange={handleOnChange} />} label="Aticle 16" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={17} onChange={handleOnChange} />} label="Aticle 17" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={18} onChange={handleOnChange} />} label="Aticle 18" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={19} onChange={handleOnChange} />} label="Aticle 19" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={20} onChange={handleOnChange} />} label="Aticle 20" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={21} onChange={handleOnChange} />} label="Aticle 21" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={22} onChange={handleOnChange} />} label="Aticle 22" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={23} onChange={handleOnChange} />} label="Aticle 20=3" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={24} onChange={handleOnChange} />} label="Aticle 24" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={25} onChange={handleOnChange} />} label="Aticle 25" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={26} onChange={handleOnChange} />} label="Aticle 26" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={27} onChange={handleOnChange} />} label="Aticle 27" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={28} onChange={handleOnChange} />} label="Aticle 28" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={29} onChange={handleOnChange} />} label="Aticle 29" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={30} onChange={handleOnChange} />} label="Aticle 30" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={31} onChange={handleOnChange} />} label="Aticle 31" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={32} onChange={handleOnChange} />} label="Aticle 32" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={33} onChange={handleOnChange} />} label="Aticle 33" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={34} onChange={handleOnChange} />} label="Aticle 34" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={345} onChange={handleOnChange} />} label="Aticle 34-5" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={35} onChange={handleOnChange} />} label="Aticle 35" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={36} onChange={handleOnChange} />} label="Aticle 36" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={37} onChange={handleOnChange} />} label="Aticle 37" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={38} onChange={handleOnChange} />} label="Aticle 38" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={44} onChange={handleOnChange} />} label="Aticle 44" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={46} onChange={handleOnChange} />} label="Aticle 46" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={48} onChange={handleOnChange} />} label="Aticle 48" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={58} onChange={handleOnChange} />} label="Aticle 58" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={82} onChange={handleOnChange} />} label="Aticle 82" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={88} onChange={handleOnChange} />} label="Aticle 88" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={113} onChange={handleOnChange} />} label="Aticle 113" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={114} onChange={handleOnChange} />} label="Aticle 114" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={130} onChange={handleOnChange} />} label="Aticle 130" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={157} onChange={handleOnChange} />} label="Aticle 157" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={166} onChange={handleOnChange} />} label="Aticle 166" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={321} onChange={handleOnChange} />} label="Aticle 321" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={3759} onChange={handleOnChange} />} label="Aticle 3759/2004" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={32506} onChange={handleOnChange} />} label="Aticle 32506/2004" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={113471} onChange={handleOnChange} />} label="Aticle 113471/2006" />
                </Grid>
            </Grid>
        </form>
    )
}

export default Form
