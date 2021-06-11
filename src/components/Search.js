import * as React from "react";
import { Searchbar } from "react-native-paper";

const Search = (props) => {
  const { placeHolder } = props;

  return (
    <Searchbar
      placeholder={placeHolder || "Хайх найзынхаа нэрийг үү..."}
      {...props}
    />
  );
};

export default Search;
