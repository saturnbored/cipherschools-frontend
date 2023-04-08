import React, { useState } from "react";

import { Box, Button, Textarea, Heading } from "@chakra-ui/react";

export default function AboutMe() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
    // Make a PUT request to the server to update the user's about me section
  };

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          About Me
        </Heading>
        <Button bg="orange" size="sm" px="4" display="block" onClick={handleClick}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Box>
      <Box ml="1">
        <Textarea
          placeholder="Add something about you."
          disabled={!isEditing ? true : false}
          rows="5"
          _placeholder={{ textColor: "black"}}
          bgColor="white"
        ></Textarea>
      </Box>
    </Box>
  );
}
