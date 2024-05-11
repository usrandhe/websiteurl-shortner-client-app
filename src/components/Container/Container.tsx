import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState<string | "">("");
  const [successFullMessage, setSuccessFullMessage] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is : ", response);
    setData(response.data);
    setReload(false);
  };

  const showHideModal = (id: string) => {
    setShowModal(!showModal);
    setSelectedItemId(id);
  };

  const showHideSuccessMessage = () => {
    setSuccessFullMessage(!successFullMessage)
  }

  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} showHideSuccessMessage={showHideSuccessMessage} successFullMessage={successFullMessage} />
      <DataTable
        updateReloadState={updateReloadState}
        data={data}
        showHideModal={showHideModal}
        showModal={showModal}
        selectedItemId={selectedItemId}
      />
    </>
  );
};

export default Container;
