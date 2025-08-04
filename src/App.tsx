import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>

      <GridItem
        area={"aside"}
        bg={"coral"}
        display={{ base: "none", lg: "block" }}
      >
        aside
      </GridItem>
      <GridItem area={"main"} bg={"blue"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
