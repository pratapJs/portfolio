import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import { makeStyles } from "@material-ui/core/styles"
import logo from "../assets/logo.svg"

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}
const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.toolbar,
    marginBottom: "1.60em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.8em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".40em"
    }
  },
  logo: {
    height: "6.0em",
    marginLeft: "10px",
    [theme.breakpoints.down("md")]: {
      height: "5.0em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.0em"
    }
  },
  logoContainer: {
    padding: 4,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menu: {
    backgroundColor: "#00897b",
    color: "white"
  },
  menuItem: {
    ...theme.typography.tab,
    borderRadius: 0,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    fontFamily: "Roboto",
    marginLeft: "25px",
    color: "white"
  },
  button: {
    ...theme.typography.hireme,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    color: "white"
  }
}))

export default function HeadAppbar(props) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i)
    setAnchorEl(null)
  }

  const handleChange = (e, value) => {
    setValue(value)
  }
  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuOptions = [
    { name: "Services", Link: "/services" },
    { name: "Mobile Apps Development", Link: "/appsdevelopment" },
    { name: "Website Development", Link: "/websitedevelopment" }
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break
      case "/about":
        if (value !== 1) {
          setValue(1)
        }
        break
      case "/projects":
        if (value !== 2) {
          setValue(2)
        }
        break
      case "/contact":
        if (value !== 3) {
          setValue(3)
        }
        break
      case "/services":
        if (value !== 4) {
          setValue(4)
        }
        break
      case "/appsdevelopment":
        if (value !== 4) {
          setValue(4)
        }
        break
      case "/websitedevelopment":
        if (value !== 4) {
          setValue(4)
        }
        break
      case "/hireme":
        if (value !== 5) {
          setValue(5)
        }
        break
      default:
        break
    }
  }, [value])

  const tabs = (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab className={classes.tab} component={Link} to="/about" label="About Me" />
        <Tab className={classes.tab} component={Link} to="/projects" label="Projects" />
        <Tab className={classes.tab} component={Link} to="/contact" label="Contact" />
        <Tab aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick} className={classes.tab} component={Link} to="/services" label="Services" />
      </Tabs>

      <Button className={classes.button} variant="contained" color="secondary">
        Hire Me
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} classes={{ paper: classes.menu }} elevation={0}>
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              handleMenuItemClick(event, i)
              setValue(4)
              handleClose()
            }}
            selected={i === selectedIndex}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
              <img className={classes.logo} alt="Portfolio logo" src={logo} />
            </Button>

            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.root} />
    </>
  )
}
