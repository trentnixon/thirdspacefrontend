import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import { setFakeToken } from "../../lib/auth";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(http://localhost:1337/uploads/3rdspace_Vendingmachine_1cc01a9774.jpg?updated_at=2023-02-23T00:12:30.896Z)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export function AuthenticationImage(props) {
  const { classes } = useStyles();
  const { setrender, isUser } = props;

  const handleForm = (event) => {
    console.log("event");
    event.preventDefault();
    setFakeToken(true);
    setrender(true);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          3rdSpace.ai
        </Title>

        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
        />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={handleForm}>
          Login
        </Button>
      </Paper>
    </div>
  );
}
