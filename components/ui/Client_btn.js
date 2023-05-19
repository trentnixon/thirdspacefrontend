import {
  Button,
  useMantineTheme,
  createStyles,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from 'next/router'
import { IconAdjustments } from "@tabler/icons-react";
const useStyles = createStyles((theme, _params, getRef) => ({
  standard: {
    borderColor: theme.colors.ui[0],
    color: theme.colors.copy,

    "&:hover": {
      backgroundColor: theme.colors.ui[0],
      color: theme.colors.copy,
      transition: "background-color 0.5s, color 0.5s",
    },
  },
  error: {
    borderColor: theme.colors.ui[0],
    color: theme.colors.copy,
    "&:hover": {
      backgroundColor: theme.colors.ui[0],
      color: theme.colors.copy,
      transition: "background-color 0.5s, color 0.5s",
    },
  },
  success: {
    borderColor: theme.colors.ui[1],
    color: theme.colors.ui[1],
    "&:hover": {
      backgroundColor: theme.colors.ui[1],
      color: theme.colors.copy,
      transition: "background-color 0.5s, color 0.5s",
    },
  },
  cta: {
    borderColor: theme.colors.ui[2],
    color: theme.colors.ui[2],
    "&:hover": {
      backgroundColor: theme.colors.ui[2],
      color: theme.colors.copy,
      transition: "background-color 0.5s, color 0.5s",
    },
  },
}));

export const BTN_FUNC = ({
  LABEL,
  HANDLE,
  isDisabled = false,
  THEME = "standard",
}) => {
  const { classes } = useStyles();
  return (
    <Button
      type="button"

      onClick={HANDLE}
      disabled={isDisabled}
      className={classes[THEME]}
    >
      {LABEL}
    </Button>
  );
};

export const BTN_LINK = ({
  LABEL,
  HREF,
  isDisabled = false,
  THEME = "standard",
}) => {
  const { classes } = useStyles();
  return (
    <Link href={HREF} passHref>
      <Button
        type="button"
        
        className={classes[THEME]}
        disabled={isDisabled}
      >
        {LABEL}
      </Button>
    </Link>
  );
};

export const BTN_ICON_FUNC = ({ HANDLE, ICON = false, THEME = "standard" }) => {
  const { classes } = useStyles();
  return <ActionIcon onClick={HANDLE}>{ICON}</ActionIcon>;
};

export const BTN_ICON_LINK = ({HREF,ICON = false}) => {
  return (
    <Link href={HREF} passHref>
    <ActionIcon>
      {ICON}
    </ActionIcon>
    </Link>
  );
};


/* PRE BUILT BUTTONS*/


export const PREBUILT_BACKBTN = ()=>{
  const router = useRouter()
  return <BTN_FUNC HANDLE={() => router.back()} LABEL={`Back`} />
}