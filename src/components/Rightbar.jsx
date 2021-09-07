import { Person } from "@material-ui/icons";

const { makeStyles, Container } = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  // button:{
  //   ...theme.myButton
  // }
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Rightbar() {
  const classes = useStyle();

  return <Container className={classes.container}>Rightbar</Container>;
}

export default Rightbar;
