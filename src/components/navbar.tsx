import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import { ColorModeButton } from "./ui/color-mode";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>The Stark</Text>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
