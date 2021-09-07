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

function Feed() {
  const classes = useStyle();

  return <Container className={classes.container}>Feed</Container>;
}

export default Feed;
