import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/GameGrid";
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>

      <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
        aside
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
