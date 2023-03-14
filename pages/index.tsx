import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6}>
        <Typography variant="h1" color="MenuText">
          Welcome to socially
        </Typography>
      </Grid>
    </Grid>
  );
}
