import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { listViewModels } from "../data/ListViewSideBarModels";
import { Box, Typography } from "@mui/material";
import { FuzyButton } from "./FuzyButton";
import { FuzyTextAreaAutoSize } from "./FuzyTextAreaAutoSize";
import { fuzyPostsActions } from "../actions/FuzyPostsActions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FuzyTextFields from "./FuzyTextFields";
import FuzyModal from "./FuzyModal";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import useMultipleUploadForm from "../hooks/FormHook";
import "./FuzyListViewSideBar.css";
import {
  fuzyModalOpenActions,
  fuzyModalCloseActions,
} from "../actions/FuzyModalActions";
import { useImageSlider } from "../hooks/ImageSliderHook";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: "10px",
  outline: "none",
  p: 2,
};

const chevronLeftStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: 0,
};

const chevronRightStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: 0,
};

const textAreaStyle = {
  minWidth: 300,
  border: "none",
  textAlign: "center",
};

const buttonStyles = {
  outline: "none",
  border: "none",
  background: "transparent",
  color: "#000",
  textTransform: "capitalize",
  "&:hover": {
    background: "transparent",
    outline: "none",
    border: "none",
  },
};

const ListViewSideBar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.fuzyModelData);

  const onHandleModalOpen = (event) => {
    event.preventDefault();
    dispatch(fuzyModalOpenActions(true));
  };
  const onHandleCloseModal = (event) => {
    dispatch(fuzyModalCloseActions(false));
  };

  const [onHandleFileChange, handleFormData] = useMultipleUploadForm([]);
  const [showTextAreaBtn, setShowTextAreaBtn] = useState(false);
  const { filesArray, formData } = handleFormData();
  const { indexinit, onHandleClickLeft, onHandleClickRight } = useImageSlider(
    0,
    filesArray,
    {},
    "files"
  );

  const onHandleButtonClick = (event) => {
    event.preventDefault();
    setShowTextAreaBtn(true);
  };
  const onHandleChange = (event) => {
    const { name, value } = event.target;
  };

  const onHandlelPostCreate = (event) => {
    event.preventDefault();
    dispatch(fuzyPostsActions(formData));
  };

  const PostCreate = () => {
    return (
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Create a post
        </Typography>
        <form>
          <FuzyTextFields
            type="file"
            name="files"
            onChange={onHandleFileChange}
          />
        </form>
      </Box>
    );
  };

  const PictureReviews = () => {
    return (
      <Box sx={style}>
        <div className="fuzy_file_list_outer_wrapper">
          <div className="fuzy_file_headline">
            <FuzyButton
              variant="outlined"
              text="Next"
              onClick={onHandleButtonClick}
              sx={buttonStyles}
            />
            {showTextAreaBtn && filesArray?.length && (
              <>
                <h3>Create a new post</h3>
                <FuzyButton
                  variant="outlined"
                  text="Share"
                  sx={buttonStyles}
                  onClick={onHandlelPostCreate}
                />
              </>
            )}
          </div>
          <div className="fuzy_flex_items">
            <div className="fuzy_root_image">
              <ul>
                {filesArray.map(
                  (file, index) =>
                    index === indexinit && (
                      <div
                        className="fuzy_outer_list_wrapper"
                        key={`${index}+${file.name}`}
                      >
                        <li>
                          <div className="fuzy_image_wrapper">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                            />
                            <ChevronLeftIcon
                              sx={chevronLeftStyle}
                              onClick={onHandleClickLeft()}
                            />
                            <ChevronRightIcon
                              sx={chevronRightStyle}
                              onClick={onHandleClickRight()}
                            />
                          </div>
                        </li>
                      </div>
                    )
                )}
              </ul>
            </div>
            {showTextAreaBtn && filesArray?.length && (
              <div className="fuzy_form_files">
                <FuzyTextAreaAutoSize
                  ariaLabel="caption for posts"
                  minRows="20"
                  placeHolder="write a caption"
                  textAreaStyle={textAreaStyle}
                  name="fuzy_caption"
                  onChange={onHandleChange}
                />
              </div>
            )}
          </div>
        </div>
      </Box>
    );
  };

  return (
    <>
      <FuzyModal
        open={open}
        handleOnCloseModal={onHandleCloseModal}
        ariaLabelBy="Post create"
        ariaLableDescribedBy="Create the post to stay connected"
      >
        <>{!filesArray?.length ? <PostCreate /> : <PictureReviews />}</>
      </FuzyModal>
      <ul className="fuzy_list_views">
        <li>
          <HomeIcon />
          {listViewModels.home}
        </li>
        <li>
          <SearchIcon />
          {listViewModels.search}
        </li>
        <li>
          <ExploreOutlinedIcon />
          {listViewModels.explore}
        </li>
        <li>
          <VideoCameraFrontOutlinedIcon />
          {listViewModels.shortClips}
        </li>
        <li>
          <MessageOutlinedIcon />
          {listViewModels.message}
        </li>
        <li>
          <NotificationsActiveOutlinedIcon />
          {listViewModels.notification}
        </li>
        <li onClick={onHandleModalOpen}>
          <AddOutlinedIcon />
          {listViewModels.createPost}
        </li>
      </ul>
    </>
  );
};

export default ListViewSideBar;
