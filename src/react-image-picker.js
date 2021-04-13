import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Map } from 'immutable'

import './index.scss'
import Image from './components/image'
import ImageMD from './components/ImageMd'

const defaltState = {
  picked:[]
}
const ImagePicker = props => {
  const selectedImages = props.images.filter(image => image.selected === true);
  const [state, setState] = useState(defaltState)

  const handleImageClick = image => {
    const { multiple, onPick, maxPicks, onMaxPicks } = props
    const pickedImage = multiple ? state.picked : []
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
      setState({picked: newerPickedImage})

      onPick(multiple ? newerPickedImage : newerPickedImage[0])
    }

    return pickedImage.length
  }

  return (
    <div className="image_picker">
        <ImageMD imagesList={props.images} />
    </div>
  )
  
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func,
  maxPicks: PropTypes.number,
  onMaxPicks: PropTypes.func,
}

export default ImagePicker
