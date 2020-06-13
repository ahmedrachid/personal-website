import React, { HTMLAttributes } from "react";
import {Typography, makeStyles, CircularProgress, Icon, Paper, Divider, Grid} from "@material-ui/core";
import useSkillsLoader from "../../Hooks/UseSkillsLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import useLocalization from "../../Hooks/UseLocalization";


type Props = HTMLAttributes<{}>;

const useStyles = makeStyles(theme => {
  return {
    title: {
      fontSize: '1.2rem',
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      fontWeight: 600,
      flex: 1,
      textAlign: 'center'
    },
    gridContainer: {
      marginBottom: theme.spacing(2)
    },
    progress: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: theme.spacing(4)
    },
    skillPapersContainer: {
      flexGrow: 1
    },
    skillPaper: {
      width: "19rem",
      height: "14rem",
      border: `0.5px solid ${theme.palette.divider}`,
      textAlign: 'center',
      overflow: 'hidden'
    },
    skillPaperHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      verticalAlign: 'center',
      padding: theme.spacing(2)
    },
    skillPaperTitle: {
      fontSize: 15,
      fontWeight: 600,
      color: theme.palette.primary.main
    },
    skillPaperIcon: {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1)
    },
    skillPaperContent: {
      padding: theme.spacing(2),
      textAlign: 'start',
      backgroundColor: 'white'
    },
    skillPaperContentText: {
      fontSize: 14
    }
  };
});

const Skills: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [isLoading, skills] = useSkillsLoader();
  const [localize] = useLocalization('resume');
  
  return (
    <div {...props}>
      <Typography variant="subtitle2" className={classes.title}>
        {localize`skillsSectionTitle`.toUpperCase()}
      </Typography>
      {
        isLoading && <div className={classes.progress}><CircularProgress /></div>
      }
      <Grid container className={classes.gridContainer} justify="center" spacing={2}>
        {
          skills && skills.map((skillSet, index) => (
            <Grid item key={index}>
              <Paper
                className={classes.skillPaper}
                variant="outlined">
                <div className={classes.skillPaperHeader}>
                  {
                    skillSet.icon.materialIconName && <Icon
                      className={classes.skillPaperIcon}>{skillSet.icon.materialIconName}
                    </Icon>
                  }
                  {
                    skillSet.icon.fontAwesomeIconName && <FontAwesomeIcon
                      icon={skillSet.icon.fontAwesomeIconName as IconName}
                      className={classes.skillPaperIcon} />
                  }
                  {
                    skillSet.icon.url && <img
                      src={skillSet.icon.url}
                      alt="Skill Icon"
                      className={classes.skillPaperIcon} />
                  }
                  <Typography variant="subtitle2" className={classes.skillPaperTitle}>
                    {skillSet.title.toUpperCase()}
                  </Typography>
                </div>
                <Divider />
                <div className={classes.skillPaperContent}>
                  {
                    skillSet.skills.map((skill, index) => (
                      <Typography 
                        key={index} 
                        variant="subtitle2" 
                        className={classes.skillPaperContentText}>
                          • {skill}
                      </Typography>
                    ))
                  }
                </div>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}


export default Skills;