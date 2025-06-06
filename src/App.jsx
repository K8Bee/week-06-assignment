//! Manny's code is all in App (here/below) BUT PLEASSSSSSSE use separate components (put themin the component folder in src folder)
import "./App.css";

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
        have diff containers inside main
        <div>
          This is the container for my thumbnail images (they all need to be in
          a container) it can be at the top or bottom (maybe top for desktop,
          bottom for mobile). Here I will render a list of my images and I wil
          give each of them a key. (note the use of kewords here (see use in
          demos))
          <ul>
            <li>Tools needed for this div to work:</li>
            <li>need a method to render all images</li>
            <li>
              need an event to click on the images (as each image is to be
              clickable), the event handler here will handle switching between
              images (the handle Switch Image block of code - how to connect it
              to the container)
            </li>
          </ul>
        </div>
        <div>
          This is a container for my larger images. This second container needs
          to be CONDITIONALLY RENDERED as it is only to exist whenever the user
          clicks on one of the thumbnail images. It will depend on the clicking
          of a thumbnail image i.e. if no images to render in my thumbnails,
          then this container will not exist
          <ul>
            <li>Tools needed:</li>
            <li>an element to contain the larger image</li>
            <li>
              need some conditional logic to render this element once the user
              has clicked on the thumbnail
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
