import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './index.scss'
import Image from './components/image'

class ImagePicker extends Component {
  constructor(props) {
    super(props)

    const selectedImages = props.images.filter(image => image.selected === true);

    this.state = {
      picked: selectedImages || [],
    }

    this.handleImageClick = this.handleImageClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
  }

  handleImageClick(image) {
    const { multiple, onPick, maxPicks, onMaxPicks } = this.props
    const pickedImage = multiple ? this.state.picked : []
    let newerPickedImage

    if (pickedImage.filter(item => item.src === image.src).length > 0) {
      newerPickedImage = pickedImage.filter(item => item.src !== image.src );
    } else {
      if (typeof maxPicks === 'undefined') {
        pickedImage.push({ src: image.src })
        newerPickedImage = pickedImage
      } else {
        if (pickedImage.length < maxPicks) {
          pickedImage.push({ src: image.src })
          newerPickedImage = pickedImage
        } else {
          onMaxPicks(image)
        }
      }
    }

    if (newerPickedImage) {
      this.setState({picked: newerPickedImage})

      onPick(multiple ? newerPickedImage : newerPickedImage[0])
    }

    return pickedImage.length
  }

  renderImage(image, i) {
    let isSelected = this.state.picked.find(item => item.src === image.src);
    let order = this.state.picked.indexOf(isSelected) + 1;

    return (
      <Image
        src={image.src}
        isSelected={this.state.picked.filter(item => item.src === image.src).length > 0}
        onImageClick={() => this.handleImageClick(image)}
        key={i}
        order={order}
      />
    )
  }

  render() {
    return (
      <div className="image_picker">
        { this.props.images.map(this.renderImage) }
        <div className="clear"/>
      </div>
    )
  }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func,
  maxPicks: PropTypes.number,
  onMaxPicks: PropTypes.func,
}

export default ImagePicker
