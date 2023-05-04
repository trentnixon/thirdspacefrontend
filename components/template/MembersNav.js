import { Badge, Box, NavLink, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { lightenColor, darkenColor, getContrastColor } from "../../utils/FUNC_UI";
import { IconHome, IconBadgeTm, IconFlag2, IconMovie, IconAlignBoxBottomCenterFilled } from '@tabler/icons-react';

export const Nav = () => {
  const router = useRouter();
  const theme = useMantineTheme();
  const NAVOBJ = [
    {
      label: "Dashboard",
      href: "/",
      icon: <IconHome />,
    },
    {
      label: "Brands",
      href: "/brand",
      icon: <IconBadgeTm />,
    },
    {
      label: "Campaigns",
      href: "/campaign",
      icon: <IconFlag2 />,
    },
    {
      label: "Videos",
      href: "/video",
      icon: <IconMovie />,
    },
    {
      label: "Assets",
      href: "/assets",
      icon: <IconAlignBoxBottomCenterFilled />,
    },
  ];

  return (
    <Box>
      {NAVOBJ.map((nav, i) => {
        const isActive = nav.href === "/" ? router.pathname === nav.href : router.pathname.includes(nav.href);
        return (
          <Link href={`/thirdspace${nav.href}`} key={i} passHref style={{ textDecoration: 'none' }}>
            <NavLink
              label={nav.label}
              active={isActive}
              variant="filled"
              icon={nav.icon}
              my={10}
              px={5}
              py={7}
              sx={(theme) => ({
                color: getContrastColor(theme.colors.html),
                textDecoration: "none",
                fontWeight: 400,
                "&[data-active]&:hover,&:hover": {
                  borderRadius: "5px",
                  backgroundColor:darkenColor(theme.colors.ui[2]) ,
                  color:'white'
                },
                "&[data-active]": {
                  borderRadius: "5px",
                  backgroundColor:theme.colors.ui[2]
                },
                
              })}
            />
          </Link>
        );
      })}
    </Box>
  );
};
