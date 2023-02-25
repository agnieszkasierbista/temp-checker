import { Button } from "react-native";
import React from "react";
import { SearchButtonProps } from "./SearchButton.types";

export const SearchButton: React.FC<SearchButtonProps> = (props) => {
  return (
    <Button
      title="Search"
      onPress={() => props.dispatchSearch(props.userInput)}
    />
  );
};
