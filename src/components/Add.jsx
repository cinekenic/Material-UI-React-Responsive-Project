import { makeStyles, Tooltip, Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
}));

const Add = () => {
  const classes = useStyle();

  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
