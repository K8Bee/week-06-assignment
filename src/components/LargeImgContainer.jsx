// • 🐿️ As a user, I want to be able to click on an image thumbnail to view a larger version of that image, possibly in a modal or a dedicated view.
// 	• 🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked.
// 	• A modal is like a pop up,
// 	• can be as simple as just larger image (doesn’t have to be full screen)
// Demo: conditional rendering
import "./LargeImgContainer.css";
// import { useEffect, useState } from "react";

export default function LargeImgContainer(props) {
  //   const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <img className="largeImg" src={props.clickedUrl} alt={props.clickedAlt} />
    </>
    //     // <div>
    //     //   This is a container for my larger images. This second container needs to
    //     //   be CONDITIONALLY RENDERED as it is only to exist whenever the user clicks
    //     //   on one of the thumbnail images. It will depend on the clicking of a
    //     //   thumbnail image i.e. if no images to render in my thumbnails, then this
    //     //   container will not exist
    //     //   <ul>
    //     //     <li>Tools needed:</li>
    //     //     <li>an element to contain the larger image</li>
    //     //     <li>
    //     //       need some conditional logic to render this element once the user has
    //     //       clicked on the thumbnail
    //     //     </li>
    //     //   </ul>
    //       {/* <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    // //       {isVisible ? <p>Hello World</p> : null} */}
    //     // </div>
  );
}

// Conditional rendering - so can show or hide part of the rendered UI based on the condition of state update or a prop change from the parent. Use a button to toggle the visibility of the large image. To achieve this, using three tools: state, an event, and a conditional operator.
// using ternary operator to conditionally render a large image
// export default function LargeImgContainer() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//       {isVisible ? <p>Hello World</p> : null}
//     </div>
//   );
// }
