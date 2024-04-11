import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({theme}) => ({
    display:"flex",
    justifyContent:"center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    background: Colors.light_gray,
    [theme.breakpoints.up('md')]: {
        height: "30%"
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
        alignItems: 'center'
    }
}));

export const BannerContent = styled(Box)(() => ({
    flexDirection:"column",
    justifyContent:"center",
    display:"flex",
    maxWidth:420,
    padding: "30px"
}));

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px'
    }
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    letterspacing: 1.25,
    marginBottom: "30em",
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterspacing: 1.15,
        marginBottom: "1.5em"
    }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '500px',
    height: 'inherit',
    [theme.breakpoints.down('md')]: {
        width: '350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: "300px"
    }
}))