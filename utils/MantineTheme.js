import { MantineProvider } from "@mantine/core";

export const MantineProviderWrapper = (props) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
        fontFamily: "Chivo,sans-serif",
        colors: {
          html: "#071721",
          background: "#1B2730",
          container: "#2E3E4A",
          copy: "#ffffff",
          ui: ["#1F9DE4", "#f4ba41", "#ec8b33"],
          client: {
            html: "#fdfcfc",
            background: "#95b1a3",
            container: "#8796a6",
            copy: "#292e2e",
            ui: ["#759999", "#506262", "#292e2e"],
          },
        },
        
      }}
    >
      {props.children}
    </MantineProvider>
  );
};
