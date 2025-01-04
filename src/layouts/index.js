import React from 'react'
import { makeStyles } from '@material-ui/core'
import TopBar from './TopBar'
import Header3 from "../component/header/header3.jsx";
import Footer from "../component/footer/Footer";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
  },
  childHeight: {
    minHeight: '410px',
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
       <Header3 />
      {/* <TopBar /> */}
      <div className={classes.childHeight}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
