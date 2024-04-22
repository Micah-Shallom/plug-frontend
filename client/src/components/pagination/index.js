import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <Box sx={{"display":"flex", "justifyContent":"center", "alignItems":"center", "padding": "40px 20px"}}>
        <Stack spacing={2}>
        <Pagination count={10} size='large' variant="outlined" color="primary" />
        </Stack>
    </Box>
  );
}