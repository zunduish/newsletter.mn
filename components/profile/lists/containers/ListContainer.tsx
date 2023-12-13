import React from "react";
import Lists from "../components/Lists";
type Props = {
  list_data: any;
};
export default function ListContainer(props: Props) {
  const { list_data } = props;
  return list_data?.length > 1 && <Lists list_data={list_data} />;
}
