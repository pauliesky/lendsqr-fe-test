import { Box, Pagination, Typography } from "@mui/material";
import React from "react";

export const PageNavigation2 = ({
  page,
  totalRecords,
  handlePageChange,
  rowsPerPage = 5,
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#62635E" }}>
        Showing{" "}
        {totalRecords == 0 ? 0 : Math.max((page - 1) * rowsPerPage + 1, 0)}-
        {Math.min((page - 1) * rowsPerPage + rowsPerPage, totalRecords)} of{" "}
        {totalRecords}
      </Typography>
      <Pagination
        count={Math.ceil(totalRecords / rowsPerPage)} // Calculate the number of pages
        variant="outlined"
        page={page} // Adjust the page value to 1-based index
        onChange={handlePageChange} // Adjust the page value to 0-based index
        color="primary"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: 0, // Remove border-radius
            margin: "0", // Remove margins between pagination items
          },
        }}
      />
    </Box>
  );
};
