import { IconButton } from "@mui/material"
import { AppBarContainer, AppBarHeader } from "../../styles/appbarstyles"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Action from "./actions"

const AppBarMobile = ({matches}) => {
    return (
        <AppBarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppBarHeader textAlign={"center"}>Plug</AppBarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Action matches={matches}/>
        </AppBarContainer>
    )
}

export default AppBarMobile