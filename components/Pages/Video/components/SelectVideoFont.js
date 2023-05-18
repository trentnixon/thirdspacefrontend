import { Select } from "@mantine/core"

export const SelectVideoFont = (props)=>{
    const {fonts, OBJ, handleFontChange} = props
    
    const CreateFontARR = (DATA) => {
        const ARR = [];
        DATA.map((d, i) => {
          ARR.push({ value: d.attributes.Name, label: d.attributes.Name });
        });
        return ARR;
      };
    const fontData = CreateFontARR(fonts);


    return(
        <Select
          data={fontData}
          label="Select font"
          description="Which font would you like the video to use?"
          required
          name="dataset"
          value={OBJ.Settings.Font.fontFamily}
          onChange={handleFontChange}
        />
        
    )
}