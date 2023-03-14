import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import LogoC from "../../components/Links/LogoC";
import SignUpF from "../../layouts/forms/SignUpF";
import PublicLayout from "../../layouts/PublicLayout";

function SignUpP() {
  return (
    <PublicLayout>
      <Grid item xs={12} sm={10} md={6} xl={4} lg={4} margin="auto">
        <Box p={2}>
          <LogoC />
        </Box>
        <SignUpF />
      </Grid>
    </PublicLayout>
  );
}

export default SignUpP;
