import {
  FormControl,
  FormLabel,
  Checkbox,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";

const ButtonCheckBox = (props) => {
  return (
    <FormControl as="fieldset" w="400px">
      <FormLabel as="legend">{props.title}</FormLabel>

      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        {props.data.map((item, index) => {
          return (
            <GridItem>
              <Checkbox key={index} size="md">
                {item.name}
              </Checkbox>
            </GridItem>
          );
        })}
      </Grid>
    </FormControl>
  );
};

export default ButtonCheckBox;
