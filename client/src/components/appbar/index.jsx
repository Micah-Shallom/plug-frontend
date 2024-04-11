import { useMediaQuery, useTheme } from "@mui/material"
import AppBarMobile from "./appbarMobile"
import AppBarDesktop from "./appbarDesktop"

const AppBar = () => {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {match ? <AppBarMobile matches={match}/> : <AppBarDesktop matches={match}/> }
        </>
    )
}

export default AppBar;