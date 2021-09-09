import { Person } from "@material-ui/icons";

const {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  // button:{
  //   ...theme.myButton
  // }
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Post() {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?cs=srgb&dl=pexels-lisa-2106037.jpg&fm=jpg"
          title="My pst"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My first post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            natus fuga eveniet error? Officiis veniam inventore molestiae minus
            nesciunt ducimus alias voluptates atque quos sit adipisci, odio quod
            quibusdam natus!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
