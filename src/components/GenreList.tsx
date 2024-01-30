import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelected, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedUrl(genre.image_background)}
            ></Image>
            <Button
              variant={"link"}
              fontSize={"lg"}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelected(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
