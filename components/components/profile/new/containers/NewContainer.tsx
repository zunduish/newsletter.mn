import React from "react";
import NewProfile from "../components/NewProfile";
type Props = {
  list_data: any;
};
export default function NewProfileContainer(props: Props) {
  const { list_data } = props;
  return list_data?.length > 0 && <NewProfile list_data={list_data} />;
}
