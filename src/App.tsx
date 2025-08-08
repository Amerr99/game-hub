import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>

      <GridItem
        paddingX={5}
        area={"aside"}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
