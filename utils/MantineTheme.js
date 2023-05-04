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
            html:"#071721",
            background:"#1B2730",
            container:"#2E3E4A",
            copy:"#ffffff",
            ui:[
                "#1F9DE4",
                "#f4ba41",  
                "#ec8b33"
              ],
        }, 
      }}
    > 
      {props.children}
    </MantineProvider>
  );
};
