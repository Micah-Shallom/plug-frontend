import { Button, Divider, Drawer, List, ListItemButton, ListItemText, styled } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appBarStyles";
import CloseIcon from '@mui/icons-material/Close';
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

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
                        <ListItemText>Home</ListItemText>
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
                        <ListItemText>Products</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>About Us</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Bussinesses</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                </List>
            </Drawer>
        </>
    )
};

export default AppDrawer