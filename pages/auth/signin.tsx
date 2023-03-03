import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import LogoC from "../../components/Links/LogoC";
import SigninF from "../../layouts/forms/SigninF";
import PublicLayout from "../../layouts/PublicLayout";

const SignInP = () => {
  return (
    <PublicLayout>
      <Grid item xs={10} md={6} lg={4} px={8}>
        <Box p={2}>
          <LogoC />
        </Box>
        <SigninF />
      </Grid>
    </PublicLayout>
  );
};

export default SignInP;
