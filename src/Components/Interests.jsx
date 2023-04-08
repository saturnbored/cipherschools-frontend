import React, { useEffect, useState } from "react";
import { Box, Heading, Textarea, Button } from "@chakra-ui/react";
import InterestsModal from "./Modal/InterestsModal";

export default function Interests({ profileDetails, setProfileDetails }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (e) => {
    setIsEditing(!isEditing);
    
  };

  useEffect(() => {
    profileDetails?.interests?.forEach((item) => {
      interestCategory[
        interestCategory.findIndex((interest) => interest.category === item)
      ].isSelected = true;
    });
    setInterests(interestCategory);
  }, [profileDetails]);

  let interestCategory = [
    {
      category: "App Development",
      isSelected: false,
    },
    {
      category: "Web Development",
      isSelected: false,
    },
    {
      category: "Game Development",
      isSelected: false,
    },
    {
      category: "Data Structures",
      isSelected: false,
    },
    {
      category: "Programming",
      isSelected: false,
    },
    {
      category: "Machine Learning",
      isSelected: false,
    },
    {
      category: "Data Science",
      isSelected: false,
    },
    {
      category: "Others",
      isSelected: false,
    },
  ];

  const [interests, setInterests] = useState(interestCategory);

  return (
    <Box display="flex" flexDir="column">
      <Box display="flex" flexDir="row" justifyContent="space-between" mb="4">
        <Heading as="h3" size="md" textTransform="uppercase">
          Interests
        </Heading>
        <Button
          bg="orange"
          size="sm"
          px="4"
          display="block"
          onClick={handleClick}
        >
          Edit
        </Button>
      </Box>

      {isEditing && (
        <InterestsModal
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          interests={interests}
          setInterests={setInterests}
          setProfileDetails = {setProfileDetails}
        />
      )}

      <Box display="flex" gap="6" fontSize="sm" flexWrap="wrap" maxWidth="70vw">
        {interests.map((interest, index) => {
          return (
            interest.isSelected && (
              <Box
                key={index}
                ml="1"
                bgColor="orange.100"
                textColor="orange.500"
                px="3"
                borderRadius="10"
                boxShadow="md"
                py="1"
              >
                {interest.category}
              </Box>
            )
          );
        })}
      </Box>
    </Box>
  );
}
