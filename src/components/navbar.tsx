import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>The Stark</Text>
    </HStack>
  );
};

export default Navbar;
