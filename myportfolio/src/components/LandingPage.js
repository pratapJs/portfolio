import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import animationData from '../animations/landinganimation/data'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ButtonArrow from '../ui/ButtonArrow'
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {Link} from 'react-router-dom'

import circlephoto from '../assets/circlephoto.png'
import customSoftwareIcon from '../assets/CustomSoftwareIcon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import repeatingBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import CallToAction from '../ui/CallToAction'


const useStyles =makeStyles(theme => ({
    animation:{
        maxWidth: "30em",
        minWidth:"21em",
        marginTop: "5em",
        marginLeft: "10%",
        [theme.breakpoints.down("md")]:{
            maxWidth: "30em"  ,
            marginTop:"6em"
          },
        [theme.breakpoints.down("sm")]:{
          maxWidth: "20em"  
        }
    },
   
          buttonHireMe:{
              ...theme.typography.hireme,
              backgroundColor: theme.palette.common.orange,
              borderRadius: 50,
              color:"white",
              width: 145,
              height:45,
              marginRight: 40,
    
              "&:hover":{
                  backgroundColor: theme.palette.secondary.light
              } },
              mainContainer:{
                marginTop: "5em",
                [theme.breakpoints.down("md")]:{
                    marginTop:"3em"
                },
                [theme.breakpoints.down("xs")]:{
                    marginTop:"2em"
                }
          },
          buttonContainer:{
              marginTop:"1.5rem"
          },

          heroTextContainer:{
            minWidth:"21.5em",
            marginLeft:"1em",
            [theme.breakpoints.down("xs")]:{
             marginRight: "3em"

          }

        },
          profilePhoto:{
            [theme.breakpoints.down("md")]:{
                maxWidth: "13rem"  
               
              },
            [theme.breakpoints.down("sm")]:{
              maxWidth: "10rem"  
             
            }
          },
         
          buttonExplore:{
             ...theme.typography.learnButton,
              fontSize: "0.8rem",
              height: 45,
              width: 145

          },
          learnButton: {
            ...theme.typography.learnButton,
            fontSize:"0.7rem",
            height:  35,
            padding:5,
            [theme.breakpoints.down("sm")]:{
             marginBottom:"2em" 
            }
          },
          specialText:{
            fontFamily: "Pacifico",
            color:theme.palette.common.orange
          },
          subtitle:{
            marginBottom: "1"
          },
          icon:{
            marginLeft:"2em",
            [theme.breakpoints.down("xs")]: {
              marginLeft:0
            }

          },
          serviceContainer:{
            marginTop:"12em",
            [theme.breakpoints.down("sm")]:{
              padding:25
            }
          },
          projectBackground:{
            backgroundImage: `url(${repeatingBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            width: "100%"
          },
          projectCard:{
            position:"absolute",
            boxShadow:theme.shadows[10],
            borderRadius:15,
            padding:"10em",
            [theme.breakpoints.down("sm")]: {
              paddingTop:"8em",
              paddingBottom:"8em",
              paddingLeft:0,
              paddingRight: 0,
              borderRadius:0,
              width:"100%"

            }
          },
          infoBackground:{
            backgroundImage: `url(${infoBackground})`,
            backgroundPosition: "center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"100%",
            width:"100%"
          }

}))

export default function LandingPage(props){
    const classes = useStyles()
    const theme =useTheme()
    const matchesSM= useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS= useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions={
        loop: true,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'

    }}
    



return (
    <Grid container direction="column" className={classes.mainContainer}>
        <Grid item> {/*--------Hero Block--------*/}
            <Grid container justify="flex-end" alignItems="center" direction="row">
            
                <Grid sm item className={classes.heroTextContainer}>
                    
                <Typography variant="h2" align="center"> 
               <div> <img alt =" Myphoto" src= {circlephoto} align="center" className={classes.profilePhoto}/> </div> 
                               It's never late to start 
                    </Typography>
                    
                    

                    <Grid container justify="center" className={classes.buttonContainer}>
                        <Grid item >
                            <Button component={Link} to="/hireme" className = {classes.buttonHireMe} variant="contained" onClick={ () => props.setValue(5)}> 
                             Hire Me </Button>
                        </Grid>
                        <Grid item  >
                            <Button  onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}} component={Link} to="/about" className = {classes.buttonExplore} variant="outlined"> 
                          <span style={{marginRight: 10}}>  Explore Me  </span> 
                           <ButtonArrow width={20} height={20} fill={theme.palette.common.green} />
                             </Button>
                        </Grid>
                    </Grid>
                    </Grid>


                <Grid sm item className={classes.animation}>
                <Lottie   options={defaultOptions} height={"100%"} width={"100%"} />
                </Grid>
            </Grid>
        </Grid>

    

   <Grid item> {/*---CustomSoftware Services Block---*/}
   <Grid container direction="row" className={classes.serviceContainer}  justify={matchesSM ?"center":undefined}>
     <Grid item style={{marginLeft: matchesSM? 0: "5em", textAlign:matchesSM ?"center": undefined}}>
       <Typography variant="h4">
         Custom Software Development
       </Typography>
       <Typography variant="subtitle1" className={classes.subtitle}>
         Save Energy. Save Time. Save Money.
       </Typography>
       <Typography variant="subtitle1" >
         Complete digital solutions, from investigation to {""}
         <span className={classes.specialText}> celebration.</span>
       </Typography>
       <Button  onClick={ () => {props.setValue(4); props.setSelectedIndex(4)}} component={Link} to="/services" variant="outlined" className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill={theme.palette.common.green} />
       </Button>
       </Grid>
       <Grid item>
         <img  className= {classes.icon}alt="custom software icon" src={customSoftwareIcon}/> 
       </Grid>
     </Grid>
   </Grid>

   <Grid item> {/*---IOS/Android Block---*/}
   <Grid container direction="row" className={classes.serviceContainer}  justify={matchesSM ?"center":"flex-end"}>
     <Grid item style={{ textAlign:matchesSM ?"center": undefined}}>
       <Typography variant="h4">
         IOS/Android app Development
       </Typography>
       <Typography variant="subtitle1" className={classes.subtitle}>
        Extend Functionality. Extend Access. Increase Engagement.
       </Typography>
       <Typography variant="subtitle1" >
Integrate yur web experience or creae a standalone app {matchesSM ? null : <br />} with either mobile platform
        
       </Typography>
       <Button  onClick={ () => {props.setValue(4); props.setSelectedIndex(4)}} component={Link} to="/appsdevelopment" variant="outlined" className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill={theme.palette.common.green} />
       </Button>
       </Grid>
       <Grid item style={{marginRight: matchesSM? 0: "5em"}}>
         <img  className= {classes.icon}alt="Mobile phone icon" src={mobileAppsIcon}/> 
       </Grid>
     </Grid>
   </Grid>

   <Grid item> {/*---Website development Block---*/}
   <Grid container direction="row" className={classes.serviceContainer}  justify={matchesSM ?"center":undefined}>
     <Grid item style={{marginLeft: matchesSM? 0: "5em", textAlign:matchesSM ?"center": undefined}}>
       <Typography variant="h4">
        Website Development
       </Typography>
       <Typography variant="subtitle1" className={classes.subtitle}>
         Reach More. Discover More.
       </Typography>
       <Typography variant="subtitle1" >
        Optimized for Search Engines, built for speed.
        
       </Typography>
       <Button  onClick={ () => {props.setValue(4); props.setSelectedIndex(4)}} component={Link} to="/websitedevelopment" variant="outlined" className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill={theme.palette.common.green} />
       </Button>
       </Grid>
       <Grid item>
         <img    className= {classes.icon}alt="website icon" src={websitesIcon}/> 
       </Grid>
     </Grid>
   </Grid>

  
<Grid item> {/*---Project Block---*/}
  <Grid style={{height:"100em", marginTop: "12em"}} container alignItems="center" justify="center">

  
<Card className={classes.projectCard}>
  <CardContent >
<Grid container  direction="column" style={{textAlign:"center"}}  >
  <Grid item>
    <Typography variant="h3" gutterBottom>
      My Projects
    </Typography>
  </Grid>
<Grid item >
  <Typography variant="subtitle1">
    Projects varying from simple tictactoe game to advance eCommerce websites
    <br /> and apps on IOS and Android platform.
  </Typography>
  <Button  onClick={ () => {props.setValue(2); props.setSelectedIndex(2)}} component={Link} to="/projects" variant="outlined" className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill={theme.palette.common.green} />
       </Button>
</Grid>

</Grid>



  </CardContent>
</Card>
<div className ={classes.projectBackground} />
</Grid>

</Grid>

<Grid item>
  {/*--Information Block---*/}
</Grid>
<Grid container direction="row" alignItems="center" style={{height:"80em"}} className={classes.infoBackground}>

  <Grid item container style={{position: "absolute", textAlign: matchesXS ? "center" :"inherit"}} direction={matchesSM ? "column" : "row"} > 

  <Grid item sm style={{ marginLeft: matchesXS ?0: matchesSM ? "2em" : "5em"}}>
    <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
      <Typography variant="h2" style={{color:"white"}}>About Me</Typography>
      <Typography variant="subtitle2"> Let's get personal</Typography>
      <Grid item> 
      <Button  onClick={ () => props.setValue(1)} component={Link} to="/about" variant="outlined" style= {{color: "white", borderColor:"white"}} className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill="white" />

         </Button>
         </Grid>
    </Grid>
  </Grid>
  
  <Grid item sm style={{ marginRight: matchesXS ? 0: matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center": "right"}}>
    <Grid container direction="column">
      <Typography variant="h2" style={{color:"white"}}>Contact Me</Typography>
      <Typography variant="subtitle2"> Say Hello! <span role="img" aria-label="thumps up"> 👍 </span></Typography>
      <Grid item> 
      <Button  onClick={ () => props.setValue(3)} component={Link} to="/contact" variant="outlined" style= {{color: "white", borderColor:"white"}} className={classes.learnButton}>
         <span style={{marginRight:10}} > Learn More</span>
         <ButtonArrow width={10} height={10} fill="white" />

         </Button>
         </Grid>
    </Grid>
  </Grid>
  </Grid>
 
  
</Grid>
<Grid item> {/*--Information Block---*/}
<CallToAction setValue={props.setValue}/>
</Grid>

</Grid>

)
}