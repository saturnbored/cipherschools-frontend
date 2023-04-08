import React, { useState } from "react";

import { Box, Heading, Textarea, Button } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

export default function ProfessionalInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    console.log("isEditing: ", isEditing);
    setIsEditing(!isEditing);
  };

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          Professional Information
        </Heading>
        <Button
          bg="orange"
          size="sm"
          px="4"
          display="block"
          onClick={handleClick}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Box>
      <Box ml="1" display="flex" flexDir="column">
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
        >
          <Box>
            <Heading as="h4" size="sm" textAlign="left" mb="2">
              Highest education
            </Heading>
            <Select disabled={!isEditing ? true : false}>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="higher-secondary">Higher Secondary</option>
              <option value="graduation">Graduation</option>
              <option value="post-graduation">Post Graduation</option>
            </Select>
          </Box>
          <Box>
            <Heading as="h4" size="sm" textAlign="left" mb="2">
              What do you do currently?
            </Heading>
            <Select disabled={!isEditing ? true : false}>
              <option value="schooling">Schooling</option>
              <option value="college-student">College Student</option>
              <option value="teaching">Teaching</option>
              <option value="job">Job</option>
              <option value="freelancing">Freelancing</option>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
