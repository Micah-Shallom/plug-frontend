import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Colors } from "../../styles/theme";


const PlugButton = ({title}) => {
    return (
        <Button
            startIcon={<SendIcon sx={{color: Colors.white}}/>}
            sx={{mt:4, mb:4}}
            variant="contained"
            fullWidth
        >
            {title}
        </Button>
    )
}

export default PlugButton;