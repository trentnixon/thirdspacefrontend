import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

export const  PreviewSequence = () =>{
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
        modal in here
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}

