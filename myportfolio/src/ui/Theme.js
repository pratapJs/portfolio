import { createMuiTheme } from "@material-ui/core/styles"

const myGreen = "#00897b"
const myOrange = "#ffab40"

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
    }
  }
})
