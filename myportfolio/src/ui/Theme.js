import { createMuiTheme } from "@material-ui/core/styles"

const myGreen = "#00897b"
const myOrange = "#ffab40"
const myGrey ="#868686"

export default createMuiTheme({
  palette: {
    common: {
   green: `${myGreen}`,  
      orange: `${myOrange}`
    },
    primary: {
      main: `${myGreen}`
    },
    secondary: {
      main: `${myOrange}`
    }
  },
  typography: {
    tab: {
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none"
    },
    hireme: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight:700,
      fontSize: "2.5rem",
      color:`${myGreen}`,
      lineHeight:"1.5"
    },
    h3:{
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: `${myGreen}`
    },
     h4:{
       fontFamily: "Raleway",
       fontSize: "1.75rem",
       color:`${myGreen}`,
       fontWeight: 700,
    
     },
     subtitle1:{
       fontSize:"1.25rem",
       fontWeight:300,
       color:`${myGrey}`
     },

     subtitle2:{
color:"white",
fontSize:"1.25rem",
fontWeight:300
     },


     learnButton: {
       borderColor: `${myGreen}`,
       borderWidth: 2,
       textTransform: "none",
       color: `${myGreen}`,
       borderRadius:50,
       fontFamily:"Roboto",
       fontWeight: "bold"
     }
  }
})
