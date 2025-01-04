import React, { useContext, useState, useEffect } from "react";
import {
  Typography,
  Box,
  Tooltip,
  Badge,
  IconButton,
  Button,
  Card,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import Apiconfigs from "src/Apiconfig/Apiconfigs";
import { UserContext } from "src/context/User";
import { toast } from "react-toastify";
import { BsChat } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

const useStyles = makeStyles((theme) => ({
  cards: {
    padding: "10px",
    borderRadius: "10px",
    width: "260px",
    minHeight: "400px",
    margin: "12px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    border: "2px solid",
    background: "#E0E5FF",
    transition: "all 0.3s ease-in-out",  // إضافة الترازيشن
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // ظل افتراضي للكارد
    "&:hover": {
      border: "2px solid #c600a4",  // تغيير لون الحدود عند التمرير
      boxShadow: "0 8px 16px #95007c40",  // زيادة الظل عند التمرير
      transform: "translateY(-5px)",  // رفع الكارد قليلاً عند التمرير
    },
  },
  cardContent: {
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "start",
    position: "relative",
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",  
    "& h6": {
      marginBottom: "2px !important",
      fontSize: "15px !important",
      color: "#000",  
      fontWeight: "600",
    },
    "& p": {
      fontSize: "12px",
      color: "#000",  
    },
  },
  boxActions: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",  
    padding: "4px",
    marginTop: "4px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    width: "100%",
    borderRadius: "4px",
    alignSelf: "flex-end",
  },
  subButton: {
    "& button": {
      background: "linear-gradient(45deg, #6345ED 30%, #DC39FC 90%)", 
      color: "#fff",
      borderRadius: "5px",
      padding: "5px 10px",
      fontSize: "12px",
    },
  },
  userImg: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  countdown: {
    background: "linear-gradient(45deg, #6345ED 30%, #DC39FC 90%)",  
    color: "#fff",  
    borderRadius: "10px",
    padding: "5px 10px",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

export default function UserDetailsCard(data) {
  const userCardData = data.data;
  const navigate = useNavigate();
  const classes = useStyles();
  const auth = useContext(UserContext);

  const [isLike, setisLike] = useState(false);
  const [nbLike, setnbLike] = useState(0);
  const [isSubscribed, setisSubscribed] = useState(false);
  const [nbSubscribed, setnbSubscribed] = useState(0);

  const subscribeToUserHandler = async () => {
    if (auth.userData?._id) {
      await axios({
        method: "GET",
        url: Apiconfigs.followProfile + userCardData._id,
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
        .then(async (res) => {
          if (res.data.statusCode === 200) {
            setisSubscribed(res.data.result.subscribed == "yes");
            setnbSubscribed(res.data.result.nb);
          } else {
            toast.error(res.data.result);
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data?.responseMessage);
        });
    } else {
      toast.error("Please Login");
    }
  };

  const likeDislikeUserHandler = async (id) => {
    if (auth.userData?._id) {
      try {
        const res = await axios.get(Apiconfigs.likeDislikeUser + id, {
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
        console.log(error);
      }
    } else {
      toast.error("Please Login");
    }
  };

  useEffect(() => {
    setnbLike(userCardData.likesUsers.length);
    setnbSubscribed(userCardData.followers.length);
    if (auth.userData?._id) {
      setisLike(userCardData.likesUsers?.includes(auth.userData._id));
      setisSubscribed(userCardData.followers?.includes(auth.userData._id));
    }
  }, []);

  return (
    <Slide direction="left" duration={2000}>
      <Card className={classes.cards}>
        {/* <Box className={classes.countdown}>18 : 18 : 18 : 18</Box> */}
        <Box
          style={{ height: "240px", cursor: "pointer" }}
          onClick={() => {
            navigate("/user-profile/" + userCardData.userName);
          }}
        >
          <img className={classes.userImg} src={userCardData.profilePic} />
        </Box>

        <Box>
          <Box className={classes.cardContent}>
            <Typography variant="h6">
              {userCardData && userCardData.name
                ? userCardData.name
                : userCardData.userName}
            </Typography>

            <Typography>{userCardData.speciality}</Typography>
          </Box>

          <Box className={classes.boxActions}>
            <Box className={classes.subButton}>
              <Button onClick={subscribeToUserHandler}>
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
              <span
                style={{
                  color: "#000",  
                  fontWeight: "600",
                  fontSize: "12px",
                  padding: "2px",
                }}
              >
                {nbSubscribed > 0 ? nbSubscribed + " subs" : "0 sub"}
              </span>
            </Box>

            <Box>
              <Tooltip title="Chat" placement="bottom">
                <IconButton onClick={() => navigate(`/chat/t${userCardData._id}`)}>
                  <Badge
                    badgeContent={Object.keys(auth.unreadChats).length}
                    overlap="rectangular"
                    color="primary"
                  >
                    <BsChat style={{ color: "#000" }} /> 
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "12px", marginRight: "5px", color: "#000" }}>
                {nbLike}
              </span>
              <FaHeart
                style={isLike ? { color: "red" } : { color: "#ffa0a0" }}
                onClick={() => likeDislikeUserHandler(userCardData._id)}
              />
            </Box>
          </Box>
        </Box>
      </Card>
    </Slide>
  );
}
