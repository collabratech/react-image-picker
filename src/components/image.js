import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ImageStyle = (width, height) => {
  return {
    width,
    height,
    objectFit: "cover"
  }
}

export default class Image extends Component {
  constructor(props) {
    super(props)

    this.state = {
      order: null
    }

    this.imageClick = this.imageClick.bind(this)
  }

  imageClick() {
    let size = this.props.onImageClick()
    this.setState({order: size + 1})
  }

  render() {
    const { src, isSelected, onImageClick } = this.props
    return (
      <div className={`responsive${isSelected ? " selected" : ""}`}
        onClick={this.imageClick}>
        <img src={src}
          className={`thumbnail${isSelected ? " selected" : ""}`}
          style={ImageStyle(150, 150)}
        />
        <div className="checked">
          {/*<img src={imgCheck} style={{ width: 75, height: 75, objectFit: "cover" }}/>*/}
          <div className="icon">{this.state.order}</div>
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}