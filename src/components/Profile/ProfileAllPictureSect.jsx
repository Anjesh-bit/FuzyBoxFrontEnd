import { useEffect, useRef, useState } from "react";
import { useImageSlider } from "../../hooks/ImageSliderHook";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./ProfileAllPictureSection.css";

const ProfileAllPictureSection = (props) => {
  const {
    indexinit,
    onHandleClickLeft,
    onHandleClickRight,
    loading,
    fuzyImgRef,
  } = useImageSlider([], [], props, "profile");
  const fuzyimgData = fuzyImgRef.current;

  return (
    <div className="fuzy_pp_outer_wrapper">
      <div className="fuzy_pp_inner_wrapper">
        {loading &&
          fuzyimgData.map((fuzyimagesi, i) =>
            fuzyimagesi.map((fuzyimagesj, j) => (
              <ul key={`${i}-${j}`}>
                <li>
                  {j === indexinit[i] && (
                    <div className="fuzy_image_wrapper">
                      <img src={fuzyimagesj} alt={`fuzyImages${i}-${j}`} />
                      <ChevronLeftIcon
                        key={i + 1}
                        className="chevron_left"
                        onClick={onHandleClickLeft(i, j)}
                      />
                      <ChevronRightIcon
                        key={i + 2}
                        className="chevron_right"
                        onClick={onHandleClickRight(i, j)}
                      />
                    </div>
                  )}
                </li>
              </ul>
            ))
          )}
      </div>
    </div>
  );
};

export { ProfileAllPictureSection };
