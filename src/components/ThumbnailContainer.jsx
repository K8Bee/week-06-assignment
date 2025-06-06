export default function ThumbnailContainer() {
  return (
    <div>
      This is the container for my thumbnail images (they all need to be in a
      container) it can be at the top or bottom (maybe top for desktop, bottom
      for mobile). Here I will render a list of my images and I wil give each of
      them a key. (note the use of kewords here (see use in demos))
      <ul>
        <li>Tools needed for this div to work:</li>
        <li>need a method to render all images</li>
        <li>
          need an event to click on the images (as each image is to be
          clickable), the event handler here will handle switching between
          images (the handle Switch Image block of code - how to connect it to
          the container)
        </li>
      </ul>
    </div>
  );
}
