import { Person } from "@material-ui/icons";
import { AvatarGroup } from "@material-ui/lab";

const {
  makeStyles,
  Container,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
} = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  // button:{
  //   ...theme.myButton
  // }
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#555",
  },
}));

function Rightbar() {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 50 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={2}>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/honey.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/burgers.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/camera.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/morning.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/hats.jpg" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://material-ui.com/static/images/image-list/vegetables.jpg" />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}

export default Rightbar;
