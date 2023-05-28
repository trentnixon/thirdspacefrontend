import { useState, useEffect } from "react";
import { RemotionSequencePlayer } from "../../Player/SequencePreview";

export const SequencePreviewPlayer = ({ CreateSequenceOBJ, dataset, Video }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [videoObjects, setVideoObjects] = useState([]);

  useEffect(() => {
    miniCompileVideoObjects(CreateSequenceOBJ, dataset);
  }, [CreateSequenceOBJ, dataset]); 
 
  function miniCompileVideoObjects(userObj, dataset) { 
    try {
      const DATASETROW = dataset.data_set_rows.data;

      // Define the findValueByKey function
      function findValueByKey(objArray, targetKey) {
        const targetObj = objArray.find(
          (obj) => obj.Key.toLowerCase() === targetKey.toLowerCase()
        );
        return targetObj ? targetObj.Value : null;
      }

      const newVideoObjects = DATASETROW.map((dataRow) => {
        const keyValuesArray = dataRow.attributes.data_set_items.data.map(
          (item) => ({
            Key: item.attributes.Key,
            Value: item.attributes.Value,
          })
        );
      
        const newData = {
          Duration: userObj.DATA.Duration || 150, // Add Duration field with default value 150
          Settings: userObj.DATA.Settings , // Initialize Settings as an empty object
        };
      
        if (
          userObj.DATA &&
          userObj.DATA.fields &&
          userObj.DATA.fields.length > 0
        ) {
          userObj.DATA.fields.forEach((field) => {
            if (field.dynamic) {
              const foundValue = findValueByKey(keyValuesArray, field.key);
              newData[field.name] = foundValue;
            } else {
              newData[field.name] = field.value;
            }
          });
        }
    
      /*   console.log(
          {
          ...userObj,
          DATA: newData,
        }
        ) */
        return {
          ...userObj,
          DATA: newData,
        };
      });
      
      setErrorMessage(null);
      setVideoObjects(newVideoObjects);
    } catch (error) {
      setErrorMessage("An error occurred while processing the video objects.");
      console.error("Error processing video objects:", error);
      setVideoObjects([]);
    }
  }

//console.log(CreateSequenceOBJ)
  if (videoObjects.length === 0) return false;
  return (
    <div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <RemotionSequencePlayer  DATA={CreateSequenceOBJ} Settings={Video.data.attributes.OBJ.Settings} dataSet={dataset} />
    </div>
  );
};
