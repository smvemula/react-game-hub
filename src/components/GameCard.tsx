import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer key={game.id}>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
              key={game.id}
            ></PlatformIcon>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
