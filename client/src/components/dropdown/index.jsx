import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui"
import { DropDownContainer, SearchField } from "../../styles/dropdownStyles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Category from "../category";


const SearchBox = () => {
    const {openSearchBox, setOpenSearchBox, showCategories} = useUIContext();

    return (
        <Slide direction="down" in={openSearchBox} timeout={500}>
            <DropDownContainer>
                {/* toggle between showing search field or container items */}
                {
                    !showCategories ? <>
                        <SearchField color="secondary" variant="standard" fullWidth placeholder="Search..."/>
                        <IconButton>
                            <SearchIcon sx={{fontSize: {xs: "2rem", md:"3rem"}}} color="secondary"/>
                        </IconButton>
                    </> :
                    <Category/>
                }
                
                <IconButton onClick={() => setOpenSearchBox(false)}
                sx = {{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
                >
                    <CloseIcon sx={{fontSize: "3rem"}} color="secondary" />
                </IconButton>
            </DropDownContainer>
        </Slide>
    )
}

export default SearchBox