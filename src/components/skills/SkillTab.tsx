import { Avatar, Tag, TagLabel } from "@chakra-ui/react";

export const SkillTab = () => {
  return (
    <Tag size="lg" colorScheme="red" borderRadius="full">
      <Avatar src="https://bit.ly/sage-adebayo" size="xs" name="Segun Adebayo" ml={-1} mr={2} />
      <TagLabel>Segun</TagLabel>
    </Tag>
  );
};
