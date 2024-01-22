import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

interface ContentBoxProps {
  title: string;
  content: string;
}

type Props = ContentBoxProps;

const ContentBox: React.FunctionComponent<Props> = (props) => {
  return (
    <Flex layerStyle="filter">
      <Text textTransform="capitalize" fontSize="md">
        {props.title}:
      </Text>
      <Text ml={3} fontSize="md">
        {props.content}
      </Text>
    </Flex>
  );
};

export default ContentBox;
