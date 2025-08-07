import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetacriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} paddingX={2} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default MetacriticScore;
