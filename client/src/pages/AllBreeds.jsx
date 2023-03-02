import { Typography, useTheme } from "@mui/material";
import React from "react";
import { useGetAllDogsQuery } from "../features/api/apiSlice";

const AllBreeds = () => {
  const theme = useTheme();
  const { data, isLoading, isSuccess } = useGetAllDogsQuery();

  let display;
  if (isSuccess) {
    display = (
      <div>
        {Object.entries(data.message).map((item) => {
          return (
            <div>
              {item[0] && item[1].length > 0 ? (
                <div>
                  <Typography variant="h3">{item[0].toUpperCase()}</Typography>
                  <Typography variant="h5">
                    {item[1].join(", ").toUpperCase()}
                  </Typography>
                </div>
              ) : (
                <Typography variant="h3">{item[0].toUpperCase()}</Typography>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return <div>{display}</div>;
};

export default AllBreeds;
