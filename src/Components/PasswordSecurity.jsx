import { useState } from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";
import ChangePasswordModal from "./Modal/ChangePasswordModal";

export default function PasswordSecurity({
  profileDetails,
  setProfileDetails,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    console.log("isEditing: ", isEditing);
    setIsEditing(!isEditing);
  };

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          Password & Security
        </Heading>
        <Button
          bg="orange"
          size="sm"
          px="4"
          display="block"
          onClick={handleClick}
        >
          {!isEditing ? "Edit" : "Save"}
        </Button>
      </Box>
      <Box ml="1">
        <Heading as="h4" size="sm" textAlign="left" mb="2">
          Password
        </Heading>
        <Input
          pr="4.5rem"
          type="password"
          disabled={!isEditing ? true : false}
          value="current password"
        />
      </Box>
      {isEditing && (
        <ChangePasswordModal
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          profileDetails={profileDetails}
          setProfileDetails={setProfileDetails}
        />
      )}
    </Box>
  );
}
