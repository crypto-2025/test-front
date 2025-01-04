import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { isValidPhoneNumber } from "react-phone-number-input";
import { MuiTelInput } from 'mui-tel-input'
import IconButton from "@material-ui/core/IconButton";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import {isValidPassword,isValidEmail} from "src/CommanFunction/Validation";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { UserContext } from "src/context/User";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Apiconfigs from "src/Apiconfig/Apiconfigs.js";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import {VerifyOtp} from "src/component/Modals/VerifyOtp"
import {isMobile} from 'react-device-detect';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({

  root:{
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loginBox: {
    background:"#e9e4fc",
    width: isMobile ? '100%' : '50vw',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#e5e5f7",
  },

  splash: {
    width: isMobile ? '100%' : '50vw',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  labelText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#000",
  },
  inputText: {
    opacity:".8",
    width: "100%",
    "& .MuiOutlinedInput-root":{
      border: "solid 1px #4441",
      borderRadius: "20px",
      backgroundColor: "#fafafa",
    },
    "& .MuiOutlinedInput-input": {
      
      padding: '10px',
      fontSize: "14px",
      fontWeight: "500",
      color: "#000",
    }
  },
  paper: {
    display: "flex",
    alignItems: "center",
    "& a": {
      fontWeight: "700",
      textDecoration: "underline",
      fontSize: "13px",
      color: "#000",
      marginLeft: "4px"
    },
    "& label": {
      paddingTop: "0 !important",
      color: "#141518",
      fontSize: "13px",
    },
  },
  btnPro:{
    borderRadius:'50px !omportant',
    color:"white",
    borderRadius: "10px",
    background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))",
    transition: "background  .6s",
    "&:hover": {
        background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))!important", 
    },
  },
  btnOutPro: {
    border:"#6345ED 1px solid", 
    color:"#6345ED",
    "&:hover": {
        background: "linear-gradient(to bottom right, #640D5F, rgb(199, 113, 238))!important", 
      color:"white",
      border:"none"
    },
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const [splash, setSplash] = useState("");
  const {t} = useTranslation();

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");
  const [uservalid, setuservalid] = useState(true);
  const [emailvalid, setemailvalid] = useState(true);
  const [phonevalid, setphonevalid] = useState(true);
  const [passvalid, setpassvalid] = useState(true);

  const [show, setshow] = useState(false);
  const [verifyOTPOpen, setVerifyOTPOpen] = useState(false);
  const [loader, setloader] = useState(false);
  const [termsPopUp, setTermsPopUp] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [state, setState] = useState({
    all: false,
    termsCond: false,
    privacyPolicy: true,
    riskStatment: false,
    kycProgram: true,
  });

  const [emailVerificationSent, setEmailVerificationSent] = useState(false);
  const [smsVerificationSent, setSmsVerificationSent] = useState(false);

  const validateAll = () => {
    setuservalid(username.length > 2);
    setemailvalid(isValidEmail(email));
    setphonevalid(phone =="" || isValidPhoneNumber(phone));
    setpassvalid(isValidPassword(pass));
    return (username.length > 2) && isValidEmail(email) && (phone =="" || isValidPhoneNumber(phone)) && isValidPassword(pass);
  }

  const sendOtpRegister = async () => {
    // Check if user is already logged in and verification was sent
    if (user.userLoggedIn && (emailVerificationSent || smsVerificationSent)) {
        setTermsPopUp(false);
        setVerifyOTPOpen(true);
        return;
    }

    // Validate all required fields before sending the request
    if (!validateAll()) {
        setTermsPopUp(false);
        setVerifyOTPOpen(false);
        return;
    }

    // Show loader while the request is being processed
    setloader(true);

    try {
        const res = await axios.post(Apiconfigs.sendOtpRegister, {
            email: email,
        });

        if (res.data.statusCode === 200) {
            setEmailVerificationSent(res.data.result.email_verification_sent);
            setSmsVerificationSent(res.data.result.sms_verification_sent);
            setVerifyOTPOpen(true);
            setTermsPopUp(false);
        } else {
            // Handle different statuses here, if needed
            console.error("Request completed, but status code is not 200", res.data);
        }
    } catch (e) {
        console.error("Error in sendOtpRegister", e);
        // Display error notification to the user, if you have such functionality
    }

    // Hide loader after the request is completed
    setloader(false);
};


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: !state[event.target.name] });
  };
  const { termsCond, privacyPolicy, riskStatment, kycProgram, all } = state;

  useEffect(()=>{
    const url = 'https://api.unsplash.com/photos/random?client_id=YC94t2S3Nge47lJvxYFndgORX0JUr4Ym7BfrSqfHUzU'
    const fetchSplash = async () => axios.get(url).then(res => {
      console.log(res)
      setSplash(res.data.urls.regular)
    });
    fetchSplash();

  },[])

  return (
    <Box className={classes.root}>
  
      <Box className={classes.loginBox}>
  
        <Container maxWidth="sm" style={{backgroundColor: "#e5e5f7f8", padding: '20px'}}>
          <Typography variant="h2" align='center' style={{ color:"#6345ED", marginBottom:"2rem" }}>
            {t('create_account')}
          </Typography>
  
          <Box>
            <label className={classes.labelText}>{t('username')}</label>
            <TextField
              variant="filled"
              required
              value={username}
              error={!uservalid}
              helperText={!uservalid && t('please_enter_username')}
              className={classes.inputText}
              onChange={(e) => {
                setusername(e.target.value);
                setuservalid(e.target.value.length > 2);
              }}
              onBlur={(e) => setuservalid(e.target.value.length > 2)}
            />
          </Box>
  
          <Box>
            <label className={classes.labelText}>{t('email')}</label>
            <TextField
              variant="filled"
              required
              error={!emailvalid}
              helperText={!emailvalid && t('please_enter_valid_email')}
              value={email}
              className={classes.inputText}
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
                setemailvalid(isValidEmail(e.target.value));
              }}
              onBlur={(e) => setemailvalid(isValidEmail(e.target.value))}
            />
          </Box>
  
          <Box>
            <label className={classes.labelText}>{t('phone_number')}</label>
            <MuiTelInput
              defaultCountry="US"
              disableFormatting
              required
              error={!phonevalid}
              helperText={!phonevalid && t('please_enter_valid_phone_number')}
              value={phone}
              className={classes.inputText}
              variant="filled"
              type="tel"
              onChange={(e) => {
                setphone(e);
                setphonevalid(phone === "" || isValidPhoneNumber(e));
              }}
              onBlur={() => setphonevalid(phone === "" || isValidPhoneNumber(phone))}
            />
          </Box>
  
          <Box>
            <label className={classes.labelText}>{t('password')}</label>
            <TextField
              variant="filled"
              type={show ? "text" : "password"}
              error={!passvalid}
              helperText={
                !passvalid && t('password_validation')
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setshow(!show)}
                    >
                      {show ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setpass(e.target.value);
                setpassvalid(isValidPassword(e.target.value));
              }}
              onBlur={() => setpassvalid(isValidPassword(pass))}
              className={classes.inputText}
            />
          </Box>
  
          <Box>
            <label className={classes.labelText}>{t('referral_code')}</label>
            <TextField
              variant="filled"
              placeholder={t('referral_code_optional')}
              className={classes.inputText}
              name="Referral"
              onChange={(e) => setReferralCode(e.target.value)}
            />
          </Box>
  
          <Box display='flex' justifyContent="space-around" mt={5}>
            <Box align="center">
              <Typography variant="body2">
                {t('already_have_account')}
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => navigate("/login")}
                className={classes.btnOutPro}
              >
                {t('sign_in_here')}
              </Button>
            </Box>
            <Box align="center">
              <Typography variant="body2">
                {t('continue')}
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => {
                  if (validateAll()) setTermsPopUp(true);
                }}
                disabled={loader || !uservalid || !emailvalid || !phonevalid || !passvalid}
                className={classes.btnPro}
              >
                {t('sign_up')} {loader && <ButtonCircularProgress />}
              </Button>
            </Box>
          </Box>
  
          <Dialog
            open={termsPopUp}
            keepMounted
            maxWidth="sm"
            onClose={() => setTermsPopUp(false)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Box>
                  <Typography
                    variant="h4"
                    style={{ color: "#792034", marginBottom: "10px", textAlign: 'center' }}
                  >
                    {t('last_step')}
                  </Typography>
                  <Typography
                    variant="body"
                    component="p"
                    align="center"
                    style={{ fontSize: "14px" }}
                  >
                    {t('agree_terms_conditions')}
                  </Typography>
                </Box>
  
                <Box className={classes.paper} mt={4}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={termsCond}
                        onChange={handleChange}
                        name="termsCond"
                      />
                    }
                  />
                  <label>
                    {t('agree_to_terms_conditions')}
                    <Link target="_blank" to="/terms-conditions">
                      {t('terms_conditions')}
                    </Link>
                    .
                  </label>
                </Box>
                <Box className={classes.paper}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={privacyPolicy}
                        onChange={handleChange}
                        name="privacyPolicy"
                      />
                    }
                  />
                  <label>
                    {t('agree_to_privacy_policy')}
                    <Link target="_blank" to="/privacy-policy">
                      {t('privacy_policy')}
                    </Link>
                    .
                  </label>
                </Box>
                <Box className={classes.paper}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={riskStatment}
                        onChange={handleChange}
                        name="riskStatment"
                      />
                    }
                  />
                  <label>
                    {t('agree_to_risk_statement')}
                    <Link target="_blank" to="/risk-statment">
                      {t('risk_statement')}
                    </Link>
                    .
                  </label>
                </Box>
                <Box className={classes.paper}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={kycProgram}
                        onChange={handleChange}
                        name="kycProgram"
                      />
                    }
                  />
                  <label>
                    {t('agree_to_kyc_program')}
                    <Link target="_blank" to="/kyc-program">
                      {t('kyc_program')}
                    </Link>
                    .
                  </label>
                </Box>
                <Box className={classes.paper} mt={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={all}
                        onChange={() => {
                          if (state.all) {
                            setState({
                              ...state,
                              all: false,
                              termsCond: false,
                              privacyPolicy: false,
                              riskStatment: false,
                              kycProgram: false,
                            });
                          } else {
                            setState({
                              ...state,
                              all: true,
                              termsCond: true,
                              privacyPolicy: true,
                              riskStatment: true,
                              kycProgram: true,
                            });
                          }
                        }}
                        name="all"
                      />
                    }
                  />
                  <label>{t('agree_to_all')}</label>
                </Box>
  
                <Box mt={2} mb={5} pb={3} className={classes.btnBox}>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    disabled={
                      loader ||
                      !state.termsCond ||
                      !state.privacyPolicy ||
                      !state.riskStatment ||
                      !state.kycProgram
                    }
                    onClick={() => {
                      if (
                        state.termsCond &&
                        state.privacyPolicy &&
                        state.riskStatment &&
                        state.kycProgram
                      ) {
                        sendOtpRegister();
                        setVerifyOTPOpen(true);
                        setTermsPopUp(false);
                      }
                    }}
                  >
                    {t('continue')}
                  </Button>
                </Box>
              </DialogContentText>
            </DialogContent>
          </Dialog>
  
          <VerifyOtp
            keepMounted
            open={verifyOTPOpen}
            handleClose={() => setVerifyOTPOpen(false)}
            channels={['email']}
            context={'register'}
            emailVerificationSent={emailVerificationSent}
            smsVerificationSent={smsVerificationSent}
            successCallback={async () => {
              setVerifyOTPOpen(false);
              await user.updateUserData();
              navigate('/profilesettings');
            }}
            signUpData={{username: username, password: pass, email: email, phone: phone, referralCode: referralCode}}
          />
        </Container>
  
      </Box>
  
      <Box className={classes.splash}
        style={{
          padding:"20px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          backgroundSize: 'cover',
        }}
      >
      </Box>
    </Box>
  );
  
}
