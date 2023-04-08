import React, { useState } from "react";

import {
  Box,
  Heading,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { RiLinkedinFill, RiInstagramFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook, BsGlobe2 } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

export default function OnTheWeb() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(!isEditing);
    // Make a PUT request to the server to update the user's On the Web section
  };

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          On the Web
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
      <Box
        ml="1"
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
            LinkedIn
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<RiLinkedinFill />} />
            <Input placeholder="LinkedIn" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h4" size="sm" textAlign="left" mb="2">
            GitHub
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<AiOutlineGithub />} />
            <Input placeholder="GitHub" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h4" size="sm" textAlign="left" mb="2">
            Facebook
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<BsFacebook />} />
            <Input placeholder="Facebook" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h4" size="sm" textAlign="left" mb="2">
            Twitter
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<AiFillTwitterCircle />} />
            <Input placeholder="Twitter" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h4" size="sm" textAlign="left" mb="2">
            Instagram
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<RiInstagramFill />} />
            <Input placeholder="Instagram" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
        <Box>
          <Heading as="h4" size="sm" textAlign="left" mb="2">
            Your Website
          </Heading>
          <InputGroup size="md">
            <InputLeftElement children={<BsGlobe2 />} />
            <Input placeholder="Your Website" borderRadius="xl" disabled={!isEditing? true: false} />
            <InputRightElement
              children={<MdModeEdit size="20" />}
              display={isEditing ? "inline" : "none"}
              mt="3"
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
}
