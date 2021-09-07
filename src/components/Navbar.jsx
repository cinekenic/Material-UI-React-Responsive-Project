import { useState } from "react";

const {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} = require("@material-ui/core");
const { Search, Mail, Notifications, Cancel } = require("@material-ui/icons");

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    // ...theme.myButton,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    // ...theme.myButton,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(3),
  },

  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyle({ open });

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Heading 1
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Heading 2
        </Typography>
        <div className={classes.search}>
          <Search onClick={() => setOpen(true)} />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/6977999/pexels-photo-6977999.jpeg?cs=srgb&dl=pexels-monstera-6977999.jpg&fm=jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
