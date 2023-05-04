import { Group, Switch } from "@mantine/core"

export const SwitchDynamicToStatic = ({setInputType, inputType})=>{
    return(
        
        <Group position="right" mt={10}>
          <Switch
            checked={inputType === "dynamic"}
            onChange={() =>
              setInputType(inputType === "static" ? "dynamic" : "static")
            }
            label="Dynamic Input"
          />
        </Group>
    )
}