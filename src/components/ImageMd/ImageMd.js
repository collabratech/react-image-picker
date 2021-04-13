import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: "auto",
      height: "auto"
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  }));

export default function ImageMd(props) {
    console.log("---ImageMD---", props);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Teste</h1>
        </div>
    )
}

ImageMd.propTypes = {
    src: PropTypes.string,
    isSelected: PropTypes.bool
  }
  