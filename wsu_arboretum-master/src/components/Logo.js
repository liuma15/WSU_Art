import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../img/arboretum_logo.jpg"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={logo} />
    </Box>
  );
}
