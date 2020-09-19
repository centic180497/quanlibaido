import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withHandlers, withState, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Tooltip
} from "@material-ui/core";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";


import Slider from "react-slick";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShowChartIcon from "@material-ui/icons/ShowChart";


import "./infoWindow.css";
import img from "./1.webp";

const styles = {
  infoWindow: {
    textAlign: "center",
  },
  card: {},
  info: {
    width: 274,
  },
  pAddress: {
    margin: 0,
  },
  img: {
    objectFit: "cover",
    width: "auto",
  },
  button: {
    margin: 5,
    minWidth: 30,
  },
};

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState(
    "dataShape",
    "setDataShape",
    JSON.parse(localStorage.getItem("dataShape")) || []
  ),
  withHandlers({
    makeColorButtonType: (props) => (color, title) => {
      let result = (
        <Tooltip title={title} arrow>
          <Button
            variant="outlined"
            size="small"
            style={{ borderColor: color, background: "white" }}
            data-color={color}
            // ref={handleRef}
            className={`${props.classes.button} button-color`}
          >
            <ShowChartIcon style={{ color: color }} fontSize="small" />
          </Button>
        </Tooltip>
      );
  
      return result;
    }
  }),
  withHandlers({
    test: () => () => {

    },
    init: (props) => () => {
      console.log('init', props)
      let elmButton = [];
        props.typeShapeOptions.map((data, index) => {
          let currColor = data.color;
          let title = data.name;
          let colorButton = props.makeColorButtonType(currColor, title);

          elmButton.push(React.createElement("span", null, colorButton));
        });

        function ButtonSelected() {
          return elmButton.map((data) => data);
        }
        ReactDOM.render(
          <ButtonSelected />,
          document.getElementById("button-action")
        );

        // setTimeout(() => {
        //   handleSelectColor(dataOptions[0].color);
        // }, 1000);
    },
    handleCompleteShape: ({dataShape, setDataShape}) => (overlay) => {
      console.log('overlay', overlay)

      let shape = overlay.overlay
          shape.type = overlay.type

          // if(overlay.type === "polyline") {
          //   const shapeArray = overlay.getPath().getArray();
          //     let paths = [];
          //     shapeArray.forEach(function (path) {
          //       paths.push({ lat: path.lat(), lng: path.lng() });
          //     });

          //     if (paths.length) {
          //       let object = {
          //         id: randomId(),
          //         shape: "polyline",
          //         path: paths,
          //         type: "typeShape",
          //         name: "Tran phu",
          //         address: "Tran phu, hai chau, hai chau 1"
          //       };
          //       dataShape = [...dataShape, object];
          //     }
          //     console.log('dataShape state', dataShape)
          //     setDataShape(dataShape);
          //     localStorage.setItem("dataShape", JSON.stringify(dataShape));

          //     function randomId() {
          //       return Math.random()
          //         .toString(36)
          //         .replace(/[^a-z]+/g, "")
          //         .substr(0, 10);
          //     }
          // }

      console.log('shape')
    }
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount(props) {
      this.props.init()
    }
  })
)((props) => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.location}
    onClick={() => props.onCloseInfoWindow()}
    options={props.options}
  >
    {props.greatPlaces
      ? props.greatPlaces.map((marker) => {
          const bindMarker = props.onClick.bind(this, marker);
          const settings = {
            dots: true,
            slidesToShow: 1,
          };
          return (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={props.icon}
              onClick={bindMarker}
            >
              {props.showInfoMarker === marker && (
                <InfoWindow>
                  <div className={props.classes.info}>
                    <Card className={props.classes.card}>
                      <CardActionArea>
                        <Slider {...settings}>
                          <div >
                            <img
                              alt=""
                              src={img}
                              className={props.classes.img}
                            />
                          </div>
                          <div>
                            <img
                              alt=""
                              src={img}
                              className={props.classes.img}
                            />
                          </div>
                          <div>
                            <img
                              alt=""
                              src={img}
                              className={props.classes.img}
                            />
                          </div>
                          <div>
                            <img
                              alt=""
                              src={img}
                              className={props.classes.img}
                            />
                          </div>
                        </Slider>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            ten camra
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            thong tin camera
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small">
                          <DeleteIcon fontSize="small" />
                        </Button>
                        <Button size="small">
                          <EditIcon fontSize="small" />
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          );
        })
      : null}

      <DrawingManager 
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              window.google.maps.drawing.OverlayType.POLYLINE,
              window.google.maps.drawing.OverlayType.CIRCLE,
              window.google.maps.drawing.OverlayType.POLYGON,
            ],
          },
        }}

        onOverlayComplete={props.handleCompleteShape}
      />

  </GoogleMap>
));

class ItemMap extends React.PureComponent {
  state = {
    location: {
      lat: 16.06396,
      lng: 108.213479,
    },
    zoom: 14,
    greatPlaces: [
      {
        id: " Camera 1 ",
        position: { lat: 16.07264, lng: 108.229916 },
        address: "Hòa Khê, Thanh Khê, Đà Nẵng",
      },
      {
        id: " Camera 147 ",
        position: { lat: 16.061403, lng: 108.234527 },
        address: "Quan 3, Ngu Hanh Son, Đà Nẵng",
      },
      {
        id: " Camera 123 ",
        position: { lat: 16.04969, lng: 108.222179 },
        address: "Duy Tan, Hai Chau, Đà Nẵng",
      },
      {
        id: " Camera 167 ",
        position: { lat: 16.061114, lng: 108.2209 },
        address: "Nguyen Van Linh, Hai Chau, Đà Nẵng",
      },
    ],
    showInfoMarker: false,
  };

  handelClick = (marker) => {
    this.setState({
      showInfoMarker: marker,
    });
  };

  onCloseInfoWindow = () => {
    this.setState({
      showInfoMarker: false,
    });
  };

  render() {
    const { zoom, location, greatPlaces, showInfoMarker } = this.state;
    const { classes } = this.props;

    const typeShapeOptions = [
      { color: "#1E90FF", id: 1, name: "cấm đỗ giờ cao điểm" },
      { color: "#FF1493", id: 2, name: "cấm đỗ  6h-22h" },
      { color: "#32CD32", id: 3, name: "cấm đỗ  24h/24h" },
      { color: "#FF8C00", id: 4, name: "cấm đỗ  ngày chẵn lẽ" },
    ];

    const mapOptionStyle = [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.station",
        stylers: [{ visibility: "off" }],
      },
    ]
    return (
      <div>
        <div id="panel" className={classes.panel}>
        <div id="button-action" className={classes.boxButton}></div>
        <div>
          <Button id="delete-button" variant="contained">
            Xóa 1 đường vẽ
          </Button>
        </div>
      </div>
      <MyMapComponent
        zoom={zoom}
        location={location}
        // icon={{ url: markerIcon,}}
        onClick={this.handelClick}
        onCloseInfoWindow={this.onCloseInfoWindow}
        greatPlaces={greatPlaces}
        showInfoMarker={showInfoMarker}
        classes={classes}
        options={{
          styles: mapOptionStyle
        }}
        typeShapeOptions={typeShapeOptions}
      />
      </div>
    );
  }
}

export default withStyles(styles)(ItemMap);
