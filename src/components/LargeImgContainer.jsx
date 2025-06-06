export default function FunctionName() {
  return (
    <div>
      This is a container for my larger images. This second container needs to
      be CONDITIONALLY RENDERED as it is only to exist whenever the user clicks
      on one of the thumbnail images. It will depend on the clicking of a
      thumbnail image i.e. if no images to render in my thumbnails, then this
      container will not exist
      <ul>
        <li>Tools needed:</li>
        <li>an element to contain the larger image</li>
        <li>
          need some conditional logic to render this element once the user has
          clicked on the thumbnail
        </li>
      </ul>
    </div>
  );
}
