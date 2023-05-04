import { Group, Switch } from "@mantine/core"

export const SwitchCanBeNull = ({setInclude, include})=>{
    
    console.log("include", include)
    return(
        
        <Group position="right" mt={10}>
          <Switch
            checked={include}
            onChange={(event) =>
                setInclude(event.currentTarget.checked)
            }
            label="Include Audio"
          />
        </Group>
    )
}