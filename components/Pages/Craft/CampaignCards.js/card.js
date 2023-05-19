import { useRouter } from "next/router";
import { Card, Group, Badge, createStyles } from "@mantine/core";
import { H3, P } from "../../../ui/Client_type";
import { BTN_LINK } from "../../../ui/Client_btn";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.client.html,
  },

  section: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));

export function CampaignCard(props) {
  const { Campaign } = props;
  const { classes, theme } = useStyles();
  const router = useRouter();
  console.log(Campaign.attributes);
  const features = Campaign.attributes.videos.data.map((badge) => (
    <Badge
      color={theme.colorScheme === "dark" ? "dark" : "dark"}
      key={badge.attributes.Name}
    >
      {badge.attributes.Name}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        {/*  <Image src={image} alt={title} height={180} /> */}
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <H3>{Campaign.attributes.Name}</H3>

          <Badge size="sm">
            Videos : {Campaign.attributes.videos.data.length}
          </Badge>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <P>{Campaign.attributes.Description}</P>

        <Group spacing={7} mt={20}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <BTN_LINK
          HREF={`/craft/${router.query.brandid}/${Campaign.id}`}
          LABEL={`View`}
        />
      </Group>
    </Card>
  );
}
