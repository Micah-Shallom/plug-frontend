import React from 'react';
import { Button } from '@mui/material';

const OAuthButton = ({title, fullWidth, color}) => {
    return (
        <Button
            sx={!fullWidth ? {"width":"300px"} : {mt:1, mb:1}}
            variant="contained"
            fullWidth = {fullWidth ? "true" : "false"}
            type="submit"
            style={{backgroundColor: color}}
        >
            {title}
        </Button>
    )
}

export default OAuthButton;