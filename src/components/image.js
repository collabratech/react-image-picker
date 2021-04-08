import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ImageStyle = (width, height) => {
  return {
    objectFit: "cover"
  }
}

export default class Image extends Component {
  render() {
    const { src, isSelected, onImageClick } = this.props
    return (
      <div className={`responsive${isSelected ? " selected" : ""}`}
        onClick={this.props.onImageClick}>
        <div class="content-overlay"></div>
        <img src={src}
          className={`thumbnail${isSelected ? " selected" : ""}`}
          style={ImageStyle(150, 150)}
        />
        <div class="content-details fadeIn-bottom fadeIn-left">
          <h3>SELECT</h3>
        </div>
        <div className="checked">
          <div className="icon">{this.props.order}</div>
        </div>
      </div>
    )
  }
}

Image.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool
}
