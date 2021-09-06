const {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
} = require("@material-ui/core");
const { Search, Mail, NotificationImportant } = require("@material-ui/icons");

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
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(3),
  },
}));

function Navbar() {
  const classes = useStyle();

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
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
