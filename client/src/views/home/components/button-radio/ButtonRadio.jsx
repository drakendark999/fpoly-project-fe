import { FormControl, FormLabel, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dragAndDrogSlice from "../../../../stores/slices/dragAndDrogSlice";

import phongSlice from "../../../../stores/slices/phongSlice";
import { filterPhong } from "../../../../selectors/selectPhong";

const ButtonRadio = (props) => {
    const dispatch = useDispatch();
    const handleButtonRadio = (value) => {
        let toaNha = value.substr(4, 1);

        dispatch(dragAndDrogSlice.actions.setToaNha(toaNha));
        dispatch(phongSlice.actions.setPhongBaseToaNha(toaNha));
    };

    return (
        <FormControl as="fieldset">
            <FormLabel as="legend">{props.title}</FormLabel>

            <RadioGroup defaultValue={props.data[0].name}>
                <HStack spacing="24px">
                    {props.data.map((item, index) => {
                        return (
                            <Radio
                                key={index}
                                value={item.name}
                                onChange={() => {
                                    handleButtonRadio(item.name);
                                }}
                            >
                                {item.name}
                            </Radio>
                        );
                    })}
                </HStack>
            </RadioGroup>
        </FormControl>
    );
};

export default ButtonRadio;
