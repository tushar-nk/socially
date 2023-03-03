import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import LinkC from "./LinkC";

function LogoC() {
  return (
    <LinkC href="/">
      <Image height="60" width="150" src="/svg/logo.svg" alt="LOGO" />
    </LinkC>
  );
}

export default LogoC;
