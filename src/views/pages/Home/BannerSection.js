import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  bannerSectionBody: {
    minHeight: "500px",
    padding: "100px 0px 0px",
    background: "linear-gradient(90deg, #6345ED 50%, #DC39FC 90%)",
    width: "100%",
  },
  leftSectionP:{
    fontSize: ".8rem !important",
    lineHeight:"10px"

  },
  leftSection: {
    margin:"auto",
    width:"85%",
    padding: "5rem 0",
    "@media(max-width:667px)": {
      marginTop: "11px",
    },
    "& h1": {
      fontSize: "4rem",
      fontWeight: "800",
      lineHeight: "70px",
      letterSpacing: "5px",
      color: "#ffffff",
      "@media(max-width:1156px)": {
        fontSize: "50px",
        lineHeight: "65px",
      },
      "@media(max-width:667px)": {
        fontSize: "40px",
        lineHeight: "55px",
      },
      "@media(max-width:450px)": {
        fontSize: "35px",
        lineHeight: "45px",
      },
    },
    "& h3": {
      fontSize: "26px",
      fontWeight: "350",
      lineHeight: "48px",
      letterSpacing: "2px",
      color: "#ffffff",
      "@media(max-width:1156px)": {
        fontSize: "20px",
        lineHeight: "36px",
      },
      "@media(max-width:667px)": {
        fontSize: "17px",
        lineHeight: "32px",
      },
    },
  },
  rightSection: {
    padding: "1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img, & video": {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: 12,
      [theme.breakpoints.down('sm')]: {
        width: '400px',
        height: 'auto',
      },
      [theme.breakpoints.down('xs')]: {
        width: '90%',
        height: 'auto',
      },
    },
  },
}));

export default function BannerSection({ bannerDetails, bannerDuration }) {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <Fade duration={2000}>
      <Box className={classes.bannerSectionBody}>
        <Grid container spacing={5}>
          <Grid item lg={6} sm={12} md={6} xs={5} style={{    display:"flex",alignItems:"center"}}>
            <Box className={classes.leftSection}>
              <Typography variant="h1">{t('YOU ARE THE TALENT')}</Typography>
              <Typography variant="h3" className={classes.leftSectionP}>
                {t('MAKE YOUR TALENTS PROFITABLE WITH CRYPTOCURRENCIES.LET YOUR PASSIONATE FANS SUPPORT YOU.')}
              </Typography>
              {/* <Typography variant="h3" className={classes.leftSectionP}></Typography> */}
            </Box>
          </Grid>


          <Grid item lg={6} sm={12} md={6} xs={12}>
            <Carousel
              axis={"horizontal"}
              autoPlay
              infiniteLoop
              transitionTime={1000}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              interval={bannerDuration * 1000}
              style={{ display: "flex",
                alignItems: "center", }}
            >
              {bannerDetails.map((item) => (
                <Box
                  key={item._id}
                  className={classes.rightSection}
                >
                  {item.mediaType === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      style={{
                        width: isMobile ? '50%' : '500px',
                        height: isMobile ? 'auto' : '250px',
                        borderRadius: 12
                      }}
                    >
                      <source src={item.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      // src="/images/img1.png"
                      src={item.media}
                      alt="Talent illustration"
                      style={{
                        width: isMobile ? '1000%' : '55%',
                        height: isMobile ? 'auto' : '55%'
                      }}
                    />
                  )}
                </Box>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}
