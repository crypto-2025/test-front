import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function NoDataFound() {
  const {t} = useTranslation();
  return (
    <Box align="center" mt={4} mb={5}>
      <Typography
        variant="h1"
        style={{
          color: '#000',
          marginBottom: '10px',
          padding: '10px',
          fontSize: '17px',
          
        }}
      >
        {t('NO DATA FOUND!')}
      </Typography>
      <img src="/images/noresult.png" />
    </Box>
  )
}
