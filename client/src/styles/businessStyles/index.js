import { styled, Container, Grid, Card, CardContent,CardMedia, Typography,Box } from '@mui/material';

export const BusinessContainer = styled(Container)`
  width: 100%;
  padding: 48px 0;
`;

export const BusinessContentContainer = styled(Grid)`
  display: grid;
  gap: 32px;
  padding: 0 24px;
  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const BusinessCardContainer = styled(Card)`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
`;

export const BusinessCardContent = styled(CardContent)`
  padding: 24px;
`;

export const BusinessImage = styled(CardMedia)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
`;

export const BusinessInfo = styled(Box)`
  margin-top: 16px;
`;

export const BusinessTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const BusinessDescription = styled(Typography)`
  font-size: 1rem;
  color: #666;
`;



