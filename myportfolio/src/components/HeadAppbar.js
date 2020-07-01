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
  toolbarMargin: {
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
    "& .MuiListItemText-root": { 
      opacity:1
    }
  },
  appbar:{
    zIndex: theme.zIndex.modal +1
  }
 
}))

export default function HeadAppbar(props) {
  const classes = useStyles()
  const theme = useTheme()
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down("md"))
 
  const [anchorEl, setAnchorEl] = useState(null)
 
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleMenuItemClick = (e, i) => {
    props.setSelectedIndex(i)
    setAnchorEl(null)
  }

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }
  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuOptions = [
    { name: "Services", Link: "/services", activeIndex: 4, selectedIndex:0 },
    { name: "Mobile Apps Development", Link: "/appsdevelopment" ,activeIndex: 4, selectedIndex:1},
    { name: "Website Development", Link: "/websitedevelopment" ,activeIndex: 4, selectedIndex:2}
  ]

  const routes =[
    {name:"Home", Link:"/", activeIndex:0}, 
     {name:"About Me", Link:"/about" , activeIndex:1}, 
      {name:"Projects", Link:"/projects" , activeIndex:2}, 
       {name:"Contact", Link:"/contact" , activeIndex:3}, 
        {name:"Services", Link:"/services" , activeIndex:4, ariaControls:"simple-menu", ariaHaspopup:"true", mouseOver: event => handleClick(event) }
  ]

  useEffect(() => {
    [...menuOptions, ...routes].forEach (route => {
      switch(window.location.pathname){
        case `${route.Link}`:
          if(props.value!==route.activeIndex){
            props.setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !==props.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
          default:
            break;
      }
    })}, [props.value, menuOptions, props.selectedIndex, routes,props]);


    

  const tabs = (
    <>
      <Tabs value={props.value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary" >

        {routes.map((route, index) => (
          <Tab key= {`${route} ${index}`}   className={classes.tab} component={Link} to={route.Link} label={route.name} aria-controls={route.ariaControls}
          aria-haspopup={route.ariaHaspopup} onMouseOver={route.mouseOver}/>
        ))}
        
      </Tabs>

      <Button className={classes.button} variant="contained" color="secondary">
        Hire Me
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} classes={{ paper: classes.menu }} elevation={0}
        style={{zIndex: 1302}}
        keepMounted >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option} ${i}`}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={event => {
              handleMenuItemClick(event, i)
              props.setValue(4)
              handleClose()
            }}
            selected={i === props.selectedIndex}
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
        
      <div className={classes.toolbarMargin} />

        <List disablePadding>
{routes.map(route => (
  <ListItem key={`${route} ${route.activeIndex}`}
  onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex)}}
   divider button component={Link} to = {route.Link}  selected={props.value===route.activeIndex} 
   classes={{selected:classes.drawerItemSelected}}
  >
    <ListItemText className={classes.drawerItem}  disableTypography> {route.name}

    </ListItemText>
  </ListItem>
))}

          <ListItem
            className={classes.drawerItemHireMe}
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(5)
            }}
            divider
            button
            component={Link}
            classes={{root:classes.drawerItemHireMe , selected: classes.drawerItemSelected}}
            to="/hireme"
            selected={props.value === 5}
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
        <AppBar   className={classes.appbar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => props.setValue(0)}>
              <img className={classes.logo} alt="Portfolio logo" src={logo} />
            </Button>

            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
