import { Person } from "@material-ui/icons";
import Post from "./Post";

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

  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feed;
