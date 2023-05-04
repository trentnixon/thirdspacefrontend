import { Tabs } from "@mantine/core";
import { IconHexagons, IconSettings } from "@tabler/icons-react";
import { AddNewSequence } from "../AddNewSequence/AddSequence";
import { InVideoSettings } from "../VideoSettings";

export const RightPanelTabs = (props) => {
  return (
    <Tabs defaultValue="modules" variant="pills">
      <Tabs.List position="right">
        <Tabs.Tab
          value="modules"
          icon={<IconHexagons size="0.8rem" />}
          sx={(theme) => ({
            color: theme.colors.ui[1],
            "&[data-active]": {
              backgroundColor: theme.colors.ui[0],
            },
          })}
        ></Tabs.Tab>
        <Tabs.Tab
          value="settings"
          icon={<IconSettings size="0.8rem" />}
          sx={(theme) => ({
            color: theme.colors.ui[1],
            "&[data-active]": {
              backgroundColor: theme.colors.ui[0],
            },
          })}
        ></Tabs.Tab>
        
      </Tabs.List>

      <Tabs.Panel value="modules" pt="xs">
        <AddNewSequence {...props} />
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        <InVideoSettings {...props} />
      </Tabs.Panel>
    </Tabs>
  );
};
