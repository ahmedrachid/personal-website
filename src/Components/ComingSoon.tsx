import React from "react";
import { Card, makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    card: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
      }
    },
    title: {
      fontSize: 24,
      padding: 16
    },
    contentContainer: {
      marginTop: theme.spacing(2)
    },
    content: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
  };
});

const ComingSoon: React.FC = () => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <Typography variant="subtitle2" className={classes.title}>
        Coming soon ...
        </Typography>
      <Divider />
      <div className={classes.contentContainer}>
        <Typography variant="subtitle2" className={classes.content}>
          This website is still under development, I am sorry to say this section is not yet ready for production.
          <br />
          Don't panic, there is still a plenty to discover in here, feel free to explore 😊
          </Typography>
      </div>
    </Card>
  );
}


export default ComingSoon;