import React, { useState, useCallback } from "react";
import { Card, makeStyles, Typography, Divider, TextField, Button } from '@material-ui/core';
import useLocalization from "../Hooks/UseLocalization";

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
    captionContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    content: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    formContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      [theme.breakpoints.up('sm')]: {
        width: '75%',
      }
    },
    formField: {
      marginTop: theme.spacing(2)
    },
    submitButton: {
      marginTop: theme.spacing(2),
      height: '3rem',
      fontWeight: 600
    }
  };
});

const Contact: React.FC = () => {
  const classes = useStyles();
  const [localize] = useLocalization('contact');

  const MAIL_TO_BASE_URI = 'mailto:ahmedrachidhazourli@yahoo.fr';

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [mailToUri, setMailToUri] = useState(MAIL_TO_BASE_URI);

  const createMailToUri = useCallback(() => {
    return `${MAIL_TO_BASE_URI}?\
subject=${name} wants to get in touch&\
body=${message} <br /> <br /> Name: ${name} <br /> Email: ${email}`;
  }, [name, email, message]);

  return (
    <Card variant="outlined" className={classes.card}>
      <Typography variant="subtitle2" className={classes.title}>
        {localize`title`}
      </Typography>
      <Divider />
      <div className={classes.captionContainer}>
        <pre>
          <Typography variant="subtitle2" className={classes.content}>
            {localize`caption`}
          </Typography>
        </pre>
      </div>
      <div className={classes.formContainer}>
        <TextField
          fullWidth
          className={classes.formField}
          label={localize`nameFieldLabel`}
          variant="filled"
          helperText={localize`nameFieldHelper`}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          fullWidth
          className={classes.formField}
          label={localize`emailFieldLabel`}
          variant="filled"
          helperText={localize`emailFieldHelper`}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          className={classes.formField}
          label={localize`contentFieldLabel`}
          multiline
          variant="filled"
          onChange={e => setMessage(e.target.value)}
        />
        <Button 
          className={classes.submitButton}
          color="primary"
          size="large"
          variant="text"
          target="_blank"
          href={createMailToUri()}>
          {localize`submitButtonTitle`}
        </Button>
      </div>
    </Card>
  );
}


export default Contact;