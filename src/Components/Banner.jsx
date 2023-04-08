import {
  HStack,
  Icon,
  VStack,
  Box,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import banner from "../assets/banner.png";
import UpdateProfileModal from "./Modal/UpdateProfileModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditProfileIcon = () => {
  return (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pf-profile-pencil-icon"
      width={"15px"}
    >
      <path
        d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z"
        fill="white"
      ></path>
      <path
        d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z"
        fill="white"
      ></path>
    </svg>
  );
};

const Banner = ({ profileDetails, setProfileDetails }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setProfileImage(profileDetails?.pic);
  }, [profileDetails]);

  const [profileImage, setProfileImage] = useState(profileDetails?.pic);

  return (
    <>
      <Box
        height={"fit-content"}
        h={{ lg: "133px", md: "123px", sm: "123px", base: "123px" }}
      >
        <Box
          backgroundImage={banner}
          width={"100%"}
          height={{ lg: "133px", md: "123px", sm: "123px", base: "123px" }}
        ></Box>
        <HStack
          width="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pl="3vw"
          pr="8vw"
          py="2vh"
          position={"relative"}
          height={{ lg: "133px", md: "123px", sm: "123px", base: "123px" }}
          bottom={{ lg: "132px", md: "123px", sm: "123px", base: "123px" }}
          bgGradient={"linear(to-r, white, transparent, white)"}
        >
          <Box display="flex" alignItems={"center"} gap="2vw">
            <Box>
              <Image src={profileImage} width={"80px"} height={"80px"} />
              <Box
                background={"black"}
                borderRadius={"100%"}
                p="5px"
                position={"relative"}
                left="25px"
                bottom="15px"
                width="fit-content"
                _hover={{ cursor: "pointer" }}
                onClick={onOpen}
              >
                <Icon as={EditProfileIcon} />
              </Box>
            </Box>
            <UpdateProfileModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              EditProfileIcon={EditProfileIcon}
              profileDetails={profileDetails}
              setProfileDetails={setProfileDetails}
            />
            <VStack alignItems={"left"} spacing={"-1"}>
              <Text>Hello,</Text>
              <Text
                textColor={"#222831"}
                fontWeight={"bold"}
                fontSize={{ lg: "2xl", md: "xl", sm: "xl", base: "xl" }}
              >
                {`${profileDetails?.name?.firstName} ${profileDetails?.name?.lastName}`}
              </Text>
              <Text>{`${profileDetails?.email}`}</Text>
            </VStack>
          </Box>
          <Box>
            <Link to="/followers">
              <Text>
                {profileDetails?.followerCount
                  ? profileDetails.followerCount
                  : 0}{" "}
                Followers
              </Text>
            </Link>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Banner;
