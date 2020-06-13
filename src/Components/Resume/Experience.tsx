import React, { HTMLAttributes } from 'react';
import { makeStyles, Typography, Link, CircularProgress } from '@material-ui/core';
import useExperienceLoader from '../../Hooks/UseExperienceLoader';
import useLocalization from '../../Hooks/UseLocalization';


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
    linkSpan: {
      fontWeight: 500,
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none'
      }
    },
    experienceStepContainer: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    experienceStepTitle: {
      fontSize: 17
    },
    experienceStepPeriod: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    progress: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: theme.spacing(4)
    }
  };
});

const Experience: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [isLoading, experience] = useExperienceLoader();
  const [localize] = useLocalization('resume');

  return (
    <div {...props}>
      <Typography variant="subtitle2" className={classes.title}>
        {localize`experienceSectionTitle`.toUpperCase()}
      </Typography>
      {
        isLoading && <div className={classes.progress}><CircularProgress /></div>
      }
      {
        experience && experience.map((step, index) => (
          <div key={index} className={classes.experienceStepContainer}>
            <Typography
              variant="subtitle2"
              className={classes.experienceStepTitle}>
              <Link
                className={classes.linkSpan}
                target="_blank"
                security="noreferr"
                href={step.companyUrl}>
                  {step.companyName}
                </Link>
              &nbsp;-&nbsp;{step.jobTitle}
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.experienceStepPeriod}>
              {step.beginDate} - {step.endDate}
            </Typography>
            <div>
              {
                step.missions.map((mission, index) => (
                  <Typography variant="subtitle2" key={index}>• {mission}</Typography>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}


export default Experience;