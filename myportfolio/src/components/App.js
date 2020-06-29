import React from "react"
import HeadAppbar from "./HeadAppbar"
import { ThemeProvider } from "@material-ui/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "../ui/Theme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeadAppbar />
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
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
