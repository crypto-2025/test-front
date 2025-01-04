import React from 'react'
import { makeStyles, Card } from "@material-ui/core";
import "./style.css";
import { useTranslation } from 'react-i18next';
export default function MetaverseCard({ data, key }) {
    const useStyles = makeStyles((theme) => ({
        main: {
            backgroundColor: '#D9AFD9',
            background: "linear-gradient(45deg, #a692ff, #e873ff);",
            padding: "15px 15px 30px 15px",
            borderRadius: "10px",
            width: "300px",
            height: "50vh",
            margin: "12px",
            overflow: "hidden",
            

        },
        imgParent: {
            width: "100%",
            height: "77%!important",
            cursor: "pointer",
            overflow: "hidden",
            "&:hover": {
                "& img": {
                    transform: "scale(1.03 ,1.03 )"
                },
            },
            "& img": {
                overflow: "hidden",
                transition: ".2s all linear",
                // borderTopRightRadius: "10px",
                // borderTopLeftRadius: "10px",
                overflow: "hiiden",
                borderTopLeftRadius:'10px',
                borderTopRightRadius:'10px',
                width: "100%",
                height: "100%",


            },
        },
        nameSpec: {
            width: "100%",
            padding: "15px",
            background: "#d6ccff",
            "& div": {
                width: "100%",
                textAlign: "center",
                fontSize: "16px",
            },
        },
    }))
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <div>
            <Card className={classes.main}>
                <div className={classes.imgParent}>
                    <img src={data} />
                </div>
                <div className={classes.nameSpec}>
                    <div>{t('game')} 01</div>
                    <div>{t('version')}: 3.2</div>
                </div>
            </Card>
        </div >
    )
}
