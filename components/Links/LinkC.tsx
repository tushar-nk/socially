import { ReactNode } from "react";
import {
  Link,
  Typography,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";

import React from "react";
import { SystemProps } from "@mui/system";
// import * as Systemprops from "@mui/system";
interface type {
  children?: ReactNode;
  label?: string;
  icon?: string;
  labelProps?: TypographyPropsVariantOverrides;
  iconHeight?: number;
  iconWidth?: number;
  href: string;
  variant?: any;
}
function LinkC({
  children,
  label,
  labelProps,
  icon,
  iconHeight,
  iconWidth,
  href,
}: type) {
  return (
    <Link component="div" underline="none">
      {children ? (
        children
      ) : (
        <NextLink href={href}>
          {icon && (
            <Image
              height={iconHeight || "60"}
              width={iconWidth || "150"}
              src={icon}
              alt="icon"
            />
          )}{" "}
          {label && <Typography {...labelProps}>{label}</Typography>}
        </NextLink>
      )}
    </Link>
  );
}

export default LinkC;
