import { Box, IconButton, List, Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"
import { Link } from "react-router-dom";

//container
export const AppBarContainer = styled(Box)(() => ({
    display:"flex",
    marginTop:4,
    justifyContent:"center",
    alignItems:"center",
    padding: '2px 8px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
    zIndex: 999999999999,
    // position: 'fixed'
}));

//header
export const AppBarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow:1,
    fontSize: '4em',
    fontFamily: "'Montez', 'cursive'",
    color: Colors.secondary
}));

export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
    display: "flex",
    background: Colors.shaft,
    position: "fixed",
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: "center",
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))

export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    top: -13,
    left: "170px",
    zIndex: 19999
}))

export const LinkStyle = styled(Link)(() => ({
    textDecoration: "none",
    color: "inherit"
}))