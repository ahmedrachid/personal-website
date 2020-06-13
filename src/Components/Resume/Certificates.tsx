import React, { HTMLAttributes } from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
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
    comingSoonParagraph: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
  };
});

const Certificates: React.SFC<Props> = (props: Props) => {
  const classes = useStyles();
  const [localize] = useLocalization('resume');

  return (
    <div {...props}>
      <Typography variant="subtitle2" className={classes.title}>
        {localize`certificatesSectionTitle`.toUpperCase()}
      </Typography>
      <Typography variant="subtitle2" className={classes.comingSoonParagraph}>
        Not yet, but will some soon 😉 
      </Typography>
    </div>
  );
}


export default Certificates;