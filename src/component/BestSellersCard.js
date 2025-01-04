import React from "react";
import {
Typography,
Box,
Button,
Card,
makeStyles,
} from "@material-ui/core";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme) => ({
cards: {
    padding: "10px",
    borderRadius: "10px",
    width: "90%",
    margin: "12px auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    border: "1px solid #ddd",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
    border: "2px solid #c600a4",  // تغيير لون الحدود عند التمرير
    boxShadow: "0 8px 16px #95007c40",  // زيادة الظل عند التمرير
    transform: "translateY(-5px)",
    },
},
cardContent: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    "& h6": {
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333", 
    },
    "& p": {
    fontSize: "12px",
    color: "#777", 
    marginBottom: "10px",
    },
},
followButton: {
    background: "linear-gradient(45deg, #6345ED 30%, #DC39FC 90%)",
    color: "#fff",
    borderRadius: "20px",
    padding: "5px 15px",
    fontSize: "12px",
    marginTop: "10px",
},
userImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%", 
    marginBottom: "15px",
    border: "2px solid #ddd",
},
}));

export default function BestSellersCard({ user }) {
const classes = useStyles();
const {t} = useTranslation();
// تعيين قيم افتراضية في حال عدم وجود بيانات user
const defaultUser = {
    name: "Unknown User",
    profilePic: "images/icon.png", // يمكنك إضافة صورة افتراضية هنا
    followersCount: "0",
};

const userData = user || defaultUser;

return (
    <Fade duration={2500}>
    <Card className={classes.cards}>
        {/* صورة المستخدم */}
        <Box>
            <img
            className={classes.userImg}
            src={userData.profilePic}
            alt={userData.name}
            />
        </Box>

        {/* محتوى الكارد */}
        <Box className={classes.cardContent}>
            <Typography variant="h6">{userData.name}</Typography>
            <Typography>{userData.followersCount} MAS</Typography>
        </Box>

        {/* زر المتابعة */}
        <Button className={classes.followButton}>{t('Follow')}</Button>
    </Card>
    </Fade>
);
}
