// • 🐿️ As a developer, I want the application to use the useState hook so that user interactions (like selecting an image) are smooth and the gallery’s state is managed effectively.
// 	• 🎯  Implement the useState hook to manage gallery state (e.g. selected image).
// 	• To know what images has been selected, to store our images in there
// Demo:  react state and events and handling events?

// • 🐿️ As a developer, I want to use the useEffect hook to perform side effects, such as fetching image data from an external API.
// 	• 🎯 Use useEffect for initial fetching of images from an external API.
// 	• Just use the link in your fetch, if you want to expand these by using own images that's okay (in addition to the API), or you can also use the Unsplash API we used a few weeks ago, as long as have an effect that fetches something (local images wouldn't be fetched, so don’t want these)
// If you use a different API, like Unsplash (it's a stretch goal) and you will need to read the documentation to make sure you get the right data, Will also need to manipulate tokens and secrets which don’t need to do with their API
//demo: useState

// 🐿️ As a user, I want to see a collection of image thumbnails displayed clearly on the page.
// 	• 🎯 Use the .map() function to render an array of images dynamically
// 	• Can be at top or bottom of page
// Demo: list and keys

import "./ThumbnailContainer.css";

export default function ThumbnailContainer() {
  //   //declaring useState()
  //   const [images, setImages] = useState([]);
  //   //declaring useEffect()
  //   useEffect(() => {
  //     //fetching inside the anonynous callback function
  //     async function getImages() {
  //       const response = await fetch("https://week-6-api.vercel.app/api/images");
  //       const data = await response.json();
  //       const wrangledData = data.images;
  //       console.log(wrangledData);
  //       setImages(wrangledData);
  //     }
  //     getImages();
  //   }, []);
  //   // dependency array - controls how many times this effect happens
  //   // If the array is empty, the effect happens when the component mounts
  //   // If the array has a value inside, the effect will happen when that value updates
  return (
    <div className="thumbnailContainer">
      This is the container for my thumbnail images (they all need to be in a
      container) it can be at the top or bottom (maybe top for desktop, bottom
      for mobile). Here I will render a list of my images and I will give each
      of them a key. (note the use of kewords here (see use in demos))
      {/* {images.map((image) => { */}
      return (
      <>
        {/* <ul>
              <li> */}
        <div>
          {/* <img src={image.url} alt={image.alt} className="thumbnailImage" /> */}
          {/* </li>
            </ul> */}
        </div>
      </>
      );
      {/* })} */}
      {/* <ul>
        <li>Tools needed for this div to work:</li>
        <li>need a method to render all images</li>
        <li>
          need an event to click on the images (as each image is to be
          clickable), the event handler here will handle switching between
          images (the handle Switch Image block of code - how to connect it to
          the container)
        </li>
      </ul> */}
    </div>
  );
}
