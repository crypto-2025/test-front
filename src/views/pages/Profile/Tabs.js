import React, { useState, useEffect, useContext } from "react";
import { Box, Container, makeStyles, Button } from "@material-ui/core";
import { UserContext } from "src/context/User";
import Page from "src/component/Page";
import Auction from "./Auction";
import Bundles from "./Bundles";
import Items from "./Items";
import Purchases from "./purchases";
import Sales from "./sales";
import Subscriptions from "./Subscriptions";
import Feed from "./Feed";
import MyBids from "./MyBids";
import UserDetails from "./UserDetails";
import SoldBuyList from "./SoldBuyList";
import DonationsList from "./DonateList";
import TransactionHistory from "./TransactionsList";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  Padding_Top: {
    paddingTop: isMobile ? "15px" : "30px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },

  btnOutPro: {
    border:"#6345ED 1px solid", 
    color:"#6345ED",
    "&:hover": {
      //   background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))!important", 
      background: "linear-gradient(to bottom right,  rgb(199, 113, 238), #640D5F)",

      color:"white",
      border:"none"
    },
  },
  PageHeading: {
    fontWeight: "500",
    fontSize: "32px",
    lineHeight: "39px",
    color: "#000",
    paddingBottom: "10px",
  },
  active: {
    color:"white",
    borderRadius: "15px",
    // background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
    background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
    transition: "background  .6s",
    "&:hover": {
      background: "linear-gradient(to bottom right,  rgb(199, 113, 238), #640D5F)",
    },
  },
}));

export default function Activity() {
  const auth = useContext(UserContext);
  const classes = useStyles();
  const [tabview, setTabView] = useState("bundles");
  const {t} = useTranslation();
  useEffect(() => {
    if (auth?.userData?.userType !== "User") {
      setTabView("bundles");
    } else {
      setTabView("subscriptions");
    }
  }, [auth.userData]);

  return (
    <Page title="">
      <Box className={classes.Padding_Top}>
        <Container maxWidth="xl">
          <Box>
            {auth?.userData?.userType !== "User" && (
              <Button
                className={tabview === "bundles" ? classes.active : " "}
                onClick={() => setTabView("bundles")}
              >
                {t('My Bundles')}
              </Button>
            )}
            {auth?.userData?.userType !== "User" && (
              <Button
                className={tabview === "items" ? classes.active : " "}
                onClick={() => setTabView("items")}
              >
                {t('My Marketplace')}
              </Button>
            )}
            <Button
              className={tabview === "purchases" ? classes.active : " "}
              onClick={() => setTabView("purchases")}
            >
              {t('My purchases')}
            </Button>
            <Button
              className={tabview === "sales" ? classes.active : " "}
              onClick={() => setTabView("sales")}
            >
              {t('My sales')}
            </Button>
            <Button
              className={tabview === "subscriptions" ? classes.active : " "}
              onClick={() => setTabView("subscriptions")}
            >
              {t('My subscriptions')}
            </Button>
            <Button
              className={tabview === "feed" ? classes.active : " "}
              onClick={() => setTabView("feed")}
            >
              {t('My feed')}
            </Button>
            {auth?.userData?.userType !== "User" && (
              <Button
                className={tabview === "auctions" ? classes.active : " "}
                onClick={() => setTabView("auctions")}
              >
                {t('My auctions')}
              </Button>
            )}
  
            {auth?.userData?.userType !== "User" && (
              <Button
                className={tabview === "subscribe" ? classes.active : " "}
                onClick={() => setTabView("subscribe")}
              >
                {t('Subscribers')}
              </Button>
            )}
  
            {auth?.userData?.userType !== "User" && (
              <Button
                className={tabview === "donor" ? classes.active : " "}
                onClick={() => setTabView("donor")}
              >
                {t('Supporter List')}
              </Button>
            )}
            <Button
              className={tabview === "DonateList" ? classes.active : " "}
              onClick={() => setTabView("DonateList")}
            >
              {t('Donate Transaction')}
            </Button>
            <Button
              className={
                tabview === "TransactionHistory" ? classes.active : " "
              }
              onClick={() => setTabView("TransactionHistory")}
            >
              {t('Transaction History')}
            </Button>
          </Box>
          <Box>
            {tabview === "bundles" && <Bundles />}
            {tabview === "items" && <Items />}
            {tabview === "purchases" && <Purchases />}
            {tabview === "sales" && <Sales />}
            {tabview === "subscriptions" && <Subscriptions />}
            {tabview === "subscribe" && <UserDetails type="subscribers" />}
            {tabview === "feed" && <Feed />}
            {tabview === "auctions" && <Auction />}
            {tabview === "BoughtAuctions" && <SoldBuyList type="bought" />}
            {tabview === "soldAuctions" && <SoldBuyList type="sold" />}
            {tabview === "bids" && <MyBids />}
            {tabview === "donor" && <UserDetails type="donor" />}
            {tabview === "DonateList" && <DonationsList />}
            {tabview === "TransactionHistory" && <TransactionHistory />}
          </Box>
        </Container>
      </Box>
    </Page>
  );
  
}
