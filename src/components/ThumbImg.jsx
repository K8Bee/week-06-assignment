import "./ThumbImg.css";

export default function ThumbImg(props) {
  return (
    <>
      <img
        className="thumbnail"
        src={props.url}
        alt={props.alt}
        width="120px"
        height="90px"
        onClick={props.onClick}
        tabIndex="0"
        role="button"
        onKeyDown={props.onKeyDown}
      />
    </>
  );
}
