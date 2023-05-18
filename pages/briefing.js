import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group, 
  ActionIcon,
  rem,
  Container,
  Select,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
//import { ContactIconsList } from '../ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,

    padding: `calc(${theme.spacing.xl} * 2.5)`,

    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: "80%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.lg,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    alignContent: "center",
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function Briefing() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Title className={classes.title}>Briefing Form</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Introducing the AI Assembler - your ultimate solution for creating
            high-quality videos in no time! Our platform streamlines the
            video-making process, allowing you to select your campaign and
            choose a pre-made template from our vast library. Simply upload your
            CSV file, click &quot;render&quot;, and we&apos;ll take care of the rest.
            Sit back and relax while we prepare your videos for use. We&apos;ll
            notify you by email as soon as they&apos;re ready. Start creating
            professional-grade videos today with the AI Assembler.
          </Text>
        </div>
        <div className={classes.form}>
          <Container size={`100%`} p={0} m={0}>
            <h1>Create a Campaign</h1>
            <h3>Client: TEST</h3>
            <TextInput
              label="Video Name"
              placeholder="Create a unique video name for this project"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <SelectCamapgin />
            <SelectTemplate />
            <Group position="right" mt="md">
              <Button className={classes.control}>Upload CSV</Button>
            </Group>
            <h3>Checking CSV [tick]</h3>

            <Group position="right" mt="md">
              <Button className={classes.control}>Submit Render</Button>
            </Group>
          </Container>
        </div>
      </SimpleGrid>
    </div>
  );
}

const SelectCamapgin = () => {
  return (
    <Select
      label="Select a Campaign"
      placeholder="Pick one"
      data={[
        { value: "Campaign 1", label: "Campaign 1" },
        { value: "Campaign 2", label: "Campaign 2" },
      ]}
    />
  );
}; 

const SelectTemplate = () => {
  return (
    <Select
      label="Select a Template"
      placeholder="Pick one"
      data={[
        { value: "Template 1", label: "Template 1" },
        { value: "Template 2", label: "Template 2" },
      ]}
    />
  );
};
