import React from 'react';
import { Card, makeStyles, Typography, Divider, Button, Avatar } from '@material-ui/core';
import { faMedal, faBook, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import useLocalization from '../../Hooks/UseLocalization';
import Certificates from './Certificates';


const useStyles = makeStyles(theme => {
  return {
    container: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
      }
    },
    title: {
      fontSize: '1.2rem',
      padding: theme.spacing(1),
      color: theme.palette.grey[600],
      textAlign: 'center'
    },
    buttonGroup: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'clip',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyItems: 'center'
      }
    },
    sectionButton: {
      marginRight: theme.spacing(2),
      fontWeight: 600
    },
    sectionButtonIcon: {
      padding: theme.spacing(1),
    },
    avatarContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
    grow: {
      flexGrow: 1 
    }
  };
});


const Resume: React.FC = () => {
  const classes = useStyles();
  const [localize] = useLocalization('resume');

  return (
    <Card variant="outlined" className={classes.container}>
      <div className={classes.avatarContainer}>
        <Avatar alt="Ahmed Rachid Hazourli" src="/avatar.png" className={classes.avatar} />
        <Typography variant="subtitle2" className={classes.title}>
          {
            localize('title', {
              fullName: 'Ahmed Rachid Hazourli'.toUpperCase()
            })
          }
        </Typography>
      </div>
      <div className={classes.buttonGroup}>
        <div className={classes.grow}/>
        <Button 
          variant="text" 
          color="primary" 
          href="#education"
          className={classes.sectionButton}>
            <FontAwesomeIcon size="lg" icon={faBook} className={classes.sectionButtonIcon} />
            {localize`educationSectionTitle`}
        </Button>
        <Button 
          variant="text" 
          color="primary" 
          href="#experience"
          className={classes.sectionButton}>
            <FontAwesomeIcon size="lg" icon={faBriefcase} className={classes.sectionButtonIcon} />
            {localize`experienceSectionTitle`}
        </Button>
        <Button 
          variant="text" 
          color="primary"
          href="#skills"
          className={classes.sectionButton}>
            <FontAwesomeIcon size="lg" icon={faLightbulb} className={classes.sectionButtonIcon} />
            {localize`skillsSectionTitle`}
        </Button>
        <Button 
          variant="text" 
          color="primary"
          href="#certificates"
          className={classes.sectionButton}>
            <FontAwesomeIcon size="lg" icon={faMedal} className={classes.sectionButtonIcon}/>
            {localize`certificatesSectionTitle`}
        </Button>
        <div className={classes.grow}/>
      </div>
      <Divider />
      <Education id="education"/>
      <Divider />
      <Experience id="experience" />
      <Divider />
      <Skills id="skills" />
      <Divider />
      <Certificates id="certificates" />
    </Card>
  );
}


export default Resume;