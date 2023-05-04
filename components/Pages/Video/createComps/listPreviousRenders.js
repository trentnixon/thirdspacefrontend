import { Group } from "@mantine/core";
import { UIPaperWrapper } from "../../../ui/Containers";
import { BTN_FUNC, BTN_ICON_FUNC } from "../../../ui/btn";
import { H3, P } from "../../../ui/type";
import { useEffect } from "react";
import { IconEye } from "@tabler/icons-react";

export const ListPreviousRenders = (props) => {
  const { renderedComps } = props;
  const OpenVideoInWIndow = (url) => {
    window.open(url);
  };

  useEffect(() => {}, [renderedComps]);

  return (
    <>
      <UIPaperWrapper>
        {renderedComps.map((renders, i) => {
          return (
            <Group key={i} position="apart" mb={5}>
              <P size={`xs`}>{renders.attributes.Name}</P>

              <BTN_ICON_FUNC
                ICON={<IconEye />}
                HANDLE={() => {
                  OpenVideoInWIndow(renders.attributes.Download ?renders.attributes.Download:renders.attributes.URL);
                }}
                isDisabled={renders.attributes.Download === null ? true : false}
              />
            </Group>
          );
        })}
      </UIPaperWrapper>
    </>
  );
};
