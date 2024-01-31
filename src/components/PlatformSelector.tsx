import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelected: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ selectedPlatformId, onSelected }: Props) => {
  const { data, isLoading, error } = usePlatforms();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {platform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              console.log(platform.name);
              onSelected(platform);
            }}
            closeOnSelect={true}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
