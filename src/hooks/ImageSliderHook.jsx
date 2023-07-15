import { useEffect, useState, useRef } from "react";

const useImageSlider = (initialValue, filesArray = [], props = {}, filter) => {
  const { postsData, loading } = props;
  const lengthRef = useRef(0);

  useEffect(() => {
    if (loading && filter === "profile") {
      const fuzyImages = postsData.map((posts) => posts.uploadImg);
      lengthRef.current = fuzyImages.map((data) => data.length);
      fuzyImgRef.current = fuzyImages;
      setIndex(fuzyImages.map(() => 0)); //set an empty array with same length as fuzyImages`
    }
  }, [loading, postsData, lengthRef, filter]);

  const fuzyImgRef = useRef([]);
  const [indexinit, setIndex] = useState(initialValue);
  const onHandleClickRight =
    (indexPosts = 0, indexImage = 0) =>
    (event) => {
      event.preventDefault();

      switch (filter) {
        case "profile":
          const imageLength = lengthRef.current[indexPosts];
          if (indexImage !== imageLength - 1) {
            setIndex((prevArrPosts) => {
              const arrayPosts = [...prevArrPosts];
              //Set the index of all the nested images in arrayPosts
              arrayPosts[indexPosts] = indexImage + 1;
              return arrayPosts;
            });
          } else {
            setIndex((prevArrPosts) => {
              const arrayPosts = [...prevArrPosts];
              arrayPosts[indexPosts] = 0;
              return arrayPosts;
            });
          }
          break;
        case "files":
          if (indexPosts !== filesArray.length - 1) {
            setIndex(indexPosts + 1);
          } else {
            setIndex(0);
          }
          break;
        default:
          setIndex(0);
      }
    };

  const onHandleClickLeft =
    (indexPosts = 0, indexImage = 0) =>
    (event) => {
      event.preventDefault();
      switch (filter) {
        case "profile":
          const imageLength = lengthRef.current[indexPosts];
          if (indexImage > 0) {
            setIndex((prevIndex) => {
              const arrayPosts = [...prevIndex];
              arrayPosts[indexPosts] = indexImage - 1;
              return arrayPosts;
            });
          } else {
            setIndex((prevIndex) => {
              const arrayPosts = [...prevIndex];
              arrayPosts[indexPosts] = imageLength - 1;
              return arrayPosts;
            });
          }
          break;
        case "files":
          if (indexPosts > 0) {
            setIndex(indexPosts - 1);
          } else {
            //-1
            setIndex(filesArray.length - 1);
          }
          break;
        default:
          setIndex(0);
      }
    };
  return {
    indexinit,
    onHandleClickLeft,
    onHandleClickRight,
    loading,
    fuzyImgRef,
    lengthRef,
  };
};

export { useImageSlider };
