import React from "react";
import {
Typography,
Box,
Card,
makeStyles,
} from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
const useStyles = makeStyles((theme) => ({
cards: {
    padding: "0",
    borderRadius: "10px",
    width: "100%",
    margin: "5px",
    position: "relative",
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    background: "none",
    border: "none",
    boxShadow: "none",
    // transition: "all 0.3s ease-in-out",
    // "&:hover": {
    // border: "1px solid #C13584",
    // boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    // transform: "translateY(-5px)",
    // },
},
cardContent: {
    border: "none",
    boxShadow: "none",
    padding: "0 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    "& h6": {
    marginBottom: "5px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#333", 
    },
    "& p": {
    fontSize: "12px",
    color: "#777", 
    },
},
iconImg: {
    width: "65px", 
    height: "60px",
    borderRadius: "50%", 
    background: "linear-gradient(90deg, #6345ED 30%, #DC39FC 90%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
},
}));

export default function PopularCategoriesCard({ template }) {
const classes = useStyles();


const defaultTemplate = {
    title: "Browse By Template",
    description: "Sed ut perspiciatis unde omnis natus error sit voluptatem.",
    icon: "images/icon.png",
};

const templateData = template || defaultTemplate;

return (
    <Fade duration={2500}>
    <Card className={classes.cards}>

    <Box className={classes.iconImg}>
        <img
        src={templateData.icon}
        alt={templateData.title}
        style={{ width: "100%", height: "100%" }} 
        />
    </Box>


    <Box className={classes.cardContent}>
        <Typography variant="h6">{templateData.title}</Typography>
        <Typography>{templateData.description}</Typography>
    </Box>
    </Card>
    </Fade>
);
}
