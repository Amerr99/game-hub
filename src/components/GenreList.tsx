import { HStack, Image, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root unstyled>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link fontSize="lg" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
