import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  makeStyles,
  Typography,
  FormHelperText
} from "@material-ui/core";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import { isValidEmail, isValidPassword } from "src/CommanFunction/Validation";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Apiconfigs from "src/Apiconfig/Apiconfigs";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "src/context/User";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CloseIcon from '@material-ui/icons/Close';
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { toast } from "react-toastify";
import { isMobile } from 'react-device-detect';
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

  btnflex: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  labelText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#000",
  },
  inputText: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      border: "solid 1px #4441",
      borderRadius: "10px",
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
      color: "#000",
    },
    "& label": {
      paddingTop: "0 !important",
      color: "#141518",
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

export default function Login() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const [splash, setSplash] = useState("");


  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [emailvalid, setemailvalid] = useState(true);
  const [passvalid, setpassvalid] = useState(true);

  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const [showpass, setshowpass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [resetloader, setresetloader] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [code, setcode] = useState("");
  const [resendTimer, setresendTimer] = useState();
  const {t} = useTranslation();

  useEffect(() => {
    if (user.userLoggedIn) {
      navigate("/");
    }
  }, [user.userLoggedIn]);

  useEffect(() => {
    let emailtimeout;
    if (resendTimer && resendTimer >= 0) {
      emailtimeout = setTimeout(() => setresendTimer(resendTimer - 1), 1000);
    } else {
      setresendTimer();
      clearTimeout(emailtimeout);
    }
  });

  useEffect(() => {
    setemailvalid(true);
    setpassvalid(true);
  }, []);

  const forgotPasswordHandler = () => {
    setresetloader(true);
    setemailvalid(isValidEmail(email));
    if (emailvalid) {
      axios({
        method: "POST",
        url: Apiconfigs.forgotPassword,
        data: {
          email: email
        },
      })
        .then(async (res) => {
          if (res.data.statusCode === 200) {
            toast.success("Email send successfuly!");
            setresetloader(false);
            setVerificationSent(true);
            setresendTimer(60);
          } else {
            toast.error(res.data.responseMessage);
            setresetloader(false);
          }
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data.responseMessage);
          } else {
            toast.error(err.message);
          }
          console.log(err.message);
          setresetloader(false);
        });
    } else {
      setresetloader(false);
    }
  };
  const resetPaswordHandler = async () => {
    setresetloader(true);
    setemailvalid(isValidEmail(email));
    setpassvalid(isValidPassword(pass));
    if (emailvalid && passvalid && code.length == 6) {
      axios({
        method: "POST",
        url: Apiconfigs.resetPassword,
        data: {
          email: email,
          password: pass,
          otp: code,
        },
      })
        .then(async (res) => {
          if (res.data.statusCode === 200) {
            toast.success(res.data.responseMessage);
            setOpenForgotPassword(false);
          } else {
            toast.error(res.data.responseMessage);
          }
          setresetloader(false);
        })
        .catch((err) => {
          if (err.response) {
            toast.error(err.response.data.responseMessage);
          } else {
            toast.error(err.message);
          }
          setresetloader(false);
        });
    }

  };
  const Login = async () => {
    setemailvalid(isValidEmail(email));
    setpassvalid(isValidPassword(pass));
    if (emailvalid && passvalid) {
      setLoader(true);
      try {
        const res = await axios({
          method: "POST",
          url: Apiconfigs.userlogin,
          data: {
            email: email,
            password: pass,
          },
        });
        if (Object.entries(res.data.result).length > 0) {
          if (!res.data?.result?.isNewUser) {
            toast(
              ` 👋 Welcome Back ${res.data?.result?.name
                ? res.data?.result?.name
                : res.data?.result?.userName
              }`
            );
          }
          await user.updatetoken(res.data.result.token);
          if (!res.data?.result?.isEmailVerified || !res.data?.result?.isPhoneVerified) {
            navigate("/profilesettings");
          } else {
            navigate("/");
          }
        } else {
          toast.error(res.data.responseMessage);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.responseMessage);
        } else {
          toast.error(error.message);
        }
      }
    }
    setLoader(false);
  };

  useEffect(() => {
    const url = 'https://api.unsplash.com/photos/random?client_id=YC94t2S3Nge47lJvxYFndgORX0JUr4Ym7BfrSqfHUzU'
    const fetchSplash = async () => axios.get(url).then(res => {
      console.log(res)
      setSplash(res.data.urls.regular)
    });
    fetchSplash();

  }, [])
  return (
    <Box className={classes.root}>
      <Box className={classes.splash}
        style={{
          padding:"20px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          backgroundSize: 'cover',
          backgroundImage: `url(${splash})`
        }}
      >
        <Link to='/'>
          <img src="/images/footer-logo.svg" alt="home page" width="200" />
        </Link>
        <Typography variant="h1" style={{ color: "#fffc", fontSize: '5rem', fontWeight: 'bold' }}>
          {t('unleash_your_creativity')}
        </Typography>
      </Box>
      <Box className={classes.loginBox}>
        <Container maxWidth="sm" style={{ background: "#e9e4fc", padding: '20px' }}>
          <Typography variant="h2" align='center' mb={40} style={{ color:"#6345ED", marginBottom:"2rem" }}>
            {t('login_to_your_account')}
          </Typography>
          <form onSubmit={Login}>
            <Box style={{ marginBottom:"1rem" }}>
              <label className={classes.labelText}>{t('your_email_account')}</label>
              <TextField
                focused
                error={!emailvalid}
                placeholder={email}
                variant='filled'
                className={classes.inputText}
                type="email"
                helperText={!emailvalid && t('incorrect_email')}
                value={email}
                onBlur={(e) => setemailvalid(isValidEmail(e.target.value))}
                onChange={(e) => {
                  setemail(e.target.value);
                  setemailvalid(isValidEmail(e.target.value));
                }}
              />
            </Box>
            <Box>
              <label className={classes.labelText}>{t('your_password')}</label>
              <TextField
                variant='filled'
                type={showpass ? "text" : "password"}
                error={!passvalid}
                helperText={
                  !passvalid && t('password_requirements')
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setshowpass(!showpass)}
                      >
                        {showpass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={pass}
                onChange={(e) => {
                  setpass(e.target.value);
                  setpassvalid(isValidPassword(e.target.value));
                }}
                onBlur={(e) => setpassvalid(isValidPassword(e.target.value))}
                className={classes.inputText}
              />
            </Box>
            <Box className={classes.btnflex} mt={5}>
              <span
                style={{ color: "#6345ED", cursor: "pointer" }}
                onClick={() => setOpenForgotPassword(true)}
              >
                {t('forgot_password')} ? &nbsp;
              </span>
              <Button
                variant="contained"
                size="large"
                color="primary"
                component={Link}
                to="/create-account"
                className={classes.btnOutPro}
              >
                {t('sign_up')}
              </Button>
              &nbsp;&nbsp;
  
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={Login}
                disabled={loader || !passvalid || !emailvalid}
                className={classes.btnPro}
                style={{ borderRadius:'50px !important' }}
              >
                {t('sign_in')} {loader && <ButtonCircularProgress />}
              </Button>
            </Box>
          </form>
        </Container>
  
        <Dialog
          open={openForgotPassword}
          keepMounted
          fullWidth="sm"
          maxWidth="sm"
          onClose={() => setOpenForgotPassword(false)}
        >
          <DialogContent>
            {verificationSent &&
              <DialogTitle>
                <Typography
                  variant="h4"
                  style={{ color: "#792034", marginBottom: "10px", textAlign: 'center' }}
                >
                  {t('security_verification')}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#999", marginBottom: "10px", textAlign: 'center' }}
                >
                  {t('please_complete_verification')}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={() => setOpenForgotPassword(false)}
                  style={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
            }
            <DialogContentText>
              {!verificationSent &&
                <Box mt={3}>
                  <Typography
                    variant="h6"
                    style={{ color: "#792034", marginBottom: "5px" }}
                  >
                    {t('forgot_password')}
                  </Typography>
                  <Typography
                    variant="body"
                    component="p"
                    style={{ fontSize: "14px" }}
                  >
                    {t('enter_email_for_reset')}
                  </Typography>
  
                  <label className={classes.labelText}>{t('your_email_account')}</label>
                  <TextField
                    placeholder={email}
                    className={classes.inputText}
                    type="email"
                    error={!emailvalid}
                    helperText={
                      !emailvalid && t('incorrect_email')
                    }
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                      setemailvalid(isValidEmail(email));
                    }}
                  />
  
                </Box>
              }
              {verificationSent &&
                <Box mt={3}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label={t('email_verification_code')}
                    name="code"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button variant="text" onClick={forgotPasswordHandler} disabled={resendTimer || loader}>
                            {resendTimer ? `${t('resend_in')} ${resendTimer}s` : t('get_code')}
                          </Button>
                        </InputAdornment>
                      ),
                      maxLength: 6,
                    }}
                    error={code.length != 6}
                    helperText={t('enter_code_sent_to_email')}
                    value={code}
                    onChange={(e) => setcode(e.target.value)}
                  />
                  <TextField
                    type={showpass ? "text" : "password"}
                    hintText={t('password_hint')}
                    fullWidth
                    name="newPassword"
                    label={t('enter_new_password')}
                    error={!passvalid}
                    onBlur={() => { setpassvalid(isValidPassword(pass)) }}
                    value={pass}
                    onChange={(e) => { setpass(e.target.value); setpassvalid(isValidPassword(pass)) }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setshowpass(!showpass)}
                          >
                            {showpass ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormHelperText>
                    {!isValidPassword(pass) && (
                      <span>
                        {t('password_requirements_list')}
                      </span>
                    )}
                  </FormHelperText>
                </Box>
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {!verificationSent &&
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={forgotPasswordHandler}
                disabled={resetloader || !emailvalid}
              >
                {t('continue')} {resetloader && <ButtonCircularProgress />}
              </Button>
            }
            {verificationSent &&
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={resetloader || code.length != 6 || !passvalid}
                onClick={resetPaswordHandler}
              >
                {t('submit_and_reset')}
                {resetloader && <ButtonCircularProgress />}
              </Button>
            }
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
  
}
