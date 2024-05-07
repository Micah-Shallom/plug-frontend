import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';



// Styled components for custom styling (optional)
export const StyledCard = styled(Card)`
  width: 100%;
  max-width: 2xl; /* Assuming 2xl is your desired max-width */
`;

export const StyledErrorText = styled(Typography)`
  color: red;
  font-size: 0.8rem;
  margin-top: 4px;
`;


