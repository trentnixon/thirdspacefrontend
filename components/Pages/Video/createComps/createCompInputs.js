import { useState } from 'react';
import { Group, Input } from '@mantine/core';
import { UIPaperWrapper } from '../../../ui/Containers';
import { H3 } from '../../../ui/type';
import { IconHexagons } from '@tabler/icons-react';
import { BTN_FUNC } from '../../../ui/btn';

export const CreateCompInputs = (props) => {
  const { handleCreateComp, isComplete } = props;
  const [inputName, setInputName] = useState('');
  const [inputClicked, setInputClicked] = useState(false);

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleClick = () => {
    setInputClicked(true);
    handleCreateComp(inputName);
  };

  return (
    <>
      <H3>Actions</H3>
      <UIPaperWrapper>
        <Group position="apart">
          {!inputClicked ? (
            <Input
              icon={<IconHexagons />}
              variant="filled"
              placeholder="Comp Title"
              value={inputName}
              onChange={handleInputChange}
            />
          ) : (
            <div>{inputName}</div>
          )}
          {isComplete ? (
            <BTN_FUNC
              LABEL={`Create`}
              HANDLE={handleClick}
              isDisabled={inputName.trim() === ''}
            />
          ) : (
            <BTN_FUNC
              LABEL={`Create`}
              HANDLE={handleClick}
              isDisabled={inputName.trim() === ''}
            />
          )}
        </Group>
      </UIPaperWrapper>
    </>
  );
};
