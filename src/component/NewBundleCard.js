import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Apiconfigs from "src/Apiconfig/Apiconfigs";
import { UserContext } from "src/context/User";
import {
  Typography,
  Box,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { toast } from "react-toastify";
import { Slide } from "react-awesome-reveal"; // استيراد مكتبة react-awesome-reveal

const useStyles = makeStyles((theme) => ({
  root: {
    width: "260px",
    padding: "10px",
    minHeight: "420px",
    margin: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    background: "#E0E5FF",
    border: "2px solid #d4b2d9",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      border: "2px solid #c600a4",
      boxShadow: "0 8px 16px #95007c40",
      transform: "translateY(-5px)",
    },
  },
  countdown: {
    background: "linear-gradient(45deg, #6345ED 30%, #DC39FC 90%)",
    color: "#fff",
    borderRadius: "10px",
    padding: "5px 10px",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  media: {
    height: "170px",
    width: "100%",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  mediaImg: {
    width: "100% !important",
    height: "100%",
    borderRadius: "10px",
  },
  cardContent: {
    width: "100%",
    padding: "10px 0px",
    textAlign: "start",
    "& h5": {
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "5px",
      color: "#000",
    },
    "& p": {
      fontSize: "12px",
      color: "#707070",
    },
  },
  cardActions: {
    padding: "0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  subButton: {
    background: "linear-gradient(90deg, #6345ED 30%, #DC39FC 90%)",
    color: "#fff",
    borderRadius: "5px",
    padding: "5px 20px",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "#DC39FC",
    },
  },
  avatar: {
    width: "35px",
    height: "35px",
    marginRight: "5px",
  },
  iconSection: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    marginRight: "5px",
  },
}));

export default function BundleCard({ data }) {
  const navigate = useNavigate();
  const classes = useStyles();
  const auth = useContext(UserContext);

  const [isLike, setisLike] = useState(false);
  const [nbLike, setnbLike] = useState(0);
  const [nbSubscribed, setnbSubscribed] = useState(0);

  let BundleData = data;
  let userId =
    typeof BundleData.userId === "object" &&
    !Array.isArray(BundleData.userId) &&
    BundleData.userId !== null
      ? BundleData.userId._id
      : BundleData.userId;
  let userName = BundleData.userId.userName || BundleData.userDetail.userName;
  let userSpeciality =
    BundleData.userId?.speciality || BundleData.userDetail?.speciality;
  let profilePic =
    BundleData?.userId?.profilePic ||
    BundleData?.userDetail?.profilePic ||
    `https://avatars.dicebear.com/api/miniavs/${userName}.svg`;

  const likeDislikeNfthandler = async (id) => {
    if (auth.userData?._id) {
      try {
        const res = await axios.get(Apiconfigs.likeDislikeNft + id, {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        });
        if (res.data.statusCode === 200) {
          setisLike((liked) => !liked);
          setnbLike((nb) => (isLike ? nb - 1 : nb + 1));
        } else {
          setisLike(false);
          toast.error(res.data.responseMessage);
        }
      } catch (error) {
        console.log("ERROR", error);
      }
    } else {
      toast.error("Please login");
    }
  };

  useEffect(() => {
    setnbLike(BundleData.likesUsers.length);
    setnbSubscribed(BundleData.subscribers.length);
    if (auth.userData?._id) {
      setisLike(BundleData.likesUsers?.includes(auth.userData._id));
    }
  }, []);

  return (
    <Slide direction="left" duration={2000}> {/* العناصر تأتي من الأسفل إلى الأعلى */}
      <Card className={classes.root}>
        
        {/* <Box className={classes.countdown}>18 : 18 : 18 : 18</Box> */}

        <Box
          className={classes.media}
          onClick={() => navigate("/bundles-details?" + BundleData?._id)}
          style={{ height: "250px", cursor: "pointer" }}
        >
          <img
            className={classes.mediaImg}
            src={BundleData.mediaUrl}
            alt={BundleData.bundleName}
          />
        </Box>

        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{BundleData.bundleName}</Typography>
          <Box display="flex" alignItems="center" justifyContent="start">
            <Avatar
              alt={userName}
              src={profilePic}
              className={classes.avatar}
              onClick={() => {
                navigate("/user-profile/" + userName);
              }}
            />
            <Box>
              <Typography variant="body2">{userName}</Typography>
              <Typography variant="body2">{userSpeciality}</Typography>
            </Box>
          </Box>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <Button className={classes.subButton}>Details</Button>
          <Box className={classes.iconSection}>
            <Box className={classes.iconButton}>
              <IconButton
                aria-label="add to favorites"
                onClick={() => likeDislikeNfthandler(BundleData._id)}
              >
                <FavoriteIcon
                  style={isLike ? { color: "red" } : { color: "#ffa0a0" }}
                />
              </IconButton>
              <span>{nbLike}</span>
            </Box>
            <Box className={classes.iconButton}>
              <IconButton aria-label="chat">
                <ChatBubbleOutlineIcon style={{ color: "#000" }} />
              </IconButton>
              <span>{nbSubscribed}</span>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Slide>
  );
}
