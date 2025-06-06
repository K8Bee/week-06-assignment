//! Manny's code is all in App.jsx file (here/below) BUT PLEASSSSSSSE use separate components (put them in the component folder in src folder) make a component tree
import "./App.css";
import ThumbnailContainer from "./components/ThumbnailContainer";
import LargeImgContainer from "./components/LargeImgContainer";

export default function App() {
  //todo:
  //state
  // state to store API image data (not storing the images themselves, storing the API data of all the images)
  // state to store the index value (to help moving between images)(need this because the API image data is an array, and so each item has an index value, to have a conenction between the images - need to use the index value)
  // may have more state if do any of the stretch goals

  //effects
  // one that needs to be managed is: fetch data form an API (control this with a hook)
  // once the data is fetched, update the image data state to store the fetched data
  // see Weds demo

  //add function to control what index (here - the index represents a specific image object) is being currently clicked on (will be how know what image needs to be shown as the bigger image)
  //something like (and this code below is how play with the state to store the index value (moving between images)):
  // function handleSwitchImage(index) {
  //   setIndex(index);
  // }

  return (
    <>
      <h1>My Gallery</h1>
      <main>
        {/* have diff containers inside main */}
        <ThumbnailContainer />

        <LargeImgContainer />
      </main>
    </>
  );
}
