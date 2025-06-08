import "./App.css";
// import ThumbnailContainer from "./components/ThumbnailContainer";
import ThumbImg from "./components/ThumbImg";
import LargeImgContainer from "./components/LargeImgContainer";
import { useEffect, useState } from "react";

export default function App() {
  // state to store API image data (not storing the images themselves, storing the API data of all the images)
  // state to store the index value (to help moving between images)(need this because the API image data is an array, and so each item has an index value, to have a conenction between the images - need to use the index value)
  const [images, setImages] = useState([]);
  let [clickedUrl, setClickedUrl] = useState(
    "https://kids.earth.org/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-26T184215.475-900x600.jpg"
  );
  let [clickedAlt, setClickedAlt] = useState(
    // "An empty screen - click a thumbnail image to fill this"
    "An image of three small frogs on a branch."
  );
  //
  // fetch data from an API (control this with a hook)
  // once the data is fetched, update the image data state to store the fetched data
  //declaring useEffect()
  useEffect(() => {
    //fetching inside the anonynous callback function
    async function getImages() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      // const wrangledData = data.images;
      console.log(data);
      setImages(data);
    }
    getImages();
  }, []);
  //
  //add function to control what index (here - the index represents a specific image object) is being currently clicked on (will be how know what image needs to be shown as the bigger image)
  //something like (and this code below is how play with the state to store the index value (moving between images)):
  function handleClickedImage(changeUrl, changeAlt) {
    setClickedUrl((clickedUrl = changeUrl));
    setClickedAlt((clickedAlt = changeAlt));
  }

  function handleKeyDown(event, changeUrl, changeAlt) {
    // if (event.keyCode === 13 || event.keyCode === 32)
    event.preventDefault();
    setClickedUrl((clickedUrl = changeUrl));
    setClickedAlt((clickedAlt = changeAlt));
  }
  //
  return (
    <>
      {/* <h1>My Gallery</h1> */}
      <main className="bg-gray-900">
        {/* <ThumbnailContainer /> */}
        <LargeImgContainer largeImgUrl={clickedUrl} largeImgAlt={clickedAlt} />
        <nav className="thumbnailContainer">
          {images.map(function (dataItem) {
            return (
              <ThumbImg
                key={dataItem.id}
                url={dataItem.url}
                alt={dataItem.alt}
                onClick={() => handleClickedImage(dataItem.url, dataItem.alt)}
                onKeyDown={() =>
                  handleKeyDown(event, dataItem.url, dataItem.alt)
                }
              />
            );
          })}
        </nav>
      </main>
    </>
  );
}
