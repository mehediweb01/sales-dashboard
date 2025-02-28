import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";

const cardClass = {
  width: "175px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto 0 auto",
};
const SideBarCard = () => {
  return (
    <Card
      sx={{ width: 280 }}
      className="!bg-primary !rounded-3xl relative py-8"
    >
      <div className="bg-gradient-to-r from-white/40 to-white/0 rounded-full h-40 w-1/2 absolute -top-20 -right-10"></div>
      <div className="bg-gradient-to-r from-white/40 to-white/0 rounded-full h-40 w-1/2 absolute -bottom-20 -left-10"></div>
      <CardActionArea sx={cardClass}>
        <div className="flex flex-col items-center">
          <img src="/images/white-logo.png" alt="white logo" />
          <h3 className="font-semibold mt-1 text-xl leading-8 font-poppins text-white">
            DealFlow Pro
          </h3>
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-white/80 font-poppins font-medium !text-xs !leading-4 text-center"
          >
            Get access to all features on tetumbas
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="w-full flex justify-center">
        <Button
          variant="contained"
          className="!w-1/2 !bg-white !text-primary !rounded-md !font-semibold !font-poppins !text-base !leading-6"
        >
          Get pro
        </Button>
      </div>
    </Card>
  );
};

export default SideBarCard;
