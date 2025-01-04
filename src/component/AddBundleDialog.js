import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Grid,
  
  Input,
  InputAdornment,
  makeStyles,
  Select,
  MenuItem,
  Button,
  Box,
  
} from "@material-ui/core";
import { useController, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Apiconfigs from "../Apiconfig/Apiconfigs";
import { tokensDetails } from "../constants/index";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AddBundleDialog = ({ show, handleClose, bundleData }) => {
  const [isEdit, setIsEdit] = useState(!!bundleData);
  const classes = useStyles();
  const [mediaUrl, setMediaUrl] = useState(isEdit ? bundleData.mediaUrl : "");
  const [uploadCounter, setUploadCounter] = useState(0);
  const {t} = useTranslation();
  // Yup inputs validation
  const schema = yup.object({
    file: yup.mixed().required("File is required"),
    bundleTitle: yup.string().required("Enter title please"),
    bundleName: yup.string().required("Enter name please"),
    details: yup.string().required("Enter description please"),
    duration: yup.number().min(1, "Select a ending date"),
    donationAmount: yup
      .number()
      .min(1, "Enter donation amount please")
      .positive("the price should be positive number"),
    coinName: yup.string().required("Enter coin name"),
  });

  // React hook form for handle form data
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, dirtyFields },
    register,
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    defaultValues: {
      file: null,
      bundleTitle: isEdit ? bundleData.bundleTitle : "",
      bundleName: isEdit ? bundleData.bundleName : "",
      donationAmount: isEdit ? bundleData.donationAmount : 0,
      duration: isEdit ? +bundleData.duration.split(" ")[0] : 0,
      details: isEdit ? bundleData.details : "",
      coinName: isEdit ? bundleData.coinName : "MAS",
    },
  });

  useEffect(() => {
    setMediaUrl(isEdit ? bundleData.mediaUrl : "");
  }, [show]);

  /* Main Return */

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={show}
      onClose={uploadCounter === 0 ? handleClose : null}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle style={{ textAlign: "center", background: "#c99bfbb0" }}>
        <Typography
          style={{ color: "#640D5F", fontWeight: "bold", fontSize: "2rem" }}>
          {isEdit ? "Edit Bundle" : "Create a bundle"}
        </Typography>
      </DialogTitle>
      <DialogContent style={{ padding: 40 ,    background: "linear-gradient(0deg, #fff, #c99bfbb0)"}}>
        <Grid container spacing={5} st>
          {InputList()}
          <Grid item xs={12} sm={5}>
            {MediaInput()}
            {MediaBox()}
          </Grid>
          {FormButtons()}
        </Grid>
      </DialogContent>
    </Dialog>
  );

  /* Main Return */

  function MediaBox() {
    const { name } = watch("file") ? watch("file") : { type: "", name: "" };

    const isVideo = watch("file")
      ? watch("file")?.type?.split("/")[0] !== "image"
      : isEdit
      ? isVideoType(mediaUrl)
      : false;

    const onRemove = () => {
      setMediaUrl("");
      setValue("file", null);
    };

    return (
      <Box
        style={{ display: mediaUrl !== "" ? "block" : "none" }}
        className={classes.mediaBox}
      >
        {isVideo ? (
          <div
            style={{ borderRadius: "10px 10px 0px 0px", overflow: "hidden" }}
          >
            <ReactPlayer
              url={mediaUrl}
              playing
              controls
              width={"100%"}
              height={"100%"}
            />
          </div>
        ) : (
          <img
            src={mediaUrl}
            width="100%"
            height={"50%"}
            alt={"bundle image"}
            style={{ borderRadius: "10px 10px 0px 0px" }}
          />
        )}
        <div className={classes.mediaBoxInfo}>
          <div>
            <p
              style={{
                color: "#777",
                fontWeight: "600",
                margin: 0,
                fontSize: 14,
              }}
            >
              {t('Filename')}
            </p>
            <p style={{ marginTop: 5, fontWeight: "500" }}>
              {name ? name : ""}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DeleteIcon
              fontSize={"medium"}
              style={{ color: "red", cursor: "pointer" }}
              onClick={onRemove}
            />
          </div>
        </div>
        {uploadCounter > 0 && (
          <div className={classes.uploadCounter}>
            <CloudUploadIcon
              fontSize={"large"}
              style={{ color: "rgb(192, 72, 72)" }}
              className={classes.uploadCounterIcon}
            />
            <p>{t('Uploading')} {uploadCounter}%</p>
          </div>
        )}
      </Box>
    );
  }

  function FormButtons() {
    const onSubmit = handleSubmit(
      (data) => (isEdit ? editBundle(data) : createBundle(data)),
      () => console.log(errors)
    );

    return (
      <Grid xs={12} className={classes.buttonContainerStyle}>
        <Button
          variant="contained"
          onClick={handleClose}
          color="primary"
          size="large"
          className={classes.btnOutPro}
        >
          {t('Cancel')}
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          size="large"
          className={classes.submitButton}
          disabled={isEdit && !dirtyFields.file}
        >
          {isEdit ? "Edit" : "Create"}
        </Button>
      </Grid>
    );
  }

  function MediaInput() {
    const {
      field,
      fieldState: { error },
    } = useController({
      name: "file",
      control,
    });

    const { onChange, ref, name } = field;

    return (
      <label htmlFor="raised-button-file">
        <input
          accept="image/*,video/*"
          style={{ display: "none" }}
          className={classes.input}
          id="contained-button-file-add-bun"
          multiple
          onChange={(e) => {
            onChange(e.target.files[0]);
            setMediaUrl(URL.createObjectURL(e.target.files[0]));
          }}
          ref={ref}
          name={name}
          type="file"
        />
        <label htmlFor="contained-button-file-add-bun">
          <Button
            variant="outined"
            color="primary"
            component="span"
            className={classes.uploadBox}
            style={{
              borderColor: error ? "red" : "#ddd",
              display: mediaUrl === "" ? "flex" : "none",
            }}
          >
            <div className={classes.uploadIcon}>
              <CloudUploadIcon />
            </div>
            <div style={{ marginTop: 10, textAlign: "center" }}>
              <p style={{ margin: "5px 0px 0px 0px", fontSize: 18 }}>
                {t('Select Image/Video')}
              </p>
              <p style={{ margin: "5px 0px 0px 0px" }}>Drag And Drop Files</p>
              <p style={{ margin: "5px 0px 0px 0px" }}>
                {t('Accept All Video/Image Formats')}
              </p>
              <p style={{ margin: "5px 0px 0px 0px" }}>
                {t('Max File Size: 1024 MP')}
              </p>
              <p style={{ margin: "5px 0px 0px 0px" }}>
               {t('Min Width Size: 300px')}
              </p>
              <p style={{ margin: "5px 0px 0px 0px" }}>
                {t('Min Height Size: 160px')}
              </p>
            </div>
          </Button>
        </label>
      </label>
    );
  }

  function InputList() {
    return (
      <Grid item xs={12} sm={7}>
        <>
          <Grid
            sm={12}
            className={classes.inputContainer}
            style={{ borderColor: errors["bundleTitle"] ? "red" : "#ddd" }}
          >
            <label>{t('Bundle Title')}</label>
            <Input
              {...register("bundleTitle")}
              className={classes.input}
              placeholder={"Enter Bundle Title"}
              disabled={isEdit}
            />
          </Grid>
          <p style={{ margin: "-5px 0px 15px 5px", color: "red" }}>
            {errors["bundleTitle"]?.message}
          </p>
        </>
        <>
          <Grid
            sm={12}
            className={classes.inputContainer}
            style={{ borderColor: errors["bundleName"] ? "red" : "#ddd" }}
          >
            <label>{t('Bundle Name')}</label>
            <Input
              {...register("bundleName")}
              className={classes.input}
              placeholder={"Enter Bundle Name"}
              disabled={isEdit}
            />
          </Grid>
          <p style={{ margin: "-5px 0px 15px 5px", color: "red" }}>
            {errors["bundleName"]?.message}
          </p>
        </>
        <>
          <Grid
            sm={12}
            className={classes.inputContainer}
            style={{ borderColor: errors["donationAmount"] ? "red" : "#ddd" }}
          >
            <label>{t('Amount')}</label>
            <Input
              {...register("donationAmount")}
              className={classes.input}
              placeholder={"Enter Donation Amount"}
              disabled={isEdit}
              type={"number"}
              endAdornment={CoinSelector()}
            />
          </Grid>
          <p style={{ margin: "-5px 0px 15px 5px", color: "red" }}>
            {typeof watch("donationAmount") === "number" &&
              errors["donationAmount"]?.message}
          </p>
        </>
        <>
          <Grid
            sm={12}
            className={classes.inputContainer}
            style={{ borderColor: errors["duration"] ? "red" : "#ddd" }}
          >
            <label>{('Duration')}</label>
            <Input
              {...register("duration")}
              className={classes.input}
              placeholder={"Enter Duration"}
              disabled={isEdit}
              type={"number"}
              endAdornment={
                <p style={{ margin: "0px 10px", fontSize: 14 }}>days</p>
              }
            />
          </Grid>
          <p style={{ margin: "-5px 0px 15px 5px", color: "red" }}>
            {typeof watch("duration") === "number" &&
              errors["duration"]?.message}
          </p>
        </>
        <>
          <Grid
            sm={12}
            className={classes.inputContainer}
            style={{ borderColor: errors["details"] ? "red" : "#ddd" }}
          >
            <label>{('Details')}</label>
            <Input
              {...register("details")}
              className={classes.input}
              placeholder={"Enter a details about your bundle"}
              disabled={isEdit}
              multiline={true}
            />
          </Grid>
          <p style={{ margin: "-5px 0px 15px 5px", color: "red" }}>
            {errors["details"]?.message}
          </p>
        </>
      </Grid>
    );
  }

  function CoinSelector() {
    return (
      <InputAdornment position="end">
        <Select
          className={classes.select}
          value={watch("coinName")}
          onChange={(event) => setValue("coinName", event.target.value)}
          disabled={isEdit}
        >
          {tokensDetails.map((item, index) => (
            <MenuItem
              key={index}
              value={item.name}
              style={{
                padding: "10px 0px",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <p style={{ margin: 0, width: 50 }}>{item.name}</p>
              <img src={item.img} style={{ width: 25 }} />
            </MenuItem>
          ))}
        </Select>
      </InputAdornment>
    );
  }

  async function createBundle(data) {
    try {
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("tokenName", data.bundleName);
      formData.append("bundleTitle", data.bundleTitle);
      formData.append(
        "duration",
        `${data.duration} ${data.duration > 1 ? "days" : "day"}`
      );
      formData.append("bundleName", data.bundleName);
      formData.append("details", data.details);
      formData.append("donationAmount", data.donationAmount);
      formData.append("coinName", data.coinName);

      const res = await axios({
        method: "POST",
        url: Apiconfigs.addNft,
        data: formData,
        headers: {
          token: sessionStorage.getItem("token"),
        },
        onUploadProgress: (progressEvent) => onUploadProgress(progressEvent),
      });

      if (res.data.statusCode === 200) {
        toast.success("Bundle created");
        handleClose();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function editBundle(data) {
    const formData = new FormData();
    formData.append("_id", bundleData._id);
    formData.append("mediaUrl", data.file);
    try {
      const res = await axios({
        method: "PUT",
        url: Apiconfigs.editNft,
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          token: sessionStorage.getItem("token"),
        },
        onUploadProgress: (progressEvent) => onUploadProgress(progressEvent),
      });
      if (res.data.statusCode === 200) {
        toast.success("Bundle edited successfully");
        handleClose();
      }
    } catch (e) {
      console.log(e);
    }
  }

  function onUploadProgress(progressEvent) {
    const percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setUploadCounter(percentCompleted);
  }

  function isVideoType(url) {
   //return url.includes("video");
  }
};

export default AddBundleDialog;

const useStyles = makeStyles(() => ({
  inputContainer: {
    borderWidth: 2,
    borderColor: "#DC39FC",
    borderStyle: "solid",
    borderRadius: 5,
    background: "linear-gradient(0deg, #fff, #c99bfbb0)",
    padding: "10px",
    marginBottom: 10,
    transition: "border-color 0.3s ease-in",
    "&:focus-within": {
      borderColor: "rgb(192, 72, 72)",
      "& label": {
        color: "rgb(192, 72, 72)",
        transition: "color 0.3s ease-in",
      },
    },
    "&>label": {
      fontWeight: "500",
      color: "black",
      fontSize: 14,
    },
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
  input: {
    width: "100%",
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
    "&>input": {
      width: "100%",
    },
  },

  select: {
    "&::before": {
      content: "none",
    },
    "&::after": {
      content: "none",
    },
    "& div:focus": {
      background: "transparent",
    },
    "&>div": {
      display: "flex",
      alignItems: "center",
    },
  },

  uploadBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    height: "calc(100% - 10px)",
    border: "2px #ddd solid",
    "&>.MuiButton-label": {
      flexDirection: "column",
    },
  },

  uploadIcon: {
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px #ddd solid",
    borderRadius: "50%",
  },

  buttonContainerStyle: {
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  submitButton: {
    color:"white !important",
    borderRadius: "10px",
    background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
    // background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
    transition: "background  .6s",
    "&:hover": {
      //   background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))!important", 
      background: "linear-gradient(to bottom right,  rgb(199, 113, 238), #640D5F)",
    },
  },

  mediaBox: {
    
    width: "100%",
    marginBottom: 0,
  },

  mediaBoxInfo: {
    background: "rgba(0,0,0,0.1)",
    marginTop: -6,
    padding: 20,
    borderRadius: "0px 0px 10px 10px",
    height: "50%",
  },

  uploadCounter: {
    position: "relative",
    marginTop: 30,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  uploadCounterIcon: {
    position: "absolute",
    marginBottom: 20,
    animation: "$upAndDown 2s ease-in-out infinite",
  },

  "@keyframes upAndDown": {
    "0%": {
      top: 0,
    },
    "50%": {
      top: -15,
    },
    "100%": {
      top: 0,
    },
  },
}));
