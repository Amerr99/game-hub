import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="lg">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
