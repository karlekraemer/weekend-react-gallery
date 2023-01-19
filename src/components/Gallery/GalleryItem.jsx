import React, { useState } from 'react';

// display the pictures themselves and write code to have them react to click events

function GalleryItem(galleryItemProp) {

    const [isClicked, setIsClicked] = useState(true)
    
    // toggle clicked state of the photo 
    const photoIsClicked = () => {
        console.log('clicked');
        //toggle state
        setIsClicked(!isClicked);
    }

    return (
        <>
        Um is this working
        </>
    )
}

export default GalleryItem;