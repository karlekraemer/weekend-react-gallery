import axios from 'axios';
import React from 'react';
// import { useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import './App.css';

// import our components
import GalleryItem from '../Gallery/GalleryItem.jsx';
import GalleryList from '../Gallery/GalleryList.jsx';

function App() {

  // will need a useSelector here maybe? Available for import above.

  // get-ers and set-ers here
  const [galleryList, setGalleryList] = useState([]);

  // GET request
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('response', response);
      //array response log below, needed yet?
      // console.log('just the data', response.data)
      setGalleryList(response.data);
    })
    .catch(function (error) {
      console.log('GET error', error);
    });
  }

  // GET request on page load 
  useEffect( () => {
    getGallery();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <GalleryList galleryListProp={galleryList} />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
