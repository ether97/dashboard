import React from "react";
import {
  useGetAllDogsQuery,
  useGetRandomImageQuery,
} from "../features/api/apiSlice";
import { Box } from "@mui/material";

const RandomImage = () => {
  let content;

  const { data, isLoading, isSuccess } = useGetRandomImageQuery();
  if (isSuccess) {
    content = <Box component="img" alt="Dog Picture" src={data.message} />;
  }

  return content;
};

export default RandomImage;
