import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelected: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelected, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={"32px"}
                borderRadius={"8px"}
                src={getCroppedUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant={"link"}
                fontSize={"lg"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelected(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
