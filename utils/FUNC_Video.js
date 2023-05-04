// Video Compiler

export function mainCompileVideoObjects(timelineObj, dataset) {
  console.log(timelineObj, dataset)
  const DATASETROW = dataset.data_set_rows.data;

  function findValueByKey(objArray, targetKey) {
    const targetObj = objArray.find(
      (obj) => obj.Key.toLowerCase() === targetKey.toLowerCase()
    );
    return targetObj ? targetObj.Value : null;
  }

  const videoObjectsArray = DATASETROW.map((dataRow) => {
    const keyValuesArray = dataRow.attributes.data_set_items.data.map(
      (item) => ({
        Key: item.attributes.Key,
        Value: item.attributes.Value,
      })
    );
 
    const videoObjects = timelineObj.Series.map((sequence) => {
      const newData = {
        Duration: sequence.DATA.Duration || 150,
        Settings: sequence.DATA.Settings,
      };

      if (
        sequence.DATA &&
        sequence.DATA.fields &&
        sequence.DATA.fields.length > 0
      ) {
        sequence.DATA.fields.forEach((field) => {
          if (field.dynamic) {
            const foundValue = findValueByKey(keyValuesArray, field.key);
            newData[field.name] = foundValue;
          } else {
            newData[field.name] = field.value;
          }
        });
      }

      return {
        ...sequence,
        DATA: newData,
      };
    });

    return {
      Settings: timelineObj.Settings,
      Series: videoObjects,
    };
  });

  console.log("videoObjectsArray")
  console.log(videoObjectsArray)
  return videoObjectsArray;
}

// Preview  Compiler

export function miniCompileVideoObjects(userObj, dataSet) {
  try {
    const dataSetROW = dataSet.data_set_rows.data;

    // Define the findValueByKey function
    function findValueByKey(objArray, targetKey) {
      const targetObj = objArray.find(
        (obj) => obj.Key.toLowerCase() === targetKey.toLowerCase()
      );
      return targetObj ? targetObj.Value : null;
    }

    const newVideoObjects = dataSetROW.map((dataRow) => {
      const keyValuesArray = dataRow.attributes.data_set_items.data.map(
        (item) => ({
          Key: item.attributes.Key,
          Value: item.attributes.Value,
        })
      );

      const newData = {
        Duration: userObj.DATA.Duration || 150, // Add Duration field with default value 150
        Settings: userObj.DATA.Settings ,
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

      return {
        ...userObj,
        DATA: newData,
      };
    });

    return newVideoObjects;
  } catch (error) {
    console.error("Error processing video objects:", error);
    return [];
  }
}
