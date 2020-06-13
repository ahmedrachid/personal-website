import React from 'react';
import { Divider, makeStyles, Link, Typography } from '@material-ui/core';
import ContactData from '../Data/Static/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => {
  return {
    container: {
    },
    content: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'row'
    },
    contactLink: {
      padding: 8,
      color: theme.palette.primary.main
    },
    copyright: {
      marginLeft: theme.spacing(6)
    }
  };
});


const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Divider />
      <div className={classes.content}>
        <React.Fragment>
          <ul className={classes.contactMethods}>
            {
              ContactData.map((record) => (
                <React.Fragment key={record.label}>
                  <Link 
                    href={record.link} 
                    className={classes.contactLink}
                    target="_blank"
                    rel="noopener">
                    <FontAwesomeIcon icon={record.icon} />
                  </Link>
                </React.Fragment>
              ))
            }
          </ul>
          <Typography variant="caption" className={classes.copyright}>
            &copy; Ahmed Rachid Hazourli <Link href="https://ahmedrachid.github.io">ahmedrachid.github.io</Link>
          </Typography>
        </React.Fragment>
      </div>
    </div>
  );
}


export default Footer;