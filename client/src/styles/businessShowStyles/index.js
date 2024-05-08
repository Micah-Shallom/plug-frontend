import { Box,Card, styled, ListItem } from "@mui/material";

export const StyledCard = styled(Box)`
  border-radius: 0px;
`;

export const ProductCard = styled(Card)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ContactInfoItem = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
