import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui"
import { SearchBoxContainer, SearchField } from "../../styles/searchStyles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


const SearchBox = () => {
    const {openSearchBox, setOpenSearchBox} = useUIContext();

    return (
        <Slide direction="down" in={openSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField color="secondary" variant="standard" fullWidth placeholder="Search..."/>
                <IconButton>
                    <SearchIcon sx={{fontSize: {xs: "2rem", md:"3rem"}}} color="secondary"/>
                </IconButton>
                <IconButton onClick={() => setOpenSearchBox(false)}
                sx = {{
                    position: "absolute",
                    top: 10,
                    right: 10
                }}
                >
                    <CloseIcon sx={{fontSize: "3rem"}} color="secondary" />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default SearchBox