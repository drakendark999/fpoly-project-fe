import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface AlertToDoProps {
  title: string;
  headerAlert: string;
  bodyAlert: string;
  handleAccept: () => void;
  colorButton: string;
  colorAlert: string;
}

type Props = AlertToDoProps;

const AlerToDo: React.FunctionComponent<Props> = (props) => {
  const [openAlert, setOpenAlert] = useState(false);
  const { onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement | null>(null);

  const handleCancel = () => {
    setOpenAlert(false);
  };

  const handleAccept = () => {
    props.handleAccept();
    setOpenAlert(false);
  };

  return (
    <>
      <Button
        colorScheme={props.colorButton}
        onClick={() => setOpenAlert(true)}>
        {props.title}
      </Button>

      <AlertDialog
        isOpen={openAlert}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {props.headerAlert}
            </AlertDialogHeader>

            <AlertDialogBody>{props.bodyAlert}</AlertDialogBody>

            <AlertDialogFooter>
              <Button
                colorScheme={props.colorAlert}
                onClick={handleCancel}
                ref={cancelRef}>
                Hủy
              </Button>
              <Button
                colorScheme={props.colorAlert}
                onClick={handleAccept}
                ml={3}>
                Xác nhận
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlerToDo;
