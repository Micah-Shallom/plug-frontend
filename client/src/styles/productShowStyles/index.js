import {styled} from '@mui/material';
import { Box} from '@mui/material';


export const StyledAvatarSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProductShowImage = styled('img')(({src, theme}) => ({
    src : `url(${src})`,
    width: '100%',
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
        width: "80%",
        padding: "24px"
    }
}));
