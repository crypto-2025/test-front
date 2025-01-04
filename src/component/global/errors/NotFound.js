import { Box, Typography } from "@material-ui/core";
import React from "react";
import Page from "src/component/Page";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function NotFound() {
  const {t} = useTranslation();
  return (
    <Page title="page not found!">
      <Box pt={20} align="center">
        <Link to="/">
          <img src="/images/404.png" /> <br />
          <Typography variant="h3" style={{ color: "#6345ED", marginTop: "10px", }}>{t('Page requested not found')}</Typography>
          <Typography variant="h2" style={{ color: "#6345ED", marginTop: "10px", }}>{t('Go Back to Home Page')}</Typography>
        </Link>
      </Box>
    </Page>
  );
}
