import React, { useState, useContext, ReactNode } from "react";
import { 
  AppBar, Toolbar, makeStyles, Button, Icon, Menu, 
  MenuItem, IconButton, Typography, withStyles, MenuProps 
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Router from "../Navigator";
import { MoreVert as MoreIcon } from "@material-ui/icons"
import useLocalization from "../Hooks/UseLocalization";
import { LanguageContext } from "./App";

type NavButtonProps = {
  path: string;
  title: string;
  icon: string | ReactNode;
}

const StyledMenu = withStyles(theme => {
  return {
    paper: {
      border: `0.5px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.default
    },
  };
}) ((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const Nav: React.FC = () => {
  const classes = useStyles();
  const [mobileAnchorEl, setMobileAnchorEl] = useState<null | HTMLElement>(null);
  const [flagAnchorEl, setFlagAnchorEl] = useState<null | HTMLElement>(null);
  const [localize, i18n] = useLocalization('nav');
  const { lang, changeLanguage } = useContext(LanguageContext);

  const handleMobileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const mobileMenuId = 'links-dropdown-menu';
  const renderMobileMenu = (
    <StyledMenu
      id={mobileMenuId}
      anchorEl={mobileAnchorEl}
      keepMounted
      open={Boolean(mobileAnchorEl)}
      onClose={handleMobileClose}>
      {
        Router.routes.map((route, index) => (
          <MobileNavButton
            key={index}
            title={route.title[lang]}
            icon={route.icon}
            path={route.path}/>
        ))
      }
    </StyledMenu>
  );

  const handleFlagClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFlagAnchorEl(event.currentTarget);
  };

  const handleFlagClose = () => {
    setFlagAnchorEl(null);
  };

  const flagMenuId = 'languages-dropdown-menu';
  const renderLanguagesMenu = (
    <StyledMenu
      id={flagMenuId}
      anchorEl={flagAnchorEl}
      keepMounted
      open={Boolean(flagAnchorEl)}
      onClose={handleFlagClose}>
      {
        i18n.languages.map(lang => (
          <Button
            disabled={lang === i18n.language}
            variant="text"
            color="primary"
            className={classes.flagButton}
            onClick={() => {
              i18n.changeLanguage(lang);
              changeLanguage(lang);
              handleFlagClose();
            }}>
            {i18n.getResourceBundle(lang, 'nav').flag}{lang}
          </Button>
        ))
      }
    </StyledMenu>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar className={classes.appbar}>
          <div className={classes.logoContainer}>
            <Button color="primary" variant="text" href="/" className={classes.logo}>
              Ahmed Rachid Hazourli
            </Button>
          </div>
          <div className={classes.desktopSection}>
            <div className={classes.links}>
              {
                Router.routes.map((route, index) => (
                  <NavButton
                    key={index}
                    path={route.path}
                    title={route.title[lang]}
                    icon={route.icon} />
                ))
              }
            </div>
          </div>
          <div className={classes.grow}/>
            <IconButton
              aria-label="show more"
              aria-controls={flagMenuId}
              aria-haspopup="true"
              onClick={handleFlagClick}
              color="primary">
                <Typography>{localize`flag`}</Typography>
            </IconButton>
          <div className={classes.mobileSection}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileClick}
              color="primary">
                <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      { renderLanguagesMenu }
      { renderMobileMenu }
    </React.Fragment>
  );
}

export default Nav;

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      borderBottom: `0.5px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.default
    },
    logoContainer: {
      borderRight: `0.5px solid ${theme.palette.divider}`,
      textDecoration: "none",
      paddingRight: theme.spacing(3)
    },
    logo: {
      fontWeight: 600,
      fontSize: 16,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    links: {
      display: "flex",
      flexDirection: "row",
      marginLeft: theme.spacing(3)
    },
    link: {
      fontWeight: 600,
      margin: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    flagButton: {
      fontWeight: 600,
      margin: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    },
    navButtonIcon: {
      marginRight: theme.spacing(1)
    },
    desktopSection: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    mobileSection: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    grow: {
      flexGrow: 1,
    },
  };
});

const MobileNavButton: React.SFC<NavButtonProps> = ({ path, title, icon }: NavButtonProps) => {
  const classes = useStyles();
  const location = useLocation();
  return <MenuItem 
    dense
    component='a'
    href={path}
    disabled={path === location.pathname}>
      <Icon color="primary">{icon}</Icon>
      <Typography className={classes.link} color="primary">{title}</Typography>
  </MenuItem>;
}

const NavButton: React.SFC<NavButtonProps> = ({ path, title, icon }: NavButtonProps) => {
  const classes = useStyles();
  const location = useLocation();
  return <Button
    disabled={path === location.pathname}
    variant="text"
    color="primary"
    className={classes.link}
    href={path}>
      {
        typeof(icon) === 'string' && <Icon className={classes.navButtonIcon}>{icon}</Icon>
      }
      {title}
  </Button>;
}