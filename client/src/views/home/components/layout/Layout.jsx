import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../header/Header";
import Table from "../table/Table";
import FormSelect from "../form-select/FormSelect";

const Layout = () => {
    return (
        <Flex flexDirection="column">
            <Header />
            <FormSelect />
            <Table />
        </Flex>
    );
};

export default Layout;
