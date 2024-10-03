import { Typography } from "@mui/material";
import React from "react";

function Header () {
  return (
    <header>
      <h1>
        <Typography variant="h1">Infinite Media </Typography>
        <span role="img">{/* storing our clapper board emoji, import emoji set? &#x1F3AC; */}</span>
      </h1>
      <h3>Your Home for all your media related reviews</h3>
    </header>
  );
}

export default Header;