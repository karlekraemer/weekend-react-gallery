import GalleryItem from './GalleryItem';

function GalleryList({galleryListProp}) {

    return (
        <>
            {galleryListProp.map(item => 
                (
                    <div className="item" key={item.id}>
                        <GalleryItem item={item}/>
                        <br/>
                        <button>me likey</button>
                        <p>{item.likes}</p>
                    </div>
                )
            )}
        </>
    )
}

export default GalleryList;