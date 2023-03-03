import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import LinkC from "../Links/LinkC";
import Link from "next/link";

function TopNavbar() {
  return (
    <AppBar position="fixed" color="default" sx={{ px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <LinkC href="/" icon={"/logo.svg"} />
        <Button variant="contained" color="primary">
          <Link href="/auth/login">Login</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavbar;
