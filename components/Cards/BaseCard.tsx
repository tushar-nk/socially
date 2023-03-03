import React, { ReactNode } from "react";

import { Card, CardContent, Box, Typography } from "@mui/material";
interface Props {
  title: string;
  children: ReactNode;
}
const BaseCard = ({ title, children }: Props) => {
  return (
    <Card>
      {title && (
        <Box p={2} display="flex" alignItems="center">
          <Typography variant="h4">{title}</Typography>
        </Box>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
