// import React from "react";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { ViewIcon } from "@chakra-ui/icons";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   IconButton,
//   Button,
//   Text,
//   Image,
// } from "@chakra-ui/react";

// const ProfileModal = ({ user, children }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       {children ? (
//         <span onClick={onOpen}>{children}</span>
//       ) : (
//         <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
//       )}

//       <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay />
//         <ModalContent h="410px">
//           <ModalHeader fontSize="25px" d="flex" justifyContent="center">
//             {user.name}
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody d="flex" flexDir="column" alignSelf="center">
//             <Image
//               borderRadius="full"
//               boxSize="230px"
//               src={user.pic}
//               alt={user.name}
//             />
//             <Text fontSize={{ base: "20px", md: "20px" }}>
//               Email: {user.email}
//             </Text>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
// export default ProfileModal;

import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}
      <Modal size="md" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="28px" display="flex" justifyContent="center">
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text fontSize={{ base: "20px", md: "20px" }}>
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
