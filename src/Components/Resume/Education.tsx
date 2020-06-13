import React, { HTMLAttributes } from 'react';
import { makeStyles, Typography, Link, CircularProgress } from '@material-ui/core';
import useEducationLoader from '../../Hooks/UseEducationLoader';
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
    educationStepContainer: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    educationStepTitle: {
      fontSize: 17
    },
    educationStepPeriod: {
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

const Education: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [isLoading, education] = useEducationLoader();
  const [localize] = useLocalization('resume');
  
  return (
    <div {...props}>
      <Typography variant="subtitle2" className={classes.title}>
        {localize`educationSectionTitle`.toUpperCase()}
      </Typography>
      {
        isLoading && <div className={classes.progress}><CircularProgress /></div>
      }
      {
        education && education.map((step, index) => (
          <div key={index} className={classes.educationStepContainer}>
            <Typography
              variant="subtitle2"
              className={classes.educationStepTitle}>
              <Link
                className={classes.linkSpan}
                target="_blank"
                security="noreferr"
                href={step.instituteUrl}>
                {step.instituteName}
              </Link>
              &nbsp;
              -
              &nbsp;{step.degreeTitle}
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.educationStepPeriod}>
              {step.beginYear} - {step.graduationYear}
            </Typography>
          </div>
        ))
      }
    </div>
  );
}


export default Education;