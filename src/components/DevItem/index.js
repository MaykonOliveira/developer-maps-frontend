import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GithubIcon from '@material-ui/icons/GitHub';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  card: {
    overflow: "auto",
    height: 190

  },
  cardContent: {
    height: 50
  },
  iconButton: {
    "&:focus": {
      outline: "none"
    }
  }
}));

export default function DevItem({ dev, handleDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar src={dev.avatar_url} aria-label="recipe" />
        }
        title={dev.name}
        subheader={dev.techs.join(", ")}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {dev.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton href={`https://github.com/${dev.github_username}`} aria-label="github" className={classes.iconButton}>
          <GithubIcon />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={() => handleDelete(dev._id)} className={classes.iconButton}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
