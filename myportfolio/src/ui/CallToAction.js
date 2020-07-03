import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Link} from "react-router-dom"

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:  35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
         marginBottom:"2em" 
        }},
        background:{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "60em",
            width: "100%",
            [theme.breakpoints.down("md")]:{
                backgroundImage: `url(${mobileBackground})`,
                backgroundAttachment:"inherit"
            }
        },
        hireMeButton:{
            ...theme.typography.hireme,
            borderRadius:50,
            height:50,
            width: 120,
            backgroundColor: theme.palette.common.orange,
            fontSize:"1.2rem",
            marginRight:"5em",
            marginLeft:"2em",
            "&:hover":{
                backgroundColor: theme.palette.secondary.light},

            [theme.breakpoints.down("sm")]:{
                marginLeft:0,
                marginRight:0
              
                } 

            }
            
            

}))

export default function CallToAction(props)
{
const classes = useStyles()
const theme= useTheme()
const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

return <Grid container style={{height: "60em", textAlign: matchesSM ? "center": "inherit"}} alignItems="center" justify= {matchesSM ? "center" : "space-between"} 
className={classes.background} direction={matchesSM ? "column": "row"}>
    <Grid item style ={{   marginLeft: matchesSM ? 0: "5em"}}>
        <Grid container direction ="column">
<Grid item>
    <Typography variant ="h2"> Simple Software <br /> Revolutionary Results</Typography>
    <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}> Take advantage of timely and affordable services</Typography>
    <Grid container justify={matchesSM ? "center" :undefined} item> 
      <Button  onClick={ () => props.setValue(4)} component={Link} to="/services" variant="outlined" className={classes.learnButton}>
         <span style={{marginRight:5}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill={theme.palette.common.green} />

         </Button>
         </Grid>
</Grid>

        </Grid>
    </Grid>
    <Grid item >
        <Button  onClick={ () => props.setValue(5) } component={Link} to="/hireme" variant="contained" className={classes.hireMeButton} style={{color:"white"}}> Hire Me</Button>
    </Grid>
   
</Grid>
}