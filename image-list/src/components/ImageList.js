import React from "react";

const ImageList = (props) => {
    const imagesList = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt='image' />
    })
    return (
        <div>
            {imagesList}
        </div>
    )
}

export default ImageList;