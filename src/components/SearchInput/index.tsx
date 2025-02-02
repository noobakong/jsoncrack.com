import React from "react";
import { Flex, Input, Text } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import ReactGA from "react-ga4";
import { AiOutlineSearch } from "react-icons/ai";
import { useFocusNode } from "src/hooks/useFocusNode";

export const SearchInput: React.FC = () => {
  const [searchValue, setValue, skip, nodeCount, currentNode] = useFocusNode();

  return (
    <Input
      type="search"
      size="xs"
      id="search-node"
      w={180}
      value={searchValue}
      onChange={e => setValue(e.currentTarget.value)}
      onFocus={() => ReactGA.event({ action: "focus_node_search", category: "User" })}
      placeholder="Search Node"
      onKeyDown={getHotkeyHandler([["Enter", skip]])}
      leftSection={<AiOutlineSearch />}
      rightSection={
        <Flex h={30} align="center" gap="sm">
          <Text size="xs" c="dimmed">
            {searchValue && `${nodeCount}/${nodeCount > 0 ? currentNode + 1 : "0"}`}
          </Text>
        </Flex>
      }
    />
  );
};
