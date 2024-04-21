import { Card, CardContent, styled, Box, Grid } from "@mui/material";
import { Colors } from "../theme";
import Badge from '@mui/material/Badge';

export const Section = styled(Box)`
  padding: 12px;
`;

export const CategoryContainer = styled(Grid)(({ theme }) => ({
    overflowY: "auto", // Enable vertical scrolling when content overflows
    maxHeight: "100vh", // Adjust the max height as needed

    // Remove default styling of the scrollbar
  "::-webkit-scrollbar": {
    width: "0", // Hide the scrollbar
    background: "transparent", // Set the background color to transparent
  },
  }));

export const CategoryCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.spacing(1), // You can use theme.spacing to maintain consistency with Material-UI spacing units
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: Colors.light_gray,
  },
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 3,
      top: 55,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const CategoryCardContent = styled(CardContent)`
  padding: 16px;
`;

export const CardActionArea = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const CategoryIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(8), // Using theme.spacing for consistent spacing
  height: theme.spacing(8),
  borderRadius: "50%",
  backgroundColor: Colors.border,
  color: "#333",
  transition: "all 0.2s ease-in-out",
  margin: "7px 0 0 30px",

  [`${CategoryCard}:hover &`]: {
    backgroundColor: Colors.dim_grey,
  },
}));

export const BannerContent = styled(Box)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  maxWidth: 420,
  height: "100%",
  padding: theme.spacing(3), // Using theme.spacing for consistent spacing
}));
