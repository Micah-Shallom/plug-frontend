import { ListItemText } from "@mui/material"
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appbar"

const AppBarDesktop = () => {
    return (
        <AppBarContainer>
            <AppBarHeader>Plug</AppBarHeader>
            <MyList type="row">
                <ListItemText primary="Home"/>
                <ListItemText primary="Categories"/>
                <ListItemText primary="Products"/>
                <ListItemText primary="Contact Us"/>
            </MyList>
        </AppBarContainer>
    )
}

export default AppBarDesktop