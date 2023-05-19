import { useRouter } from "next/router";
import { Card, Group, createStyles } from "@mantine/core";
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

export function VideoCard(props) {
  const { Video } = props;
  const { classes, theme } = useStyles();
  const router = useRouter();
  console.log(Video);

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        {/*  <Image src={image} alt={title} height={180} /> */}
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <H3>{Video.attributes.Name}</H3>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <P>{Video.attributes.Description}</P>
      </Card.Section>
      <Group mt="xs">
        <BTN_LINK
          HREF={`/craft/${router.query.brandid}/${router.query.campaignid}/${Video.id}`}
          LABEL={`View`}
        />
      </Group>
    </Card>
  );
}
