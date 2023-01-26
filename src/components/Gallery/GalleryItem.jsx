import {useState} from 'react';
import axios from 'axios';

// display the pictures themselves and write code to have them react to click events
function GalleryItem({item, getGallery}) {

    const [isClicked, setIsClicked] = useState(true);
    
    // toggle clicked state of the photo 
    const photoIsClicked = () => {
        console.log('clicked');
        //toggle state
        setIsClicked(!isClicked);
    }

    const incrementLike = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`
        })
        .then(response => {
            alert(`you liked ${item.description} image!`);
            getGallery();
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="item" key={item.id}>  
                {/* when img is clicked, change to the description */}
                <div>
                    {isClicked ? <img onClick={photoIsClicked} src={item.path}/> : <>{item.description}</>}
                </div>
                <br/>
                <button className="likes" onClick={incrementLike}>me likey</button>
                <p>{item.likes}</p>    
            </div>
        </> 
    );
}

export default GalleryItem;