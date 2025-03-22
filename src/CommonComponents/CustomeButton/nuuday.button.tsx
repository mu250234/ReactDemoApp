import React from "react";

import {
  Button,
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from "@mui/material";

interface ButtonProps {
  label: string;
  color: "cool" | "apple";
}

declare module "@mui/material/styles" {
  interface CustomPalette {
    cool: PaletteColorOptions;
    apple: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    cool: true;
    apple: true;
    steelBlue: true;
    violet: true;
  }
}
const NuudayButton: React.FC<ButtonProps> = ({ color, label }) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      cool: createColor("#15bea4"),
      apple: createColor("#0000be"),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button color={color} variant="contained">
        {label}
      </Button>
    </ThemeProvider>
  );
};

export default NuudayButton;
