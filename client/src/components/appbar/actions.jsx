import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appBarStyles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appBarStyles";
import { Colors } from "../../styles/theme";
import { Link as RouterLink } from "react-router-dom";

const Action = ({matches}) => {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Component>
            <MyList type="row">
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <FavoriteIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
                <ListItemButton
                    sx={{
                        justifyContent: "center"
                    }}
                    to="/signup"
                    component={RouterLink}
                >
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary
                        }}
                    >
                        <PersonIcon/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem/>
            </MyList>
        </Component>
    )
}

export default Action;