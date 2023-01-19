import GalleryItem from './GalleryItem';

function GalleryList({galleryListProp}) {

    return (
        <>
        {/* is this pizza? */}
        {/* {galleryList}  */}
            {/* {JSON.stringify(props.creatureListProp)} */}
            {/* <h2>HEADY HEADER</h2> */}
            <GalleryItem />
            <ul>
                {galleryListProp.map(item => 
                    (<li key={item.id}>
                        {item.path} {item.description} {item.likes}
                    </li>)
                )}
            </ul>
        </>
    )
}

export default GalleryList;