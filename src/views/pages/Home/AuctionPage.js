import React, { useState, useEffect } from "react";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
import UserDetailsCard from "src/component/UserCard";
import BestSellersCard from "src/component/BestSellersCard";
import PopularCategoriesCard from "src/component/PopularCategoriesCard";
import BundleCard from "src/component/NewBundleCard";
import ItemCard from "src/component/NewItemCard";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Apiconfigs from "src/Apiconfig/Apiconfigs";
import { useNavigate } from "react-router";
import "./style.css";
import { Grid } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const AuctionPage = ({ staticSections }) => {
  const {t} = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [auctionList, setAuctionList] = useState([]);
  const [allNFTList, setAllNFTList] = useState([]);
  const [allNFT1List, setAllNFT1List] = useState([]);
  const [userListToDisplay, setUserListToDisplay] = useState([]);
  const [isLoadingAuctions, setIsLaodingAuctions] = useState(false);

  useEffect(() => {
    auctionNftListHandler().catch(console.error);
    listAllNftHandler().catch(console.error);
    listAllNft1Handler().catch(console.error);
    getuser().catch(console.error);
    let resize = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
    return () => clearTimeout(resize);
  }, []);

  // Start My Code "Here I have started writing the code"
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // End My Code

  return (
    <>
      {CreatorsSection()}
      {BundlesSection()}
      {ItemsSection()}
      {BestSellersSection()}
      {PopularCategoriesSection()}
      {NFTSection()}
    </>
  );

  function NFTSection() {
    const item = staticSections.find((i) => i?.title === "NFT");
    return (
      <Fade duration={2500}>
        <Container
          maxWidth="100%"
          style={{
            margin: "4rem 0 0 0",
            height: "100%",
            background: "#F4F2FE",
            display: item?.status === "ACTIVE" ? "block" : "none",
          }}
        >
          <div id="auctions_section" className={classes.sectionHeading}>
            <Typography
              variant="h2"
              component="h2"
              onClick={() => navigate("/auctions")}
              style={{
                cursor: "pointer",
                margin: "20px auto",
                fontSize: "66px",
                // color: "#000",
                padding: "20px",
                background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('NFT Auction')}
            </Typography>
          </div>
          {!isLoadingAuctions && auctionList.length === 0 ? (
            <Box
              align="center"
              style={{
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                minHeight: "300px",
                mixBlendMode: "darken",
                backgroundImage: "url(/images/home/nft-comingsoon-bg.png)",
                backgroundSize: "cover",

                backgroundPosition: "50% 50%",
              }}
              mt={4}
              mb={5}
            >
              <Typography
                variant="h1"
                style={{
                  // color: "#fffa",
                  padding: "20px",
                  background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                  fontSize: "10vw",
                  textShadow: "rgb(81 13 29) 1px 1px 4px",
                }}
              >
                {t('COMING SOON')}
              </Typography>
            </Box>
          ) : (
            ""
          )}
        </Container>
      </Fade>
    );
  }

  function BundlesSection() {
    const item = staticSections.find((i) => i?.title === "Bundles");
    return (
      <Container
        maxWidth="100%"
        style={{
          marginBottom: "-20px",
          background: "#F4F2FE",
          height: "100%",
          display: item?.status === "ACTIVE" ? "block" : "none",
        }}
      >
        <div id="bundle_section" className={classes.sectionHeading}>
          <Typography
            variant="h2"
            component="h2"
            onClick={() => navigate("/bundles")}
            style={{
              cursor: "pointer",
              margin: "20px auto",
              fontSize: "66px",
              // color: "#000",
              padding: "20px",
              background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('Bundles')}
          </Typography>
        </div>
        <Carousel
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={30000 / windowSize.innerWidth}
          numItemsPerView={5}
        >
          {allNFTList &&
            allNFTList.map((data, i) => {
              return <BundleCard data={data} key={i} />;
            })}
        </Carousel>
      </Container>
    );
  }
  function ItemsSection() {
    const item = staticSections.find((i) => i?.title === "Bundles");
    return (
      <Container
        maxWidth="100%"
        style={{
          marginBottom: "-20px",
          background: "#fff",
          height: "100%",
          display: item?.status === "ACTIVE" ? "block" : "none",
        }}
      >
        <div id="bundle_section" className={classes.sectionHeading}>
          <Typography
            variant="h2"
            component="h2"
            onClick={() => navigate("/items")}
            style={{
              cursor: "pointer",
              margin: "20px auto",
              fontSize: "66px",
              // color: "#000",
              padding: "20px",
              background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('Marketplace')}
          </Typography>
        </div>
        <Carousel
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={30000 / windowSize.innerWidth}
          numItemsPerView={5}
        >
          {allNFT1List &&
            allNFT1List.map((data, i) => {
              return <ItemCard data={data} key={i} />;
            })}
        </Carousel>
      </Container>
    );
  }

  function BestSellersSection() {
    const item = staticSections.find((i) => i?.title === "Bundles");
    return (
      <Container
        maxWidth="100%"
        style={{
          marginBottom: "-20px",
          background: "#F4F2FE",
          height: "100%",
          display: item?.status === "ACTIVE" ? "block" : "none",
        }}
      >
        <div id="bundle_section" className={classes.sectionHeading}>
          <Typography
            variant="h2"
            component="h2"
            onClick={() => navigate("/bundles")}
            style={{
              cursor: "pointer",
              margin: "20px auto ",
              fontSize: "66px",
              // color: "#000",
              padding: "20px",
              background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('Best Sellers')}
          </Typography>
        </div>
        <Carousel
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={20000 / windowSize.innerWidth}
          numItemsPerView={5}
        >
          {allNFTList &&
            allNFTList.map((data, i) => {
              return <BestSellersCard data={data} key={i} />;
            })}
        </Carousel>
      </Container>
    );
  }

  function PopularCategoriesSection() {
    const item = staticSections.find((i) => i?.title === "Bundles");

    return (
      <Container
        maxWidth="100%"
        style={{
          margin: "0 0 4rem 0 !important",
          marginBottom: "-20px",
          background: "#fff",
          height: "100%",
          display: item?.status === "ACTIVE" ? "block" : "none",
        }}
      >
        <div id="bundle_section" className={classes.sectionHeading}>
          <Typography
            variant="h2"
            component="h2"
            onClick={() => navigate("/bundles")}
            style={{
              cursor: "pointer",
              margin: "20px auto",
              fontSize: "66px",
              // color: "#000",
              padding: "20px",
              background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('Popular Categories')}
          </Typography>
        </div>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          style={{ width: "80%", margin: "auto" }}
        >
          {allNFTList &&
            allNFTList.map((data, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <PopularCategoriesCard data={data} />
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }

  function CreatorsSection() {
    const item = staticSections.find((i) => i?.title === "Users");
    return (
      <Container
        maxWidth="100%"
        style={{
          marginBottom: "-20px",
          background: "#fff",
          height: "100%",
          display: item?.status === "ACTIVE" ? "block" : "none",
        }}
      >
        <div id="creators_section" className={classes.sectionHeading}>
          <Typography
            variant="h2"
            component="h2"
            onClick={() => navigate("/creators")}
            style={{
              cursor: "pointer",
              margin: "20px auto",
              fontSize: "66px",
              // color: "#000",
              padding: "20px",
              background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('Creators')}
          </Typography>
        </div>
        <Carousel
          infiniteLoop={false}
          centerMode={true}
          centerSlidePercentage={30000 / windowSize.innerWidth}
          numItemsPerView={5}
        >
          {userListToDisplay.map((data, i) => {
            return <UserDetailsCard key={i} data={data} />;
          })}
        </Carousel>
      </Container>
    );
  }

  async function auctionNftListHandler() {
    setIsLaodingAuctions(true);
    await axios({
      method: "GET",
      url: Apiconfigs.allorder,
      headers: {
        token: sessionStorage.getItem("token"),
      },
    })
      .then(async (res) => {
        if (res.data.statusCode === 200) {
          if (res.data.result) {
            setAuctionList(res.data.result);
            setIsLaodingAuctions(false);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsLaodingAuctions(false);
      });
  }

  async function listAllNftHandler() {
    await axios({
      method: "GET",
      url: Apiconfigs.listAllNft,
      params: {
        page: 1,
        limit: 10,
      },
    })
      .then(async (res) => {
        if (res.data.statusCode === 200) {
          setAllNFTList(res.data.result.docs);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  async function listAllNft1Handler() {
    await axios({
      method: "GET",
      url: Apiconfigs.listAllNft1,
      params: {
        page: 1,
        limit: 10,
      },
    })
      .then(async (res) => {
        if (res.data.statusCode === 200) {
          setAllNFT1List(res.data.result.docs);
        }
      })
      .catch((err) => {
        //console.log(err.message);
      });
  }

  async function getuser() {
    axios({
      method: "GET",
      url: Apiconfigs.latestUserList,
      params: {
        limit: 10,
        userType: "Creator",
      },
      headers: {
        token: sessionStorage.getItem("token"),
      },
    })
      .then(async (res) => {
        if (res.data.statusCode === 200) {
          if (res.data.result.docs) {
            setUserListToDisplay(res.data.result.docs);
          }
        }
      })
      .catch(() => {});
  }
};

export default AuctionPage;

const useStyles = makeStyles(() => ({
  mas: {
    textAlign: "center",
    // fontFamily: "Poppins",
    fontFamily: "Roboto",
    fontSize: "32px",
    fontWeight: "700",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.51",
    letterSpacing: "normal",
    texAlign: "left",
    color: "#141518",
    marginTop: "0px",
  },
  LoginBox: {},
  sectionHeading: {
    display: "flex",
    justifyContent: "center",
  },
  search: {
    border: "0px solid #e5e3dd",
    display: "flex",
    alignItems: "center",
    borderRadius: "0px",
  },
  box: {
    flexWrap: "inherit",
  },
  gridbox: {
    "@media(max-width:1280px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
