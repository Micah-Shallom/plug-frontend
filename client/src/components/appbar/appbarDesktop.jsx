import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppBarContainer, AppBarHeader, LinkStyle, MyList } from "../../styles/appBarStyles"
import SearchIcon from '@mui/icons-material/Search'
import Action from "./actions"
import { useUIContext } from "../../context/ui"

const AppBarDesktop = ({matches}) => {
    const { setOpenSearchBox, setShowCategories} = useUIContext();


    return (
            <AppBarContainer>
                <AppBarHeader>Plug</AppBarHeader>
                <MyList type="row">
                    <ListItemButton>
                        <LinkStyle to="/">
                            <ListItemText primary="Home"/>
                        </LinkStyle>
                    </ListItemButton>
                    <ListItemButton onClick={() => {
                        setOpenSearchBox(true)
                        setShowCategories(true)
                    }}>
                        <ListItemText primary="Categories"/>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkStyle to="/products">
                            <ListItemText primary="Products"/>
                        </LinkStyle>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkStyle to="/business">
                            <ListItemText primary="Businesses"/>
                        </LinkStyle>
                    </ListItemButton>
                    <ListItemButton onClick={() => {
                        setOpenSearchBox(true)
                        setShowCategories(false)
                    }}>
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