import { styled, Container, Grid, Card, CardContent, CardMedia, Avatar, Button ,Box} from '@mui/material';
import { Colors } from '../theme';

export const BusinessContainer = styled(Container)`
  padding: 30px 0px 0px 0px;
  width:100%;
  `;
  
  export const BusinessGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }
`;

export const BusinessCard = styled(Card)`
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
`;

export const BusinessCardContent = styled(CardContent)`
  padding: 10px 0px;
`;

export const BusinessCardMedia = styled(CardMedia)`
  height: 120px;
  object-fit: cover;
  aspect-ratio: 400 / 300;
  border-radius: 5px;
`;

export const BusinessAvatar = styled(Avatar)`
  border: 1px solid;
`;

export const BusinessLink = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  color: ${Colors.primary};
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    background-color: ${Colors.light_gray};
  }
`;