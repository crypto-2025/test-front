import React from 'react';
import { Box } from '@material-ui/core';
import Profile from './Profile';
import UserProfileTabs from './Tabs';

import Header3 from "../../../component/header/header3.jsx";


export default function UserProfile() {
  return (
    <Box>
    <Header3 />
      <Profile />
      <UserProfileTabs />
    </Box>
  );
}