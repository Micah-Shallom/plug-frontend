import { useTheme } from "@emotion/react"
import { useMediaQuery } from "@mui/material"
import AppBarMobile from "./appbarMobile"
import AppBarDesktop from "./appbarDesktop"

const AppBar = () => {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            {match ? <AppBarMobile/> : <AppBarDesktop/> }
        </>
    )
}

export default AppBar