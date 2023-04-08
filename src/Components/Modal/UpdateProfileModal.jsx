import {
  Box,
  Button,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const UpdateProfileModal = ({
  isOpen,
  onOpen,
  onClose,
  EditProfileIcon,
  profileDetails,
  setProfileDetails,
}) => {
  useEffect(() => {
    setFirstName(profileDetails?.name?.firstName);
    setLastName(profileDetails?.name?.lastName);
    setEmail(profileDetails?.email);
    setMobileNumber(profileDetails?.mobileNumber);
    setProfilePic(profileDetails?.pic);
  }, [profileDetails]);

  const [firstName, setFirstName] = useState(profileDetails?.name?.firstName);
  const [lastName, setLastName] = useState(profileDetails?.name?.lastName);
  const [email, setEmail] = useState(profileDetails?.email);
  const [profilePic, setProfilePic] = useState(profileDetails?.pic); 
  const [mobileNumber, setMobileNumber] = useState(
    profileDetails?.mobileNumber
  );

  const postDetails = (pics) => {
    if (pics === undefined) {
      alert("Please select an image");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "vaarta");
      data.append("cloud_name", "drrequdfx");
      fetch("https://api.cloudinary.com/v1_1/drrequdfx/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProfilePic(data.url.toString());
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Wrong input type");
      return;
    }
  };

  const handleSave = async () => {
    try {
      let response = await fetch(`${import.meta.env.VITE_BASE_URL}/profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          mobileNumber,
          pic: profilePic,
        }),
      });
      response = await response.json();
      setProfileDetails(response);
    } catch (error) {
      cosole.log(error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ lg: "2xl", md: "2xl", sm: "sm", base: "sm" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display="flex"
              flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap="10px"
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
              >
                <Image
                  borderRadius="100%"
                  src={profilePic}
                  width={"150px"}
                  height={"150px"}
                />
                <Box
                  background={"black"}
                  borderRadius={"100%"}
                  p="5px"
                  position={"relative"}
                  left="50px"
                  bottom="15px"
                  width="fit-content"
                  _hover={{ cursor: "pointer" }}
                >
                  <label htmlFor="input_image">
                    <Icon as={EditProfileIcon} />
                  </label>
                  <input
                    id="input_image"
                    type="file"
                    accept="image/"
                    onChange={(e) => {
                      postDetails(e.target.files[0]);
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <VStack alignItems={"left"} spacing={"20px"}>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>First Name</FormLabel>
                    <Input
                      type="text"
                      bgColor={"#f2f5fa"}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>Last Name</FormLabel>
                    <Input
                      type="text"
                      bgColor={"#f2f5fa"}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Box>
                  <Box>
                    <FormLabel fontWeight={"semibold"}>Email Address</FormLabel>
                    <Input
                      type="email"
                      bgColor={"#f2f5fa"}
                      value={email}
                      disabled
                    />
                  </Box>
                  <Box>
                    <FormLabel
                      fontWeight={"semibold"}
                      value={mobileNumber === -1 ? "" : mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    >
                      Mobile Number
                    </FormLabel>
                    <Input type="number" bgColor={"#f2f5fa"} />
                  </Box>
                </VStack>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              background="black"
              mr={3}
              onClick={onClose}
              textColor={"white"}
              _hover={{ background: "gray.700" }}
            >
              Cancel
            </Button>
            <Button colorScheme="orange" onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfileModal;
