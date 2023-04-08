import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function PasswordInput({placeholder, onChange, value, setValue}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick} bgColor="white" borderWidth="0" _hover={{bgColor: "white", borderWidth: "0"}}>
          {show ? <BsEye /> : <BsEyeSlash />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
