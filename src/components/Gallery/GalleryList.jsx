import GalleryItem from './GalleryItem';

function GalleryList({galleryListProp, getGallery}) {

    return (
        <>
            {galleryListProp.map(item => 
                (
                    <div className="item" key={item.id}>
                        <GalleryItem 
                            item={item}
                            getGallery={getGallery}
                        />
                    </div>
                )
            )}
        </>
    )
}

export default GalleryList;