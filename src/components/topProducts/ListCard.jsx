import {
  Box,
  LinearProgress,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
const classes = "!font-poppins !text-sm !leading-5 !text-[#444A6D]";
const ListCard = ({ product }) => {
  return (
    <TableRow key={product.id}>
      <TableCell className={classes}>
        {product.id < 10 ? `0${product.id}` : product.id}
      </TableCell>
      <TableCell className={classes}>{product.name}</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LinearProgress
            variant="determinate"
            value={product.popularity}
            sx={{ width: "100%", height: 6, borderRadius: 5 }}
            color={product.color}
          />
        </Box>
      </TableCell>
      <TableCell>
        <Typography
          sx={{
            border: `${product.color}.light`,
            color: `${product.color}.dark`,
            p: "4px 8px",
            borderRadius: 2,
            fontSize: 14,
          }}
          className="!bg-white border !px-4 !py-1"
        >
          {product.sales}%
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default ListCard;
