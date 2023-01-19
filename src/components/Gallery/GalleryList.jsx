import GalleryItem from './GalleryItem';

function GalleryList({galleryListProp}) {

    return (
        <>
            {/* {JSON.stringify(props.creatureListProp)} */}
            {/* <h2>HEADY HEADER</h2> */}
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