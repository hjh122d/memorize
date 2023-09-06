import bookmarkTrueImg from "../assets/image/bookmark-true.svg";
import bookmarkFalseImg from "../assets/image/bookmark-false.svg";

export const BookmarkTrue = ({ ...props }) => {
  // return <img src={bookmarkTrueImg} alt="bookmark" onClick={onClick} />;
  return <img src={bookmarkTrueImg} alt="bookmark" {...props} />;
};

export const BookmarkFalse = ({ ...props }) => {
  // return <img src={bookmarkFalseImg} alt="bookmark" onClick={onClick} />;
  return <img src={bookmarkFalseImg} alt="bookmark" {...props} />;
};
