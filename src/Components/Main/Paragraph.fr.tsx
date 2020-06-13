import React from "react";
import { Typography, Link, Theme, withStyles } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
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
  }
};


const Paragraph: React.SFC<any> = ({ classes }) => {
  return <div>
    <Typography variant="subtitle2" className={classes.content}>
      Bonjour, je m'appelle Ahmed Rachid. j'adore créer tout types de logiciel, de la plus simple des applications mobiles, jusqu'au plus complexe des backends. Je suis actuellement apprenti chez&nbsp;
              <Link className={classes.linkSpan} href="https://www.avivainvestors.com/">Aviva Investors</Link>.
            </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      N'hésitez pas à jeter un coup d'œuil sur <Link className={classes.linkSpan} href="/resume">mon CV</Link>, <Link className={classes.linkSpan} href="/about">à propos de moi</Link>, vous pouvez aussi voir <Link className={classes.linkSpan} href="https://github.com/ahmedrachid">mes projets</Link> ou <Link className={classes.linkSpan} href="/contact">me contacter</Link>.
    </Typography>
    <br />

  </div>
};


export default withStyles(styles)(Paragraph);