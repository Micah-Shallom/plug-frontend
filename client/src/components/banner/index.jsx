import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/bannerStyles"

const Banner = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <BannerContainer>
            <BannerImage src="/images/bag.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2"> New Bags </BannerTitle>
                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fugit officia tenetur illum optio asperiores, fuga tempore architecto quam unde quae tempora accusantium veniam consectetur, explicabo iusto commodi voluptatibus soluta. lorem50
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
};

export default Banner;