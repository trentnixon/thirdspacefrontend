import { useEffect, useState } from "react";

import { Group, Table, TextInput } from "@mantine/core";
import { BTN_FUNC } from "../../ui/btn";
import { H1, P } from "../../ui/type";
import { useCreateDataset } from "../../../hooks/useDataset";
import { Loading } from "../../ui/Loading";
import { UIPaperWrapper } from "../../ui/Containers";

export const UploadNewDataset = ({ ASSIGNTO }) => {
  const [fileData, setFileData] = useState(null);
  const [UploadedData, setUploadedData] = useState(null);
  const [dataset, createDataset, working] = useCreateDataset();
  const [DataSetLabel, setDataSetLabel] = useState("");
  // Functions

  const resetData = () => {
    setFileData(null);
    setUploadedData(null);
  };

  const UploadDataset = () => {
    const NAME =DataSetLabel;
    const ID = ASSIGNTO;

    createDataset(UploadedData, ID, NAME);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    // Check file type
    if (file.type !== "application/json" && file.type !== "text/csv") {
      console.log("Invalid file type. Only JSON or CSV files are allowed.");
      return;
    }

    // Read file data
    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileContent = e.target.result;

      // Process file data
      if (file.type === "application/json") {
        const jsonData = JSON.parse(fileContent);

        console.log(jsonData); // do something with JSON data
        setUploadedData(jsonData);
      } else {
        const csvData = await processCsvFile(fileContent);
        console.log(csvData); // do something with CSV data
        setUploadedData(csvData);
      }
    };
    reader.readAsText(file);
  };

  const processCsvFile = async (fileContent) => {
    // Process CSV file data
    const csvData = [];
    const lines = fileContent.split("\n");
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(",");
      if (line.length === headers.length) {
        const item = {};
        for (let j = 0; j < headers.length; j++) {
          item[headers[j].trim()] = line[j].trim();
        }
        csvData.push(item);
      }
    }
    return csvData;
  };

  useEffect(() => {
    console.log(dataset);
  }, [dataset]);

  if (working) {
    return <Loading />;
  }
  if (dataset !== null) {
    return (
      <UIPaperWrapper>
        <Group position="apart">
          {UploadedData === null ? (
            <input type="file" onChange={handleFileUpload} />
          ) : (
            <P>
              Dataset : {dataset.data.attributes.Name} has been added to this
              Campaign
            </P>
          )}
        </Group>
      </UIPaperWrapper>
    );
  }
  return (
    <div>
      {DataSetLabel}
      <DatasetName
        DataSetLabel={DataSetLabel}
        setDataSetLabel={setDataSetLabel}
      />
      <UIPaperWrapper>
        <Group position="apart">
          {UploadedData === null ? (
            <input type="file" onChange={handleFileUpload} />
          ) : (
            <P>{dataset?.data?.attributes?.Name}</P>
          )}
        </Group>
      </UIPaperWrapper>

      <JsonTable jsonData={UploadedData} />

      {UploadedData !== null ? (
        <BTNGROUP resetData={resetData} UploadDataset={UploadDataset} DataSetLabel={DataSetLabel} />
      ) : (
        false
      )}
    </div>
  );
};

function DatasetName({ DataSetLabel, setDataSetLabel }) {
  return (
    <TextInput
      placeholder="Dataset Label"
      label="Dataset Label"
      description="Provide an Identifing label for your dataset for later use."
      withAsterisk
      value={DataSetLabel}
      onChange={(event) => setDataSetLabel(event.currentTarget.value)}
    />
  );
}

const BTNGROUP = ({ resetData, UploadDataset, DataSetLabel }) => {
  console.log("DataSetLabel", DataSetLabel)
  return (
    <Group>
      <BTN_FUNC LABEL={`Reset`} HANDLE={resetData} />
      <BTN_FUNC
        LABEL={`Upload`}
        HANDLE={UploadDataset}
        isDisabled={!DataSetLabel || !DataSetLabel.trim()}
      />
    </Group>
  );
};

// Component to display JSON data
function JsonTable({ jsonData }) {
  if (!jsonData) return null;

  const headers = Object.keys(jsonData[0]);

  return (
    <UIPaperWrapper>
      <P textAlign={`right`}>Results {jsonData.length}</P>
      <Table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </UIPaperWrapper>
  );
}
