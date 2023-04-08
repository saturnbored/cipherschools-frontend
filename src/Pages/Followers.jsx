import {
  Box,
  Button,
  Card,
  CardBody,
  Hide,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import MobileNavbar from "../Components/MobileNavbar";
import { useEffect, useState } from "react";

const FollowerCard = ({ firstName, lastName, followersCount, pic }) => {
  return (
    <>
      <Card maxW={"fit-content"} shadow={"xl"}>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box maxW={"fit-content"}>
            <Image
              src={pic}
              borderRadius={"100%"}
              width={"100px"}
              height={"100px"}
            />
          </Box>
          <Box maxW={"fit-content"} px="2px">
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              {`${firstName} ${lastName}`}
            </Text>
            <Text>Follower's Bio</Text>
            <Text>{followersCount} Followers</Text>
            <Button colorScheme="orange" width={"100%"}>
              Follow
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

const Followers = () => {
  useEffect(() => {
    const fetchFollowers = async () => {
      let response = await fetch(`${import.meta.env.VITE_BASE_URL}/followers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      });
      response = await response.json();
      setFollowers(response);
    };
    fetchFollowers();
  }, []);

  const [followers, setFollowers] = useState([]);

  return (
    <>
      <Box>
        <Hide below="lg">
          <Sidebar />
        </Hide>
        <Box pl={{ lg: "6vw", md: "6vw", sm: "6vw", base: "6vw" }}>
          <Navbar />
          <Box mt="10px" pl="20px">
            <Text pl={"20px"} fontWeight={"semibold"} fontSize={"xl"}>
              Users Following You
            </Text>
            <Box display={"flex"} flexWrap={"wrap"} gap="2vw">
              {followers.map((follower) => {
                return (
                  <FollowerCard
                    firstName={follower?.name?.firstName}
                    lastName={follower?.name?.lastName}
                    followersCount={follower?.followerCount}
                    pic={follower?.pic}
                  />
                );
              })}
            </Box>
          </Box>
          <Show below="lg">
            <MobileNavbar />
          </Show>
        </Box>
      </Box>
    </>
  );
};

export default Followers;
