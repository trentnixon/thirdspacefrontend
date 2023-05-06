import * as Montserrat from "@remotion/google-fonts/Montserrat";
import * as Roboto from "@remotion/google-fonts/Roboto";
import * as OpenSans from "@remotion/google-fonts/OpenSans";
import * as Heebo from "@remotion/google-fonts/Heebo";

const fontImports = {
  Montserrat,
  Roboto,
  OpenSans,
  Heebo
};

export const preloadFonts = async () => {
  const fontFamilies = {};

  for (const [fontName, fontImport] of Object.entries(fontImports)) {
    const { fontFamily } = await fontImport.loadFont();
    fontFamilies[fontName] = fontFamily;
  }

  return fontFamilies;
};
