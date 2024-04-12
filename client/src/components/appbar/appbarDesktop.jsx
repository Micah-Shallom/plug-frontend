import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appBarStyles"
import SearchIcon from '@mui/icons-material/Search'
import Action from "./actions"
import { useUIContext } from "../../context/ui"

const AppBarDesktop = ({matches}) => {
    const {setOpenSearchBox} = useUIContext();

    return (
            <AppBarContainer>
                <AppBarHeader>Plug</AppBarHeader>
                <MyList type="row">
                    <ListItemText primary="Home"/>
                    <ListItemText primary="Categories"/>
                    <ListItemText primary="Products"/>
                    <ListItemText primary="Contact Us"/>
                    <ListItemButton onClick={() => setOpenSearchBox(true)}>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Action matches={matches}/>
            </AppBarContainer>
    )
}

export default AppBarDesktop