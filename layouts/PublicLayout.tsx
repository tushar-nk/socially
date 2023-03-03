import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import Lottie from "react-lottie";
import * as animationData from "../public/json/Background_2.json";
interface type {
  children: ReactNode;
}
function PublicLayout({ children }: type) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Head>
        <title>Socially</title>
        <meta name="description" content="Socially Webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        xs={12}
        lg={12}
        style={{
          height: "100vh",
        }}
        spacing={0}
        display="flex"
        alignItems="center"
      >
        <Box
          position="absolute"
          width="100%"
          height="100vh"
          display="flex"
          alignItems="center"
        >
          <Lottie
            options={defaultOptions}
            speed={1}
            isClickToPauseDisabled
            height="100%"
            width="65%"
          />
        </Box>
        {children}
      </Grid>
    </>
  );
}
export default PublicLayout;
