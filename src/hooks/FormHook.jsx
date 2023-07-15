import { useState } from "react";
import { useSelector } from "react-redux";
const useMultipleUploadForm = (initialState) => {
  const { fuzyLoginData } = useSelector((state) => state.fuzyLoginData);
  const { id } = fuzyLoginData;
  const [files, setFiles] = useState(initialState);
  const onHandleFileChange = (event) => {
    event.preventDefault();
    setFiles(event.target.files);
  };
  const handleFormData = () => {
    //converting array like files object to the exact array;
    //Array.from(files)
    const filesArray = [...files];
    const formData = new FormData();
    formData.append("fuzyUser", id);
    formData.append("fuzyCaption", "Hey");
    filesArray.forEach((files, index) =>
      formData.append(`fuzyFiles[]`, files)
    );
    return { filesArray, formData };
  };
  return [onHandleFileChange, handleFormData];
};
export default useMultipleUploadForm;
