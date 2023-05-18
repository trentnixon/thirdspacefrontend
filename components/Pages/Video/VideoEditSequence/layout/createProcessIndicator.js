import { Table } from "@mantine/core";
import { P } from "../../../../ui/type";
import {
  IconCircleCheck,
  IconQuestionCircle,
} from "@tabler/icons-react";

export const CreateProcessIndicator = ({
  video_placeholders,
  VideoModule,
  CreateSequenceOBJ = {
    DATA: {}
  }
}) => {
//console.log("video_placeholders, VideoModule, videoObjects");
//console.log(video_placeholders, VideoModule, CreateSequenceOBJ);

  function hasKey(obj, key) {
    return obj.DATA.fields && obj.DATA.fields.some((field) => field.name === key);
  }

  return (
    <>
      <P align={"right"}>{VideoModule.Name}</P>

      <Table>
        <thead>
          <tr>
            <th>Asset</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {video_placeholders.map((PlaceHolder, i) => {
          //console.log("PlaceHolder ", PlaceHolder.attributes.Name);
            return (
              <tr key={i}>
                <td>{PlaceHolder.attributes.Name}</td>
                <td>
                  {hasKey(
                    CreateSequenceOBJ,
                    PlaceHolder.attributes.ComponentName
                  ) ? (
                    <IconCircleCheck color={"green"} />
                  ) : (
                    <IconQuestionCircle color={"yellow"} />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
