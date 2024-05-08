import { Button, Divider, Drawer, List, ListItemButton, ListItemText, styled } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appBarStyles";
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { Link } from "react-router-dom";
import { LinkStyle } from "../../styles/appBarStyles"


const AppDrawer = () => {
    const MiddleDivider = styled((props) => (
        <Divider variant="middle" {...props}/>
    ))``;

    const {openDrawer, setOpenDrawer,setOpenSearchBox, showCategories, setShowCategories} = useUIContext();

    return (
        <>
            {
                openDrawer && <Button onClick={() => {
                    setOpenDrawer(false)
                    setOpenSearchBox(false)
                    if (showCategories){
                        setShowCategories(false)
                    }
                }}>
                    <DrawerCloseButton>
                        <CloseIcon sx={{fontSize:"2.5rem", color:lighten(0.09, Colors.secondary)}}/>
                    </DrawerCloseButton>
                </Button>
            }
            <Drawer open={openDrawer} >
                <List>
                    <ListItemButton>
                        <LinkStyle to="/">
                            <ListItemText>Home</ListItemText>
                        </LinkStyle>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton onClick={() => {
                        setOpenSearchBox(true)
                        setShowCategories(true)
                    }}>
                        <ListItemText>Categories</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <LinkStyle to="/products">
                            <ListItemText>Products</ListItemText>
                        </LinkStyle>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <LinkStyle to="/business">
                            <ListItemText>Business</ListItemText>
                        </LinkStyle>
                    </ListItemButton>
                    <MiddleDivider />
                </List>
            </Drawer>
        </>
    )
};

export default AppDrawer