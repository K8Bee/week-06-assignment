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
// import { useState } from "react";
// import "./ThumbnailContainer.css";
// import ThumbImg from "./ThumbImg";

// export default function ThumbnailContainer(props) {
//   const [images, setImages] = useState([]);
//   return (
//     <div className="thumbnailContainer">
//       {/* {images.map(function (dataItem) {
//         return (
//           <ThumbImg
//             key={dataItem.id}
//             title={dataItem.title}
//             url={dataItem.url}
//             alt={dataItem.alt}
//             onClick={() => handleClickedImage(dataItem.url, dataItem.alt)}
//           />
//         );
//       })} */}
//     </div>
//     // <div className="thumbnailContainer">
//     //   {/* <div className="flex flex-col items-center"></div> */}
//     //   {/* Here I will render a list of my images and I will give each of them a key.
//     //   (note the use of kewords here (see use in demos)) */}
//     //   {/* <ul>
//     //     <li> */}
//     //   <img src={props.url} alt={props.alt} className="thumbnail" />
//     //   {/* <img className="size-48 shadow-xl rounded-md" src={image.url} alt={image.alt} /> */}
//     //   {/* </li>
//     //   </ul> */}
//     // </div>
//   );
// }
