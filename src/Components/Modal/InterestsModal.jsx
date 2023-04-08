import { useState } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

export default function InterestsModal({
  isEditing,
  setIsEditing,
  interests,
  setInterests,
}) {
  const { isOpen, onOpen, onClose, setProfileDetails } = useDisclosure();

  const handleClose = () => {
    onClose();
    setIsEditing(false);
  };

  const [tempInterests, setTempInterests] = useState(interests);

  const handleSave = () => {
    onClose();
    setIsEditing(false);
    setInterests(tempInterests);
    fetch(`${import.meta.env.VITE_BASE_URL}/profile/interests`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
      body: JSON.stringify({
        interests: tempInterests
          .filter((item) => item.isSelected)
          .map((item) => item.category),
      }),
    });
  };

  const handleSelect = (e) => {
    const interest = e.target.innerText;
    console.log(interest);
    const newInterests = tempInterests.map((item) => {
      if (item.category === interest) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      } else {
        return item;
      }
    });
    setTempInterests(newInterests);
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={true}
        isOpen={isEditing}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Create your account</ModalHeader> */}
          <ModalBody>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr",
              }}
              gridRowGap="4"
              gridColumnGap="4"
              px="6"
              pt="8"
            >
              {tempInterests.map((interest, index) => {
                return (
                  <Button
                    key={index}
                    size="sm"
                    _hover={{ bgColor: "orange.300" }}
                    onClick={handleSelect}
                    bgColor={interest.isSelected ? "orange" : "gray.100"}
                    textColor={interest.isSelected ? "white" : "black"}
                    _selected={{ bgColor: "orange", transition: "all 0.2s" }}
                  >
                    {interest.category}
                  </Button>
                );
              })}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleClose}
              mr={3}
              bgColor="black"
              textColor="white"
              size="sm"
              _hover={{ bgColor: "gray.600" }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="orange"
              onClick={handleSave}
              px="6"
              bgColor="orange"
              size="sm"
              _hover={{ bgColor: "orange.300" }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
