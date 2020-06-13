import React, { useState, useContext } from 'react';
import { Card, makeStyles, Typography, Avatar, Divider } from '@material-ui/core';
import useLocalization from '../../Hooks/UseLocalization';
import { LanguageContext } from '../App';

const useStyles = makeStyles(theme => {
  return {
    container: {
      padding: theme.spacing(3)
    },
    card: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default
    },
    title: {
      fontSize: 24,
      padding: 16
    },
    caption: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    avatarContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    avatar: {
      margin: theme.spacing(2),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
    name: {
      fontSize: 24,
      fontWeight: 600
    },
    contentContainer: {
      marginTop: theme.spacing(2)
    },
    content: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    linkSpan: {
      fontWeight: 500,
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none'
      }
    }
  };
});


const Main: React.FC = () => {
  const classes = useStyles();
  const [localize] = useLocalization('main');
  const [Paragraph, setParagraph] = useState();
  const { lang } = useContext(LanguageContext);

  import(`./Paragraph.${lang}`)
    .then(module => setParagraph(module.default))
    .catch(e => console.error(e));

  return (
    <div className={classes.container}>
      <div className={classes.avatarContainer}>
        <Avatar alt="Ahmed Rachid Hazourli" src="/avatar.png" className={classes.avatar} />
        <Typography variant="subtitle2" className={classes.name}>AHMED RACHID HAZOURLI</Typography>
        <Typography variant="subtitle2" className={classes.caption}>
          {localize`jobTitle`}
        </Typography>
        <Typography variant="caption" className={classes.caption}>
           ahmedrachidhazourli@yahoo.fr
          </Typography>
          
      </div>
      <Card variant="outlined" className={classes.card}>
        <Typography variant="subtitle2" className={classes.title}>
          {localize`aboutTitle`}
        </Typography>
        <Divider />
        <div className={classes.contentContainer}>
          {
            Paragraph && <Paragraph />
          }
        </div>
      </Card>
    </div>
  );
}


export default Main;