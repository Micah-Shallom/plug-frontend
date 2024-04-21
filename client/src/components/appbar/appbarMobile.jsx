import { IconButton } from "@mui/material"
import { AppBarContainer, AppBarHeader } from "../../styles/appBarStyles"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Action from "./actions"
import { useUIContext } from "../../context/ui"

const AppBarMobile = ({matches}) => {
    const {setOpenDrawer, setOpenSearchBox, setShowCategories} = useUIContext();
    
    return (
        <AppBarContainer>
            <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon/>
            </IconButton>
            <AppBarHeader textAlign={"center"}>Plug</AppBarHeader>
            <IconButton onClick={() => {
                setOpenSearchBox(true)
                setShowCategories(false)
            }}>
                <SearchIcon/>
            </IconButton>
            <Action matches={matches}/>
        </AppBarContainer>
    )
}

export default AppBarMobile