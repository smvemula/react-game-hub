import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  selectedSort: string;
  onSelected: (sort: string) => void;
}

export const sortingOptions = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];

const SortSelector = ({ selectedSort, onSelected }: Props) => {
  const currentSort =
    sortingOptions.find((sort) => sort.value == selectedSort) ||
    sortingOptions[0];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {"Order By: " + currentSort?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingOptions.map((sort) => (
          <MenuItem
            key={sort.value}
            onClick={() => {
              onSelected(sort.value);
            }}
            closeOnSelect={true}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
