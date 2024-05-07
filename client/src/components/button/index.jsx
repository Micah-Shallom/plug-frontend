import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Colors } from "../../styles/theme";


const PlugButton = ({title, fullWidth}) => {
    return (
        <Button
            startIcon={<SendIcon sx={{color: Colors.white}}/>}
            sx={!fullWidth ? {"width":"300px"} : {mt:4, mb:4}}
            variant="contained"
            fullWidth = {fullWidth ? "true" : "false"}
            type="submit"
        >
            {title}
        </Button>
    )
}

export default PlugButton;