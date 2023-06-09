import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import BannerImage from "../assets/banner.png";

const Banner = () => {
    <Box sx={{ mt: { lg: "212px", xs: '70px'}, ml: { sm: '50px'} }} position="relative" p="20px">
        <Typography variant="h1" fontFamily="Roboto" fontSize="64px" fontWeight="bold" color="#2a62e3" mb="20px">
            Build Your Body into a Machine
        </Typography>
        <Typography variant="h2" fontFamily="Roboto" fontSize="32px" fontWeight="bold" color="#2a62e3" mb="20px">
            Get the body you've always wanted
        </Typography>
        <Typography variant="h3" fontFamily="Roboto" fontSize="24px" fontWeight="bold" color="#2a62e3" mb="20px">
            Subscribe for a personalized workout and nutrition plan
        </Typography>
        <img src={BannerImage} alt="banner" style={{ width: '100%', height: '100%', position: 'absolute', top: '0px', right: '0px'}} />

    </Box>

}; 

export default Banner;
