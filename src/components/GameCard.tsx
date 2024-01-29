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
    <GameCardContainer>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"xl"}>{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
              key={game.id}
            ></PlatformIcon>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
