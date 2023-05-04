import { Avatar, Container, Group, Space, Text, Title } from "@mantine/core";
import { Wrapper } from "./Containers";
export const PageTitle = (props) => {
  const { Copy, ICON } = props;
  return (
    <Wrapper>
      <Group position={"apart"}>
        <Title
          order={1}
          transform="uppercase"
          sx={(theme) => ({
            color: theme.colors[theme.primaryColor][2],
            fontFamily: theme.fontFamily,
          })}
        >
          {Copy}
        </Title>
      </Group>
      <Space h={10} /> 
    </Wrapper>
  );
};

export const H1 = (props) => {
  return (
    <Title
      transform="uppercase"
      sx={(theme) => ({
        color: theme.colors.copy,
        fontFamily: theme.fontFamily,
        fontWeight: 400,

        padding: '0.5rem',
        position: 'relative',
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-0rem',
          height: '100%',
          width: '1px',
          background: `linear-gradient(to bottom, ${theme.colors.html}, ${theme.colors.ui[1]}, ${theme.colors.html})`,

        },
      })}
    >
      {props.children}
    </Title>
  );
};





export const H2 = (props) => {
  return (
    <Title
      transform="uppercase"
      sx={(theme) => ({
        color: theme.colors.copy,
        fontFamily: theme.fontFamily,
        fontWeight: 400,
        fontSize:'1.5em',
        padding: '0.5rem',
        position: 'relative',
        '::after': {
          content: '""',
          position: 'absolute',
          bottom: '-0rem', // adjust the position of the line
          left: '0',
          width: '100%', // stretch the line horizontally
          height: '1px',
          background: `linear-gradient(to right, ${theme.colors.html}, ${theme.colors.ui[1]}, ${theme.colors.html})`, // change to horizontal gradient
        },
      })}
    >
      {props.children}
    </Title>
  );
};


export const H3 = (props) => {

  return (
    <Title
      order={5}
      mt={20}
      mb={10}
      transform="uppercase"
      sx={(theme) => ({
        color: theme.colors.copy,
        fontFamily: theme.fontFamily,
      })}
    >
      {props.children}
    </Title>
  );
};

export const H4 = (props) => {

  return (
    <Title
      order={5}
      mt={10}
      mb={10}
      transform="uppercase"
      sx={(theme) => ({
        color: theme.colors.copy,
        fontWeight:400,
        fontFamily: theme.fontFamily,
      })}
    >
      {props.children}
    </Title>
  );
};

export const P = (props) => {
  const {
    color = false,
    Weight = 400,
    size = "md",
    marginBottom = "0",
    textAlign = "left",
    lineHeight = "1.4em",
    textTransform = "normal",
    fontStyle = "normal",
    width='auto'
  } = props;
  return (
    <Text
      size={size}
      sx={(theme) => ({
        color: color === false ? theme.colors.copy:theme.colors.ui[color],
        fontFamily: theme.fontFamily,
        fontWeight: Weight,
        lineHeight: lineHeight,
        textTransform: textTransform,
        marginBottom: marginBottom,
        textAlign: textAlign,
        fontStyle: fontStyle,
        width:width
      })}
    >
      {props.children}
    </Text>
  );
};
