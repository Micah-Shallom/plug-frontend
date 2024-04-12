import { Box, Button, Typography, styled } from "@mui/material";
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
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        alignItems: 'center'
    }
}));

export const BannerContent = styled(Box)(() => ({
    flexDirection:"column",
    justifyContent:"center",
    display:"flex",
    maxWidth:420,
    height: "100%",
    padding: "30px",
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
    marginBottom: "3em",
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
    [theme.breakpoints.up('sm')]: {
        width: '400px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: "300px"
    }
}));

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) =>
    prop !== 'color',
    name: "MyShopButton",
    slot: "Root",
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary
    ],
})(({theme}) => ({
    padding: "20px 0px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
        fontSize: "14px"
    }
}))