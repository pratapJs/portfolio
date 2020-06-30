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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import { makeStyles } from "@material-ui/core/styles"
import logo from "../assets/logo.svg"
import { IconButton } from "@material-ui/core"

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
      marginBottom: "0.9em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: ".80em"
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
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawer: {
    backgroundColor: theme.palette.common.green
  },
  drawerItem: {
    ...theme.typography.tab,
    fontFamily: "Roboto",
    color: "white",
    opacity: 0.7
  },
  drawerItemHireMe: {
    backgroundColor: theme.palette.common.orange,
    borderRadius: "10px"
  },
  drawerItemSelected:{
    opacity:1
  }
}))

export default function HeadAppbar(props) {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleMenuItemClick = (e, i) => {
    setSelectedIndex(i)
    setAnchorEl(null)
  }

  const handleChange = (e, newValue) => {
    setValue(newValue)
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
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{ paper: classes.drawer }}>
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(0)
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText className={value===0 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(1)
            }}
            divider
            button
            component={Link}
            to="/about"
            selected={value === 1}
          >
            <ListItemText className={value===1 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>
              About Me
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(2)
            }}
            divider
            button
            component={Link}
            to="/projects"
            selected={value === 2}
          >
            <ListItemText className={value===2 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>
              Projects
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(3)
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText className={value===3 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>
              Contact
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(4)
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 4}
          >
            <ListItemText className={value===4 ? [classes.drawerItem, classes.drawerItemSelected]: classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItemHireMe}
            onClick={() => {
              setOpenDrawer(false)
              setValue(5)
            }}
            divider
            button
            component={Link}
            to="/hireme"
            selected={value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Hire Me
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
              <img className={classes.logo} alt="Portfolio logo" src={logo} />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.root} />
    </>
  )
}
