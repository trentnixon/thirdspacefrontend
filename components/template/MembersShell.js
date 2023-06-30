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
} from "@mantine/core";
import { Nav } from "./MembersNav";

import { AILOGO } from "../../components/ui/svg/AILOGO";

export default function MembersShell(props) {
  
  const { children,SIDEBAR=undefined } = props
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.html,
        },
      }} 
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          style={{ background: theme.colors.background }}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 230 }}
        >
          <Nav />
        </Navbar>
      }
      
      aside={
        SIDEBAR === undefined ? false:
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 100, lg: 200 }}
            style={{ background: theme.colors.html }}
          >
           {SIDEBAR}
          </Aside>
        </MediaQuery>
      }
     /*  footer={
        <Footer
          height={60}
          p="md"
          style={{
            background: theme.colors.background,
            borderTop: `1px solid ${theme.colors.html}`,
          }}
        >
          Application footer
        </Footer>
      } */
      header={
        <Header
          height={{ base: 50, md: 70 }}
          p="md"
          style={{
            background: theme.colors.background,
            borderBottom: `1px solid ${theme.colors.html}`,
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
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <AILOGO />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
