import {useState} from 'react';

// display the pictures themselves and write code to have them react to click events
function GalleryItem({item}) {

    const [isClicked, setIsClicked] = useState(true);
    
    // toggle clicked state of the photo 
    const photoIsClicked = () => {
        console.log('clicked');
        //toggle state
        setIsClicked(!isClicked);
    }

    // const picOrDescription = () => {
    //     if (item.path) {
    //         // need to return JSX
    //         return <p>RENDER PICTURE</p>;
    //     } else {
    //         // need to return JSX
    //         return <p>RENDER DESCRIPTION</p>;
    //     }
    // }

    return (
        <div className="item" key={item.id}>  
            <>
                {/* when img is clicked, change to the description */}
                {isClicked ? <img onClick={photoIsClicked} src={item.path}/> : <>{item.description}</>}
            </> 
        </div>
    );
}

export default GalleryItem;