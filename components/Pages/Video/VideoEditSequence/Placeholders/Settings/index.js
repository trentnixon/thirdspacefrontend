import { ContainerHorizontalEntryPoint } from "./ContainerHorizontalEntryPoint";
import { SelectFPS } from "./FPS";
import { ImageScale } from "./ImageScale";
import { LogoPosition } from "./LogoPosition";
import { SelectAFontWeight } from "./FontWeight";
import { H3 } from "../../../../../ui/type";
export const SequenceSettings = (props) => {
  return (
    <>
      <SelectFPS {...props} />
      <H3>Font Settings</H3>
      <SelectAFontWeight {...props} />
      <H3>Logo Positioning</H3>
      <LogoPosition {...props} />
      <H3>Over Lay Settings</H3>
 
      <ContainerHorizontalEntryPoint {...props} />

      <H3>Background Settings</H3>
      <ImageScale {...props} />
    </>
  );
};
