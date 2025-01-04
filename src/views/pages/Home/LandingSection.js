import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import HomeCard from "src/component/HomeCard";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";

export default function LandingSection({ item, index }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.mainSection}
      style={{
        padding:'1rem 0',
        background: "#F4F2FE",
        height: "100%",
        display: item?.status === "ACTIVE" ? 'flex' : 'none'
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            {index % 2 === 1 ? SectionImage() : SectionInfo()}
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={12}>
            {index % 2 === 0 ? SectionImage() : SectionInfo()}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

  function SectionInfo() {
    return (
      <Fade duration={2000} >
      <Box className={classes.rightSection} >
        <Typography variant="h2">{item?.title}</Typography>
        <Typography variant="h4" >
          {item?.description && parse(item?.description)}
        </Typography>
        <Box className={classes.cardSection} style={{ color:"#fff" }}>
          {item?.contents &&
            item?.contents.map((data, i) => {
              return <HomeCard data={data} key={i} />;
            })}
        </Box>
      </Box>
      </Fade>
    );
  }

  function SectionImage() {
    return (
      <Fade duration={2000} className={classes.leftSection} >
      <Box
        
      >
        {/* <img src={item?.contentFile ? item?.contentFile : ""} alt="" /> */}
        <img src="/images/img6.jpg" alt="" />
      </Box>
      </Fade>
    );
  }
}

const useStyles = makeStyles(() => ({
  rightSection: {
    color: "#000",
    padding: "20px 0px",
    "& h2": {
      fontSize: "48px",
      fontWeight: "600",
      letterSpacing: "4px",
      marginBottom: "30px",
      background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      "@media(max-width:767px)": {
        fontSize: "28px",
        fontWeight: "600",
        marginBottom: "0px",
        letterSpacing: "3px",
      },
    },
    "& h4": {
      color: "#000",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "28px",
      letterSpacing: "2px",
      "@media(max-width:767px)": {
        fontSize: "10px",
        fontWeight: "300",
        lineHeight: "25px",
        letterSpacing: "2px",
      },
    },
  },
  leftSection: {
    display: "flex",
    alignItems: "end",
    justifyContent:"center",
    height: "100%",
    width: '100%',
    padding: '25px',
    marginRight: 60,
    "& img": {
      width: "100%",
      height: "100%",
      maxWidth: "500px",
      maxHeight: "600px",
      minHeight: "400px",
      borderRadius: "12px",
    },
  },
}));
