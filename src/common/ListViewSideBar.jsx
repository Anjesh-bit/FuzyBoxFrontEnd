import { listViewModels } from "../data/ListViewSideBarModels";

const ListViewSideBar = () => {
  return (
    <>
      <ul>
        <li>{listViewModels.home}</li>
        <li>{listViewModels.search}</li>
        <li>{listViewModels.explore}</li>
        <li>{listViewModels.shortClips}</li>
        <li>{listViewModels.message}</li>
        <li>{listViewModels.notification}</li>
        <li>{listViewModels.createPost}</li>
      </ul>
    </>
  );
};
export default ListViewSideBar;
