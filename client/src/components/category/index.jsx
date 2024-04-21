import { Box, Container, Grid, Typography } from "@mui/material"
import { Section, CategoryCard,  CategoryIconWrapper, CardActionArea , CategoryCardContent, CategoryContainer, StyledBadge} from "../../styles/categoryStyles";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Stack from '@mui/material/Stack';
import {Colors} from "../../styles/theme";
import { categoryData } from "../../data/category";

const Category = () => {
    const renderCategories = categoryData.map(category => (
        <Grid key={category.id} item xs={12} md={6} lg={4} xl={3}>
            <CategoryCard>
            <CardActionArea>
                <Stack spacing={2} direction="row">
                    <StyledBadge badgeContent={4} color="secondary">
                        <CategoryIconWrapper>
                            <DonutLargeIcon fontSize="large" />
                        </CategoryIconWrapper>
                    </StyledBadge>
                </Stack>
                <CategoryCardContent>
                <Typography variant="h5" component="h3" fontWeight="semibold" tracking="tight">
                    {category.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {category.description}
                </Typography>
                </CategoryCardContent>
            </CardActionArea>
            </CategoryCard>
        </Grid>
    ))

    return (
        <Section>
            <Container maxWidth="lg">
            <CategoryContainer container spacing={4}>
                <Grid item xs={12}>
                    <Box display="flex" flexDirection="column" alignItems="start"  gap={4} >
                        <Typography variant="h2" component="h2" tracking="tight" sx={{color: Colors.light}}>
                            Explore Categories
                        </Typography>
                        <Typography variant="body1" sx={{color:Colors.light_gray}}>
                            Browse through our wide selection of categories to find what you're looking for.
                        </Typography>
                    </Box>
                </Grid>
                {/* Render all categories fetched from db */}
                {renderCategories}

            </CategoryContainer>
        </Container>
    </Section>
    )
}

export default Category;
