import {
  ON_POST_CREATE_START,
  ON_POST_CREATE_SUCCESS,
  ON_POST_FINDALLPOST_START,
  ON_POST_FINDALLPOST_SUCCESS,
} from "../constants/FuzyPostsConstant";
import axiosBaseUri from "../utils/AxiosBaseUri";
import axiosErrorHandler from "../utils/AxiosErrorHandler";

const posts = axiosBaseUri("http://localhost:5000/");
const fuzyPostsActions = (postData) => async (dispatch) => {
  try {
    dispatch({ type: ON_POST_CREATE_START });

    const { data } = await posts.post("posts/fuzyPostByUsers", postData);
    const fuzyPostsDataResponse = data.fuzyPostsDataResponse;

    dispatch({
      type: ON_POST_CREATE_SUCCESS,
      payload: fuzyPostsDataResponse,
    });
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};
const fuzyPostFindPostsOfOneUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: ON_POST_FINDALLPOST_START });
    const { data } = await posts.get(`posts/fuzyGetPostoFoneUser/${id}`);
    const fuzyPostsDataResponse = data.fuzyOneUserPosts;

    dispatch({
      type: ON_POST_FINDALLPOST_SUCCESS,
      payload: fuzyPostsDataResponse,
    });
    
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

export { fuzyPostsActions, fuzyPostFindPostsOfOneUser };
