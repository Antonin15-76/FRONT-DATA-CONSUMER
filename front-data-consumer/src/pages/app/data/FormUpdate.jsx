import { Checkbox, FormControlLabel, Grid, TextField } from "@material-ui/core"
import { useState } from "react"
import useFetch from 'use-http'
import { useLocalStorage } from "react-use"

const FormUpdate = (props) => {
    const [token] = useLocalStorage('accessToken')

    const { id, defaultValue } = props

    const [violationType, setViolation] = useState(defaultValue.Type)
  const [country, setCountry] = useState(defaultValue.country)
  const [montant, setMontant] = useState(defaultValue.montant)

    const handleOnChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const [state, setState] = useState({
        val1: defaultValue.Art_1 === 0 ? false : true,
        val2: defaultValue.Art_2 === 0 ? false : true,
        val5: defaultValue.Art_5 === 0 ? false : true,
        val6: defaultValue.Art_6 === 0 ? false : true,
        val7: defaultValue.Art_7 === 0 ? false : true,
        val8: defaultValue.Art_8 === 0 ? false : true,
        val9: defaultValue.Art_9 === 0 ? false : true,
        val10: defaultValue.Art_10 === 0 ? false : true,
        val11: defaultValue.Art_11 === 0 ? false : true,
        val12: defaultValue.Art_12 === 0 ? false : true,
        val13: defaultValue.Art_13 === 0 ? false : true,
        val14: defaultValue.Art_14 === 0 ? false : true,
        val15: defaultValue.Art_15 === 0 ? false : true,
        val16: defaultValue.Art_16 === 0 ? false : true,
        val17: defaultValue.Art_17 === 0 ? false : true,
        val18: defaultValue.Art_18 === 0 ? false : true,
        val19: defaultValue.Art_19 === 0 ? false : true,
        val20: defaultValue.Art_20 === 0 ? false : true,
        val21: defaultValue.Art_21 === 0 ? false : true,
        val22: defaultValue.Art_22 === 0 ? false : true,
        val23: defaultValue.Art_23 === 0 ? false : true,
        val24: defaultValue.Art_24 === 0 ? false : true,
        val25: defaultValue.Art_25 === 0 ? false : true,
        val26: defaultValue.Art_26 === 0 ? false : true,
        val27: defaultValue.Art_27 === 0 ? false : true,
        val28: defaultValue.Art_28 === 0 ? false : true,
        val29: defaultValue.Art_29 === 0 ? false : true,
        val30: defaultValue.Art_30 === 0 ? false : true,
        val31: defaultValue.Art_31 === 0 ? false : true,
        val32: defaultValue.Art_32 === 0 ? false : true,
        val33: defaultValue.Art_33 === 0 ? false : true,
        val34: defaultValue.Art_34 === 0 ? false : true,
        val35: defaultValue.Art_35 === 0 ? false : true,
        val36: defaultValue.Art_36 === 0 ? false : true,
        val37: defaultValue.Art_37 === 0 ? false : true,
        val38: defaultValue.Art_38 === 0 ? false : true,
        val44: defaultValue.Art_44 === 0 ? false : true,
        val46: defaultValue.Art_46 === 0 ? false : true,
        val48: defaultValue.Art_48 === 0 ? false : true,
        val58: defaultValue.Art_58 === 0 ? false : true,
        val82: defaultValue.Art_82 === 0 ? false : true,
        val88: defaultValue.Art_88 === 0 ? false : true,
        val113: defaultValue.Art_113 === 0 ? false : true,
        val114: defaultValue.Art_114 === 0 ? false : true,
        val130: defaultValue.Art_130 === 0 ? false : true,
        val157: defaultValue.Art_157 === 0 ? false : true,
        val166: defaultValue.Art_166 === 0 ? false : true,
        val321: defaultValue.Art_321 === 0 ? false : true,
        val345: defaultValue.Art_345 === 0 ? false : true,
        val16759: defaultValue.Art_16759 === 0 ? false : true,
        val32506: defaultValue.Art_32506 === 0 ? false : true,
        val113471: defaultValue.Art_113471 === 0 ? false : true
      });

    return (
        <form id={id} style={{ padding: '15px' }}>
            <Grid container>
                <Grid item xs={4}>
                    <TextField
                    label="Type de violation"
                    defaultValue={violationType}
                    onChange={ (e) => {
                        setViolation(e.target.value)
                    }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Pays"
                        defaultValue={country}
                        onChange={ (e) => {
                            setCountry(e.target.value)
                        }}
                        />
                    </Grid>
                <Grid item xs={4}>
                <TextField
                    label="Montant Amende"
                    defaultValue={montant}
                    onChange={ (e) => {
                        setMontant(e.target.value)
                    }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val1} name="val1" onChange={handleOnChange} />} label="Article 1" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val2} name="val2" onChange={handleOnChange} />} label="Aticle 2" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val5} name="val5" onChange={handleOnChange} />} label="Aticle 5" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val6} name="val6" onChange={handleOnChange} />} label="Aticle 6" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val7} name="val7" onChange={handleOnChange} />} label="Aticle 7" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val8} name="val8" onChange={handleOnChange} />} label="Aticle 8" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val9} name="val9" onChange={handleOnChange} />} label="Aticle 9" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val10} name="val10" onChange={handleOnChange} />} label="Aticle 10" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val11} name="val11" onChange={handleOnChange} />} label="Aticle 11" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val12} name="val12" onChange={handleOnChange} />} label="Aticle 12" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val13} name="val13" onChange={handleOnChange} />} label="Aticle 13" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val14} name="val14" onChange={handleOnChange} />} label="Aticle 14" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val15} name="val15" onChange={handleOnChange} />} label="Aticle 15" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val16} name="val16" onChange={handleOnChange} />} label="Aticle 16" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val17} name="val17" onChange={handleOnChange} />} label="Aticle 17" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val18} name="val18" onChange={handleOnChange} />} label="Aticle 18" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val19} name="val19" onChange={handleOnChange} />} label="Aticle 19" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val20} name="val20" onChange={handleOnChange} />} label="Aticle 20" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val21} name="val21" onChange={handleOnChange} />} label="Aticle 21" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val22} name="val22" onChange={handleOnChange} />} label="Aticle 22" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val23} name="val23" onChange={handleOnChange} />} label="Aticle 20=3" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val24} name="val24" onChange={handleOnChange} />} label="Aticle 24" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val25}name="val25" onChange={handleOnChange} />} label="Aticle 25" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val26} name="val26" onChange={handleOnChange} />} label="Aticle 26" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val27} name="val27" onChange={handleOnChange} />} label="Aticle 27" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val28} name="val28" onChange={handleOnChange} />} label="Aticle 28" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val29} name="val29" onChange={handleOnChange} />} label="Aticle 29" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val30} name="val30" onChange={handleOnChange} />} label="Aticle 30" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val31} name="val31" onChange={handleOnChange} />} label="Aticle 31" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val32} name="val32" onChange={handleOnChange} />} label="Aticle 32" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val33} name="val33" onChange={handleOnChange} />} label="Aticle 33" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val34} name="val34" onChange={handleOnChange} />} label="Aticle 34" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val345} name="val345" onChange={handleOnChange} />} label="Aticle 34-5" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val35} name="val35" onChange={handleOnChange} />} label="Aticle 35" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val36} name="val36" onChange={handleOnChange} />} label="Aticle 36" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val37} name="val37" onChange={handleOnChange} />} label="Aticle 37" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val38} name="val38" onChange={handleOnChange} />} label="Aticle 38" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val44} name="val44" onChange={handleOnChange} />} label="Aticle 44" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val46} name="val46" onChange={handleOnChange} />} label="Aticle 46" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val48} name="val48" onChange={handleOnChange} />} label="Aticle 48" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val58} name="val58" onChange={handleOnChange} />} label="Aticle 58" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val82} name="val82" onChange={handleOnChange} />} label="Aticle 82" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val88} name="val88" onChange={handleOnChange} />} label="Aticle 88" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val113} name="val113" onChange={handleOnChange} />} label="Aticle 113" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val114} name="val114" onChange={handleOnChange} />} label="Aticle 114" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val130} name="val130" onChange={handleOnChange} />} label="Aticle 130" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val157} name="val157" onChange={handleOnChange} />} label="Aticle 157" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val166} name="val166" onChange={handleOnChange} />} label="Aticle 166" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val321} name="val321" onChange={handleOnChange} />} label="Aticle 321" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val3759} name="val3759" onChange={handleOnChange} />} label="Aticle 3759/2004" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val32506} name="val32506" onChange={handleOnChange} />} label="Aticle 32506/2004" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox checked={state.val113471} name="val113471" onChange={handleOnChange} />} label="Aticle 113471/2006" />
                </Grid>
            </Grid>
        </form>
    )
}

export default FormUpdate
