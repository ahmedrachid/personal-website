import React from "react";
import { Typography, Link, withStyles, Theme } from "@material-ui/core";

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
      Hi, I am Ahmed Rachid. I love building all kinds of software, from simple
      mobile applications, to the most complex backends.
      I am currently a Data scientist apprentice at&nbsp;
              <Link className={classes.linkSpan} href="https://www.avivainvestors.com/">Aviva Investors</Link>.
            </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      Please feel free to read more <Link className={classes.linkSpan} href="/about">about me</Link>, or you can check out <Link className={classes.linkSpan} href="/resume">my resume</Link>, <Link className={classes.linkSpan} href="https://github.com/ahmedrachid">projects</Link> or <Link className={classes.linkSpan} href="/contact">contact me</Link>.
            </Typography>
    <br />
  </div>
};


export default withStyles(styles)(Paragraph);