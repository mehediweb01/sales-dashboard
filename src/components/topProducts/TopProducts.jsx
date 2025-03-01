import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { topProductsData } from "../../utils/db";
import ListCard from "./ListCard";
const classes = "!font-poppins !text-[13px] !leading-4 !text-secondary";
const TopProducts = () => {
  return (
    <div>
      <h2 className="text-blueDark text-xl font-poppins font-semibold leading-8 mb-8">
        Top Products
      </h2>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 3, boxShadow: 3 }}
        className="!w-full"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes}>#</TableCell>
              <TableCell className={classes}>Name</TableCell>
              <TableCell className={classes}>Popularity</TableCell>
              <TableCell className={classes}>Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topProductsData.map((item) => (
              <ListCard key={item.id} product={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TopProducts;
