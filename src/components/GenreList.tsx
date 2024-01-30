import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
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
            <Button variant={"link"} fontSize={"lg"}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
