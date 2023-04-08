import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Avatar,
  Switch,
  Button,
  Hide,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineCompass } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // ml={{ lg: "2vw", md: "1vw", sm: "1vw", base: "1vw" }}
        width={"100%"}
        pl = "2vw"
        pr = {{lg: "6vw", md: "4vw", sm: "2vw", base: "2vw"}}
        pt = "1vh"
        // position={"fixed"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={{md: "100%", sm: "100%", base: "100%", lg: "fit-content"}}
        >
          <Box display={"flex"} gap="10px" alignItems={"center"}>
            <Box>
              <Image
                src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                maxWidth={"35px"}
              />
            </Box>
            <Box>
              <Text
                textColor={"#222831"}
                fontWeight={"bold"}
                fontSize={{ lg: "2xl", md: "xl", sm: "xl", base: "xl" }}
              >
                CipherSchools
              </Text>
            </Box>
          </Box>

          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                leftIcon={<AiOutlineCompass />}
                background={"none"}
                _hover={""}
                _active={""}
                fontWeight={""}
              >
                Browse
              </MenuButton>
              <MenuList>
                <MenuItem>App Development</MenuItem>
                <MenuItem>Web Development</MenuItem>
                <MenuItem>Game Development</MenuItem>
                <MenuItem>Data Structures</MenuItem>
                <MenuItem>Programming</MenuItem>
                <MenuItem>Machine Learning</MenuItem>
                <MenuItem>Data Science</MenuItem>
                <MenuItem>Others</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap="3vw"
          justifyContent={"flex-end"}
          maxW={"fit-content"}
        >
          <Hide below="lg">
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CiSearch />}
                />
                <Input
                  type="text"
                  placeholder="Search and Learn"
                  borderRadius={"full"}
                  background={"gray.100"}
                  width={"28vw"}
                />
                <InputRightElement
                  children={
                    <Menu>
                      <MenuButton>
                        <svg
                          width="17px"
                          height="16px"
                          fill="none"
                          viewBox="0 0 20 16"
                          className="nav-search-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-controls=""
                          aria-haspopup="true"
                        >
                          <path
                            d="M6 16.0005C4.17526 16.0014 2.58119 14.7673 2.125 13.0005H0V11.0005H2.126C2.64564 8.98794 4.62012 7.70874 6.66928 8.05706C8.71845 8.40537 10.1594 10.2651 9.98486 12.3363C9.81035 14.4075 8.07856 16 6 16.0005ZM6 10.0005C4.9074 10.0016 4.01789 10.8793 4.00223 11.9718C3.98658 13.0643 4.85057 13.9672 5.94269 13.9996C7.03481 14.032 7.95083 13.182 8 12.0905V12.4905V12.0005C8 10.8959 7.10457 10.0005 6 10.0005ZM20 13.0005H11V11.0005H20V13.0005ZM11 8.00049C9.17563 8.00096 7.58209 6.76693 7.126 5.00049H0V3.00049H7.126C7.64564 0.987939 9.62012 -0.291258 11.6693 0.0570554C13.7184 0.405368 15.1594 2.26511 14.9849 4.33633C14.8103 6.40755 13.0786 7.99996 11 8.00049ZM11 2.00049C9.9074 2.0016 9.01789 2.87934 9.00223 3.97183C8.98658 5.06433 9.85056 5.9672 10.9427 5.99961C12.0348 6.03203 12.9508 5.18199 13 4.09049V4.49049V4.00049C13 2.89592 12.1046 2.00049 11 2.00049ZM20 5.00049H16V3.00049H20V5.00049Z"
                            fill="black"
                          ></path>
                        </svg>
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Video</MenuItem>
                        <MenuItem>Course</MenuItem>
                        <MenuItem>Instructor</MenuItem>
                        <MenuItem>All</MenuItem>
                      </MenuList>
                    </Menu>
                  }
                />
              </InputGroup>
            </Box>
          </Hide>
          <Box display="flex">
            <svg
              width="15"
              height="19"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-notification-icon"
              title="Notification"
            >
              <path
                d="M19.0724 18.9615L17.4186 17.3077V10.8974C17.4186 6.96154 15.316 3.66667 11.6493 2.79487V1.92308C11.6493 0.858974 10.7904 0 9.72625 0C8.66215 0 7.80318 0.858974 7.80318 1.92308V2.79487C4.12369 3.66667 2.03395 6.94872 2.03395 10.8974V17.3077L0.380099 18.9615C-0.427593 19.7692 0.136509 21.1538 1.27753 21.1538H18.1622C19.316 21.1538 19.8801 19.7692 19.0724 18.9615ZM14.8545 18.5897H4.59805V10.8974C4.59805 7.71795 6.53395 5.12821 9.72625 5.12821C12.9186 5.12821 14.8545 7.71795 14.8545 10.8974V18.5897ZM9.72625 25C11.1365 25 12.2904 23.8462 12.2904 22.4359H7.16215C7.16215 23.1159 7.4323 23.7681 7.91316 24.249C8.39402 24.7299 9.04621 25 9.72625 25Z"
                fill="black"
              ></path>
            </svg>
            <Hide below="lg">
              <Text>0</Text>
            </Hide>
          </Box>
          <Hide below="lg">
            <Box display="flex" alignItems="center" gap="2vw">
              <Box pt={"10px"}>
                <Menu>
                  <MenuButton>
                    <CgProfile size={"27px"} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>DashBoard</MenuItem>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>Enrolled Courses</MenuItem>
                    <MenuItem>Wishlist</MenuItem>
                    <MenuItem>Liked Videos</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box display="flex" gap="1vw">
                <Avatar
                  src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
                  width={"25px"}
                  height={"25px"}
                />
                <Text>0</Text>
              </Box>
            </Box>
          </Hide>
          <Box>
            <Switch />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
