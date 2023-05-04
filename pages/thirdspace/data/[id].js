import { Container, Table } from "@mantine/core";
import MembersShell from "../../../components/template/MembersShell";
import { BTN_FUNC } from "../../../components/ui/btn";
import { UIPaperWrapper } from "../../../components/ui/Containers";
import { H1, P } from "../../../components/ui/type";
import { fetcher } from "../../../lib/api";
const qs = require("qs");
const query = qs.stringify(
  {
    populate: [
      "campaigns ",
      "videos",
      "videos.campaign",
      "videos.dataset",
      "videos.renders",
      "data_set_rows",
      "data_set_rows.data_set_items",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

export const getStaticPaths = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/datasets`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  let Response = response.data;

  const path = Response.map((d, i) => {
    return {
      params: {
        id: d.id.toString(),
      },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

const ViewDataset = ({ dataset }) => {
  console.log(dataset);
  return (
    <MembersShell>
      <Container size={"xl"}>
        <H1>{dataset.Name}</H1>
        <P>{dataset.campaigns.data[0].attributes.Name}</P>
      </Container>
      <Container size={"xl"}>
        <DatasetTable DATA={dataset.data_set_rows} />
      </Container>
    </MembersShell>
  );
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const id = params.id;
  //
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/datasets/${id}?${query}`,
    {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }
  );

  let dataset = response.data;

  return {
    props: {
      dataset: dataset.attributes,
    },
  };
}

export default ViewDataset;

const DatasetTable = ({ DATA }) => {
  
  const sortItemsByKey = (items) => {
    return items.sort((a, b) => {
      if (a.attributes.Key < b.attributes.Key) {
        return -1;
      }
      if (a.attributes.Key > b.attributes.Key) {
        return 1;
      }
      return 0;
    });
  };

  const FindHeaders = (items) => {
    const keys = sortItemsByKey(items[0].attributes.data_set_items.data).map(
      (item) => item.attributes.Key
    );
    return keys;
  };

  return (
    
    <UIPaperWrapper>
      <P textAlign={`right`}>Results {DATA.data.length}</P>
      <Table>
        <thead>
          <tr>
            {FindHeaders(DATA.data).map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {DATA.data.map((row, index) => {
            return (
              <tr key={index}>
                {sortItemsByKey(row.attributes.data_set_items.data).map(
                  (item, i) => {
                    return <td key={`id_${i}`}>{item.attributes.Value}</td>;
                  }
                )}
                <td>
                  <BTN_FUNC LABEL={`Edit`} HANDLE={() => {}} />
                </td>
                <td>
                  <BTN_FUNC LABEL={`Remove`} HANDLE={() => {}} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </UIPaperWrapper>
  );
};
