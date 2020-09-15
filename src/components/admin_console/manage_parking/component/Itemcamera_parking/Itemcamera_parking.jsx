import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardContent, IconButton, Tooltip } from '@material-ui/core';
import { Visibility as VisibilityIcon, Info as InfoIcon } from '@material-ui/icons';

function Listitem(props) {
  const classes = useStyles();
  const {  showdata, camera, markerActive, showpopup } = props;
  return (
    <div>
      <Card className={showpopup === camera.id ? classes.cardActive : classes.card} onClick={() => showdata(camera)}>
        <div className={classes.image}>
          {/* <CardMedia className={classes.img} image={camera1} title="Contemplative Reptile" /> */}
        </div>
        <CardContent className={classes.contentCard}>
          <Typography gutterBottom variant="h5" className={classes.nameCamera}>
            {camera.nameCamera}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.address} noWrap>
            {camera.address}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Tooltip title="Theo dõi" arrow className={classes.tooltip}>
              <IconButton size="small">
                <VisibilityIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Thông tin" arrow className={classes.tooltip}>
              <IconButton size="small">
                <InfoIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
export default Listitem;

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
    background: 'transparent',
  },
  cardActive: {
    background: '#00000014',
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
  },
  image: {
    width: 130,
    display: 'block',
  },
  img: {
    width: '100%',
    paddingTop: '56%',
  },
  contentCard: {
    padding: '6px 0px 0 20px !important',
  },
  nameCamera: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  },
  address: {
    fontSize: 13,
    color: 'black',
  },
  icon: {
    padding: 6,
  },
  cardActions: {
    padding: 0,
  },
  tooltip: {
    // padding: 0,
  },
}));
