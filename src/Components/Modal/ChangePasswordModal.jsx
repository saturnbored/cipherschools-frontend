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
  Heading,
  Input,
} from "@chakra-ui/react";

import PasswordInput from "../PasswordInput";

export default function ChangePasswordModal({
  isEditing,
  setIsEditing,
  profileDetails,
  setProfileDetails,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClose = () => {
    onClose();
    setIsEditing(false);
  };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = async () => {
    onClose();
    setIsEditing(false);
    console.log(newPassword);
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (newPassword.length < 5) {
      alert("Password must be at least 5 characters long");
      return;
    }
    let response = await fetch(`${import.meta.env.VITE_BASE_URL}/profile/password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
      }),
    });
    console.log(response);
    if (response.status === 200) {
      response = await response.json();
      setProfileDetails(response);
      alert("Password changed successfully");
    } else if(response.status === 401) {
      alert("Incorrect password");
    }
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
            <Box display="flex" flexDir="column" rowGap="4" pt="4">
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  Current Password
                </Heading>
                <PasswordInput
                  placeholder={`Enter Current Password`}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  value={currentPassword}
                  setValue={setCurrentPassword}
                />
              </Box>
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  New Password
                </Heading>
                <PasswordInput
                  placeholder={`Enter New Password`}
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  setValue={setNewPassword}
                />
              </Box>
              <Box>
                <Heading as="h5" size="sm" pb="2">
                  Confirm Password
                </Heading>
                <PasswordInput
                  placeholder={`Confirm New Password`}
                  onChange={(e) => {setConfirmPassword(e.target.value)
                    console.log(confirmPassword);
                  }}
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
              </Box>
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
