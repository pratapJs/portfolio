import React, {useState} from "react"
import HeadAppbar from "./HeadAppbar"
import Footer from "./Footer"
import { ThemeProvider } from "@material-ui/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "../ui/Theme"

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)

  return (
  
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeadAppbar value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          <Switch>
            <Route exact path="/" component={() => <div> Home </div>} />
            <Route exact path="/about" component={() => <div> About Me</div>} />
            <Route exact path="/projects" component={() => <div> My Projects </div>} />
            <Route exact path="/contact" component={() => <div> Contact Me </div>} />
            <Route exact path="/Services" component={() => <div> Services </div>} />
            <Route exact path="/appsdevelopment" component={() => <div> Mobile Apps Development </div>} />
            <Route exact path="/websitedevelopment" component={() => <div> Website Development </div>} />
            <Route exact path="/hireme" component={() => <div> Hire Me </div>} />
          </Switch>
          <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
      
      </ThemeProvider>

  )
}

export default App
