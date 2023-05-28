import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Box,
  Container,
} from "@mantine/core";
import { Nav } from "./MembersNav";

import { AILOGO } from "../../components/ui/svg/AILOGO";

export default function CraftShell(props) {
  const { children, SIDEBAR = undefined } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  //console.log(theme)
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.client.html,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer
          height={60}
          p="md"
          style={{
            background: theme.colors.client.background,
            borderTop: `1px solid ${theme.colors.client.html}`,
          }}
        >
          Application footer
        </Footer>
      }
      header={
        <Header
          height={{ base: 50, md: 70 }}
          p="md"
          style={{
            background: theme.colors.client.background,
            borderBottom: `1px solid ${theme.colors.client.html}`,
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.client.html}
                mr="xl"
              />
            </MediaQuery>
            <AILOGO />
          </div>
        </Header>
      }
    >
        <Container>{children}</Container>
      
    </AppShell>
  );
}
